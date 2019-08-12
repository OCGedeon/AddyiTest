<?php 
require_once 'config.php';
require_once ENV_FILE;
switch(strval($_REQUEST["action"]))
 {
 	case "getQuestionnaire":
 		refreshToken();
		echo getQuestionnaire();
		die();
	break;
}

/**
* Function to refresh token
**/

function refreshToken(){
	global $access_token;
	$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://accounts.charmtracker.com/oauth/v2/token?refresh_token='.getenv('CHARM_REFRESH_TOKEN').'&client_id='.getenv('CHARM_CLIENT_ID').'&client_secret='.getenv('CHARM_CLIENT_SECRET').'&grant_type=refresh_token');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');

    $output = curl_exec($ch);
    $json = json_decode($output,true);
    //echo "<pre>"; print_r($json);echo "</pre>";
    curl_close($ch);
    $access_token = $json["access_token"];
}

/**
* Function to get list of questions
**/
function getQuestionnaire(){
	global $access_token;
	$correct_answer = array(
		"41864000011077939" => "yes",
		"41864000011077941" => "female",
		"41864000011077943" => "yes",
		"41864000011077945" => "yes",
		"41864000011077949" => "yes",
		"41864000011077951" => "yes",
	);

	$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://ehr.charmtracker.com/api/ehr/v1/questionnaire/'.getenv('CHARM_TEMPLATE_ID'));
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
    
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    	'api_key: '.getenv('CHARM_API_KEY'),
    	'Authorization: Bearer '.$access_token
	));

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');

    $output = curl_exec($ch);
    $json = json_decode($output,true);
	curl_close($ch);
	$response_data = array();
	if($json['code'] == 0)
	{
		if(!empty($json['data']))
		{
			$questions_list = array();
			$first_quest = array(
				'question' => "1. Let's get to know you",
		        'questionSub' => "We respect your data & privacy. We've made it easy to understand how your information is handled to provide a secure and enjoyable experience. (DocTalkGo Privacy Policy)",
		        'inputType' =>  'choice',
		        'options' => array('agree', 'false'),
		        'optionsText' => array("I Agree & understand, let's get started!", "Terms of Service & Agreement"),
		        'links' => array(false, 'showPrivacyPolicy()'),
		        'name' => 'privacy',
		        'validation' => false,
		        'correctAnswer' => 'agree'
        	);
        	array_push($questions_list,$first_quest);
			$counter = 2;
			foreach ($json['data'] as $row) {
				$question = array(
					'question' => $counter.'. '.trim($row['notes']),
					'name' => (string)$row['entry_id'],
					'validation' => (!empty($row['is_mandatory']) ? true : false),
					//'correctAnswer' => 'Yes',
					//'entry_id' => $row['entry_id']
				);

				if(array_key_exists($row['entry_id'],$correct_answer))
				{
					$question['correctAnswer'] = $correct_answer[$row['entry_id']];
				}

				switch($row['notes_type'])
				{
					case 'Question':
					case 'Simple Question':
						$question['inputType'] = 'text';
						$question['placeholder'] = 'Type your answer here';
					break;
					case 'Question with Options':
						$question['links'] = array();
						if($row['is_multi_choice'])
						{
							$question['inputType'] = 'checkbox';
						}
						else
						{
							$question['inputType'] = 'choice';
						}
						$question['optionsText'] = $row['options'];
						array_walk($row['options'], function(&$v){
						    $v = str_replace(' ', '_', trim(strtolower($v)));
						});
						$question['options'] = $row['options'];
						$question['links'] = array_fill(0, count($row['options']), false);
						//array_pad($question['links'], count($row['options']), 'false');
					break;
					case 'Yes/No Question':
						$question['links'] = array();
						$question['options'] = array('yes','no');
						$question['optionsText'] = array('Yes','No');
						$question['inputType'] = 'choice';
						//array_pad($question['links'], 2, 'false');
						$question['links'] = array_fill(0, 2, false);
					break;
					case 'Date':
						$question['inputType'] = 'date';
					break;
				}
				$counter++;
				$questions_list[] = $question;
			}
			$response_data["status"] = "success";
			$response_data["data"] = (object) $questions_list;
			//$response_data["json_data"] = $json;
		}
	}
	else
	{
		$response_data["status"] = "error";
	}
	return json_encode($response_data);
}
?>