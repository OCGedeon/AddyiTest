<?php
require_once '../../global-config.php';
require_once 'config.php';
require_once VENDOR_DIR . '/autoload.php';
require_once ENV_FILE;
if (file_exists('functions.php'))
  include_once 'functions.php';
header('Content-type: application/json');


function extractAnswer($answer, $type) {
  switch ($type) {
      case 'boolean':
          return $answer['boolean'];
          break;
      case 'choice':
          return $answer['choice']['label'];
          break;
      case 'choices':
          return implode(", ", $answer['choices']['labels']);
          break;
      default:
          return null;
  }
}

function findAnswerByFieldId($answers, $fieldId, $type) {
  for ($x = 0; x < sizeof($answers); $x++) {
      if ($answers[$x]['field']['id'] == $fieldId) {
          return extractAnswer($answers[$x], $type);
      }
  }
  return null;
}

if ($_POST['signed'] == "admintesting") {
  $amount = 1;
}

/* terms */
$terms_1 = "Terms & Conditions March 10, 2014 Notice for customers nationwide – you are entering into an agreement with doctalkgo.com. Use of the App and Website. doctalkgo.com…, A California Corporation (“we”, “us”, or “our”), all doing business as doctalkgo.com, operate a doctalkgo.com website. Through the Website we offer online telehealth service (the “Service”) that, when clinically appropriate, lets men and women nationwide get care from our doctors. If you request to use the Service and our doctors consider it appropriate, we will give you a prescription and send it to a pharmacy to fulfill on your behalf. By completing a doctor telehealth consult, you agree to be bound by these Terms of Use, the Consent to Telehealth, and the Privacy Policy that appear on Website. If you do not wish to be bound by these Terms of Use, you may not use our services or request for services. Website Content. Other than the personalized doctor consult received, or the personalized nutritional advice we give you during a consult, you should not consider content on the Website to be medical advice. Ownership. The Website and their entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection, and arrangement thereof), are owned or used under license by doctalkgo.com and are protected by United States and international copyright, trademark, trade secret, and other intellectual property or proprietary rights laws. These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Website except as generally and ordinarily permitted through the Website according to these Terms of Use. You must not access or use for any commercial purposes any part of the Website. Trademarks. Certain names, logos, and other materials displayed on the Website may constitute trademarks, trade names, service marks or logos (“Marks“) of doctalkgo.com or other entities. You are not authorized to use any such Marks without the express written permission of doctalkgo.com. Ownership of all such Marks and the goodwill associated therewith remains with us. Right to modify. We may at our sole discretion change, add, or delete portions of these Terms of Use at any time on a going-forward basis. Continued use of the Website following notice of any such changes will indicate your acknowledgment of such changes and agreement to be bound by the revised Terms of Use, inclusive of such changes. DISCLAIMER OF WARRANTIES. YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE IS AT YOUR SOLE RISK. WE PROVIDE THE WEBSITE ON AN “AS IS” AND “AS AVAILABLE” BASIS. DOCTALKGO.COM EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, NON-INFRINGEMENT, TITLE, OPERABILITY, CONDITION, QUIET ENJOYMENT, VALUE, ACCURACY OF DATA, AND SYSTEM INTEGRATION. LIMITATION OF LIABILITY. YOU UNDERSTAND THAT TO THE EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL DOCTALKGO.COM OR ITS OFFICERS, EMPLOYEES, DIRECTORS, PARENTS, SUBSIDIARIES, AFFILIATES, AGENTS OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OF THE APP, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE AND STRICT LIABILITY), WARRANTY, STATUTE OR OTHERWISE. To the extent that we may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of our liability will be the minimum permitted under such applicable law. Indemnification. You agree to indemnify, defend, and hold harmless DOCTALKGO.COM, its officers, directors, employees, agents, subsidiaries, affiliates, licensors, and suppliers, harmless from and against any claim, actions, demands, liabilities, and settlements, including, without limitation, reasonable legal and accounting fees (“Claims”), resulting from, or alleged to result from, your violation of these Terms of Use. Geographical Restrictions. You may only use the Website from a device located in the states in which we operate. DOCTALKGO.COM makes no representation that the Website is appropriate or available for use in locations outside the states in which we operate. Miscellaneous. These Terms of Use and your use of the App or Website shall be governed by the laws of the State of California, without giving effect to the principles of conflict of laws. Any dispute arising under or relating in any way to these Terms of Use will be resolved exclusively by final and binding arbitration in Los Angeles, California under the rules of the American Arbitration Association, except that either party may bring a claim related to intellectual property rights, or seek temporary and preliminary specific performance and injunctive relief, in any court of competent jurisdiction, without the posting of bond or other security. The parties agree to the personal and subject matter jurisdiction and venue of the courts located in Los Angeles, California, for any action related to these Terms of Use.   You understand that by checking the “I Agree” box for these Terms of Use, the Consent to Telehealth and Privacy Policy, when they are presented to you on the Website you are agreeing to these Terms of Use and the Consent to Telehealth and Privacy Policy and that such action constitutes a legal signature. No waiver by DOCTALKGO of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of DOCTALKGO to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision. If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.   The Digital Millennium Copyright Act of 1998 (the “DMCA“) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials appearing on the App or Website infringe your copyright, you (or your agent) may send us a notice requesting that the material be removed, or access to it blocked. In addition, if you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send us a counter-notice. Notices and counternotices must meet statutory requirements imposed by the DMCA. One place to find more information is the U.S. Copyright Office Web site, currently located at https:// www.loc.gov/copyright. Any written Notification of Claimed infringement should comply with Title 17, United States Code, Section 512(c)(3)(A) and should be provided in writing to Director, doctalkgo.com. dba: doctalkgo.com– 1141 North Brand Boulevard, Suite 306, Glendale, CA, 91202";

$terms_2 = "Privacy Policy\n By signing and submitting this form I acknowledge that I have been provided ample opportunity to read this document or that it has been read to me. I understand the below-stated office policies and the financial agreement with DocTalkGo, and will comply with them in all respects. I acknowledge that I have received the Notice of the Privacy Practices. Lastly, I understand all of the below and give my oral and written consent to the evaluation and treatment to cover the entire course of treatments\n \n\n 1. Introduction. Welcome to DocTalkGo 1.1. Effective Date. The effective date of this Agreement is May 1, 2017. 1.2. Agreement. DocTalkGo (“DocTalkGo“ or “Company“) recommends that you read the following terms and conditions carefully. By accessing or using the DocTalkGo website, the DocTalkGo Service, including any software applications made available by DocTalkGo (together, the “Website“ or “Service“), however accessed or used, you agree to be bound by these terms (the “Terms of Service“ or the “Agreement“). By clicking “I Agree”, you agree to be bound by this Agreement, constituting a legally binding agreement between DocTalkGo and you concerning your use of the Service. We encourage you to print the Agreement or save it to your computer for reference. 1.3. Separate Privacy Policy. By using the Service, you represent and warrant that you have read and understood, and agree to be bound by, this Agreement and DocTalkGo Privacy Policy (the “Privacy Policy“), which is incorporated into this Agreement by reference. The Privacy Policy is available at https://www.doctalkgo.com/privacy-policy/. 1.4. NOT FOR EMERGENCIES. THE SERVICE IS NOT FOR USE IN MEDICAL OR MENTAL HEALTH EMERGENCIES OR OTHER URGENT SITUATIONS. IF YOU THINK YOU MAY HAVE A MEDICAL OR MENTAL HEALTH EMERGENCY, CALL YOUR DOCTOR OR 911 IMMEDIATELY. 1.5. No Permission Without Agreement. If you do not understand this Agreement, or do not agree to be bound by it or the Privacy Policy, you may not access or use the Service, and you must immediately cease accessing or using the Service. 1.6. Arbitration and Remedies. These terms contain a mandatory arbitration of disputes provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions, and also limits the remedies available to you in the event of a dispute. See Section 22 (Dispute Resolution) for full details.\n \n\n 2. Privacy Policy. By using the Service, you consent to the collection and use of certain information about you, as specified in the Privacy Policy discussed in Section 1.3 (Separate Privacy Policy). DocTalkGo encourages users of the Service to frequently check the Privacy Policy for changes.\n \n\n 3. Changes to Agreement and Privacy Policy. Internet technology and the applicable laws, rules, and regulations change frequently. DocTalkGo reserves the right to change this Agreement and its Privacy Policy at any time upon notice to you (including by posting a new version, or sending you a change notice). It is your responsibility to review this Agreement and the Privacy Policy periodically. If at any time you find either this Agreement or the Privacy Policy unacceptable, you must immediately cease accessing Service. Unless DocTalkGo obtains your express consent, any revised Privacy Policy will apply only to information collected by DocTalkGo after the revised Privacy Policy takes effect, and not to information collected under any earlier versions of the Privacy Policy.\n \n\n 4. Eligibility. 4.1. By accessing and/or using the Service, including by doing so after accessing this Agreement, you represent and warrant that you are either (1) at least 18 years old, and are otherwise legally qualified to enter into and form contracts under applicable law or (2) between the ages of 13 and 18 and have submitted a signed parental and/or guardian consent form to DocTalkGo. 4.2. Corporate Use. If you are using the Service on behalf of a company, you further represent and warrant that you are authorized to act and enter into contracts on behalf of that company.\n \n\n 5. Telehealth Platform; Acceptance Required. Without limitation, you agree that DocTalkGo is merely a telehealth platform, and that you use the Service at your own risk and pursuant to Section 10 (Assumption of Risk; Release). 5.1. No Duty of Care Until Accepted by Doctor. You understand and agree that DocTalkGo and its team of doctors will take responsibility for your care only after you have been accepted as a patient by DocTalkGo. In order to be accepted as a patient, (i) you must complete and answer all the required health questions on the new patient form, the renewal form, and the consent form, as applicable (collectively, the “Patient Forms”; (ii) you must provide a valid driver’s license number to establish you are of legal age; (iii) a doctor must review your requests for treatment, your Patient Forms, any photographs submitted by you, and/or information received from a video, telephonic, or Internet chat consultation (each, a “Teleconsultation”); (iv) the doctor must determine you are a good candidate for the receipt of telehealth services. You understand and agree that the duty of care does not arise at the point of your submission of Patient Forms or other inquiry, at the point of payment, or during a Teleconsultation, but at the point at which a doctor accepts a duty of care. 5.2. Right of Refusal. You understand and agree that any DocTalkGo doctor has the right to refuse to take responsibility for your care if said doctor determines, in the doctor’s exclusive professional judgment, that you are not a proper candidate for the Service. 5.3. Website Material Is Not Medical Advice. You understand and agree that, except for any communications from a DocTalkGo doctor directly to you regarding your personal health, no information provided on the Website or through the Service constitutes professional medical advice and is intended for informational purposes only. You agree that you will never disregard professional medical advice or delay seeking it due to something you have read on the Website. 5.4. Risks Inherent in Teleconsultations. You understand and agree that important differences exist between the telehealth model of care and traditional healthcare. By using a telehealth platform, you are assuming increased responsibility for your own health and treatment option, including the responsibility to apply general information gleaned from the Website and other Internet sources to your personal health and symptoms. You understand and agree that, by choosing to obtain a Teleconsultation, you are assuming all risks of foregoing an in- person, physical consultation, including a physical exam that could identify a medical condition that requires further investigation or immediate treatment. 5.5. Risks Inherent in Medication and Supplements. All medicines prescribed or recommended by a DocTalkGo doctor pose risks of serious side effects and adverse events, including severe allergic reaction, permanent disability, and death. You understand and agree that it is your responsibility to inform all your health care providers of any allergies, past symptoms, your history with tobacco, drugs, or alcohol, or medications or supplements taken by you and to make an informed decision regarding the risks and benefits of any medicine or supplements being prescribed. 5.6. Confidentiality of Medical Information. Federal and State law govern the confidentiality of medical information. Please read DiDocTalkGo's Privacy Policy at https://www.doctalkgo.com/privacy-policy/for information about how DocTalkGo collects, uses and discloses medical information through the Services.\n \n\n 6. License. Subject to your compliance with these Terms of Service, DocTalkGo grants you a non-exclusive, non-sublicensable, revocable as stated in this Agreement, non-transferable license to access the Website, and to use the Service. No part of the Service, including the Website, may be reproduced, duplicated, copied, modified, sold, resold, distributed, transmitted, or otherwise exploited for any commercial purpose without the prior express written consent of DocTalkGo. All rights not expressly granted in this Agreement are reserved by DocTalkGo. Without limitation, this Agreement grants you no rights to the intellectual property of DocTalkGo or any other party, except as expressly stated in this Agreement. The license granted in this section is conditioned on your compliance with this Agreement. Your rights under this section will immediately terminate if, in the sole judgment of DocTalkGo, you have breached any provision of this Agreement. 7. Software Updates. DocTalkGo reserves the right, in its sole discretion, to update, modify, or remove the features, functionality, or other aspects of its Website and Service at any time. 8. DocTalkGo Practice. DocTalkGo doctors, nutritionists, and other healthcare professionals are part of the DocTalkGo practice. 9. No Reliance on Third Party Content. Opinions, advice, statements, or other information made available through the Service by third parties are those of their respective authors, and should not necessarily be relied upon. Those authors are solely responsible for their content. DocTalkGo does not: (i) guarantee the accuracy, completeness, or usefulness of any third-party information accessible on or through the Service; or (ii) adopt, endorse, or accept responsibility for the accuracy or reliability of any opinion, advice, or statement made by a third party through the Service. Under no circumstances will DocTalkGo be responsible for any loss or damage resulting from your reliance on information or other content posted through the Service transmitted to or by any third party.\n \n\n 10. Assumption of Risk; Release. You knowingly and freely assume all risk when using the Service.";

$terms_3 = "You, on behalf of yourself, your personal representatives, and your heirs, voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify DocTalkGo and its stockholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicensees, successors, and assigns (collectively, the “Company Parties“) from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or other damages or harm, whether to you or to third parties, that may result from your use of the Service.\n \n\n 11. User Account, Accuracy, and Security. 11.1. User Account. To use the Service, you must register and create a user account (“Account“). During the Account creation process, you will be asked to provide information that personally identifies you (“Personal Information“). 11.2. Patient Form and Account Information Accuracy. You represent and warrant that all user information you provide in connection with any Patient Form, your Account and your use of the Service is current, complete, and accurate, and you agree that you will update that information as necessary to maintain its completeness and accuracy by updating your personal Profile. You agree that you will not submit any fake content (including without limitation any Account, username, likeness, or Profile) to willfully and credibly impersonate another person, whether actual or fictitious. As a non-exhaustive example, you agree that you will not upload a Profile image that is not your likeness, or provide inaccurate information about your health condition. If DocTalkGo believes in its sole discretion that the information you provide is not current, complete, or accurate, DocTalkGo has the right to refuse you access to the Service, or to terminate or suspend your access at any time, or both. For additional information, see the Section concerning “User Ability to Access, Update, and Correct Personal Information” in DocTalkGo Privacy Policy. 11.3. No Pseudonyms. You must use your real name on DocTalkGo; pseudonyms are not allowed. Any use of a pseudonym violates Section 11.2 (Patient Form and Account Information Accuracy) and is cause for suspension or deletion of your Account. 11.4. Account Security. You will also be asked to provide a username, password, and possibly other information to secure your Account. You are entirely responsible for maintaining the confidentiality of your password. You may not use the username or password of any other person, nor may you share your username and password, nor may you circumvent any authentication mechanism requiring the entry of usernames, passwords, or any other information to gain unauthorized access to the Service. You agree to notify DocTalkGo immediately of any unauthorized use of your Account. DocTalkGo shall not be liable for any loss that you incur because of someone else using your Account, either with or without your knowledge. You may be held liable for any losses incurred by DocTalkGo, its affiliates, officers, directors, employees, consultants, agents, and representatives due to someone else’s use of your Account.\n \n\n 15. Payments. 15.2. You acknowledge and agree that DocTalkGo reserves the right to charge for access to the Service, including for Teleconsultations. DocTalkGo reserves the right, in its sole discretion, to change the fees and charges in effect, or to add new fees and charges, by posting such changes or providing notice to you. 15.3. All fees and charges are nonrefundable, and there are no refunds. Due to the nature of the Service, DocTalkGo cannot accept any return. 15.4. You agree to timely pay for all products ordered by you and other charges incurred by you through the Service. By using the Service, you authorize DocTalkGo and/or its payment processor to charge DocTalkGo fees to the payment method you provide, in addition to applicable sales and other taxes.\n \n\n 12. Interactions with Doctors. DocTalkGo facilitates communication between doctors and patients. You are solely responsible for your interactions with DocTalkGo doctors and for providing all necessary information to them. In no event shall DocTalkGo be liable for indirect, special, incidental, or consequential damages arising out of or relating to any user’s conduct in connection with such user’s use of the Service, including, without limitation, bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or any other damages resulting from communications or meetings between users. 13. Consent to Receive Electronic Communications from Company. By registering for the Service and providing your name, email, postal or residential address, and/or phone number through the Service, you expressly consent to receive electronic and other communications from DocTalkGo, over the short term and periodically, including email and short-message service (“SMS” or “text message”) communications. These communications will be about the Service, new product offers, promotions, and other matters. You may opt out of receiving electronic communications at any time by following the unsubscribe instructions contained in each communication, or by sending an email to unsubscribe@DocTalkGo.com. You agree that these electronic communications satisfy any legal requirements that communications or notices to you be in writing. 14. Consent to Receive Electronic Communications from Users. Without limitation, by registering for the Service and providing your name, email, postal or residential address, and/or phone number through the Service, you consent to receive electronic communications, including email, instant messages, video conferencing, and other personal messages from other users of the Service.\n \n\n 16. Third Party Websites. The Service may be linked with the websites of third parties (“Third Party Websites“), some of whom may have established relationships with DocTalkGo and some of whom may not. DocTalkGo does not have control over the content and performance of Third Party Websites. DocTalkGo has not reviewed, and cannot review or control, all of the material, including computer software or other goods or services, made available on Third Party Websites. Accordingly, DocTalkGo does not represent, warrant, or endorse any Third Party Websites, or the accuracy, currency, content, fitness, lawfulness, or quality of the information, material, goods, or services available through Third Party Websites. DocTalkGo disclaims, and you agree to assume, all responsibility and liability for any damages or other harm, whether to you or to third parties, resulting from your use of Third Party Websites.";

$terms_4 = "17. Prohibited Uses. DocTalkGo imposes certain restrictions on your use of the Service. Any violation of this section may subject you to civil and/or criminal liability. The following are expressly prohibited: 17.1. harassing or stalking any person, or contacting any person who has requested not to be contacted 17.2. providing false, misleading, or inaccurate information to DocTalkGo or any other person in connection with the Service 17.3. impersonating, or otherwise misrepresenting affiliation, connection, or association with, any person or entity 17.4. modifying or changing the placement and location of any advertisement posted through the Service 17.5. harvesting or otherwise collecting information about users, including email addresses and phone numbers 17.6. without express written permission from DocTalkGo, using or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars, or intelligent agents) to harvest or otherwise collect information from the Service for any use, including without limitation use on Third Party Websites 17.7. accessing content or data not intended for you, or logging into a server or account that you are not authorized to access 17.8. attempting to probe, scan, or test the vulnerability of the Service, or any associated system or network, or breaching security or authentication measures without proper authorization 17.9. interfering or attempt to interfere with the use of the Service by any other user, host, or network, including (without limitation) by submitting malware or exploiting software vulnerabilities 17.10. using the Service to send unsolicited email, including without limitation promotions or advertisements for products or services 17.11. forging, modifying, or falsifying any network packet or protocol header or metadata in any connection with, or transmission to, the Service (for example, SMTP email headers, HTTP headers, or Internet Protocol packet headers)\n 17.12. while using the Service, using ad-blocking or other content-blocking software, browser extensions, or built-in browser options designed to hide, block, or prevent the proper display of online advertising 17.13. attempting to modify, reverse-engineer, decompile, disassemble, or otherwise reduce or attempt to reduce to a human-perceivable form any of the source code used by the Company Parties in providing the Service, including without limitation any fraudulent effort to modify software or any other technological mechanism for measuring the number of impressions generated by individual content and/or the overall Service to determine and/or audit advertising revenues and payments, if applicable 17.14. creating additional accounts to promote your (or another’s) business, or causing others to do so 17.15. paying anyone for interactions on the Service 18. Intellectual Property.\n \n\n 18.1. Compliance with Law. 18.1.1. You represent and warrant that, when using the Service, you will obey all applicable laws and respect the intellectual property rights of others. Your use of the Service is at all times governed by and subject to copyright and other intellectual property laws. You agree not to upload, post, transmit, display, perform, or distribute any content, information, or other materials in violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. 18.1.2. You represent and warrant that you are the sole and exclusive owner of any User Content that you submit through the Service. You shall be solely responsible for any violations of any laws and for any infringements of third- party rights caused by your use of the Service. DocTalkGo users bear the sole burden of proving that content, information, or other materials do not violate any laws or third-party rights. 18.2. Trademarks. DocTalkGo and the DocTalkGo logo (collectively, the “Company Marks“) are trademarks or registered trademarks of DocTalkGo. Other trademarks, service marks, graphics, logos, and domain names appearing anywhere on, through, or in connection with the Service may be the trademarks of third parties. Neither your use of the Service nor this Agreement grant you any right, title, or interest in, or any license to reproduce or otherwise use, the Company Marks or any third-party trademarks, service marks, graphics, logos, or domain names. You agree that any goodwill in the Company Marks generated as a result of your use of the Service will inure to the benefit of DocTalkGo, and you agree to assign, and do assign, all such goodwill to DocTalkGo. You shall not at any time, nor shall you assist others to, challenge DocTalkGo right, title, or interest in, or the validity of, the Company Marks. 18.3. Copyrighted Materials; Copyright Notice. All content and other materials available through the Service, including without limitation the DocTalkGo logo, design, text, graphics, and other files, and their selection, arrangement, and organization, are either owned by DocTalkGo or are the property of DocTalkGo licensors and suppliers. Except as explicitly provided, neither your use of the Service nor this Agreement grant you any right, title, or interest in any such materials. 18.4. DMCA Policy. 18.4.1. As DocTalkGo asks others to respect DocTalkGo intellectual property rights, DocTalkGo respects the intellectual property rights of others. DocTalkGo follows the notice and takedown procedures in the Digital Millennium Copyright Act (“DMCA“). 18.4.2. If you believe content located on or linked to by the Service violates your copyright, please immediately notify DocTalkGo by emailed DMCA takedown notice (“Infringement Notice“), providing the information described below. If DocTalkGo takes action in response to an Infringement Notice, it will make a good faith attempt to contact the party who made the content available at the most recent email address that party provided to DocTalkGo. 18.4.3. Under the DMCA, you may be held liable for damages based on material misrepresentations in your Infringement Notice. You must also make a good-faith evaluation of whether the use of your content is a fair use; fair uses are not infringing. (See 17 U.S.C. Section 107, available at https://www.law.cornell.edu/uscode/text/17/107(https ://www.law.cornell.edu/us code/text/17/107) , and Lenz v. Universal Music Corp., No. 13- 16106 (9th Cir. Sep. 14, 2015), available at https://www.courtlistener.com/opinion/2937139/stephanie-lenz-vuniversal-music-corp/ (https://www.courtlistener.com/opinion/2937139/stephanie-lenz-vuniversal-music-corp/) .) If you are not sure if content located on or linked to by the Service infringes your copyright, you should first contact an attorney. 18.4.4. The DMCA requires that all Infringement Notices must include the following: 18.4.4.1. A signature, electronic or physical, of the copyright owner or a person authorized to act on their behalf; 18.4.4.2. An identification of the copyright claimed to have been infringed; 18.4.4.3. A description of the nature and location of the material that you claim to infringe your copyright, in sufficient detail to permit DocTalkGo to find and positively identify that material; 18.4.4.4. Your name, address, telephone number, and email address; and 18.4.4.5. A statement by you: (i) that you believe in good faith that the use of the material that you claim to infringe your copyright is not authorized by law, or by the copyright owner or such owner’s agent; and, (ii) under penalty of perjury, that all of the information contained in your Infringement Notice is accurate, and that you are either the copyright owner or a person authorized to act on their behalf. 18.4.5. Infringement Notices should be sent to copyright@DocTalkGo.com with the subject line “DMCA Notice: (INSERT YOUR NAME OR YOUR COMPANY’S NAME)”. 18.4.6. DocTalkGo will respond to all DMCA-compliant Infringement Notices, including, as required or appropriate, by removing the offending material or disabling all links to the offending material. 18.4.7. Disclosure. All received Infringement Notices may be posted in full to the Lumen database (https://lumendatabase.org/ (https://lumendatabase.org/) ), previously known as the Chilling Effects Clearinghouse.\n \n\n 19. Disclaimers; Limitation of Liability. 19.1. No Warranties. DocTalkGo, on behalf of itself and its licensors and suppliers, expressly disclaims any and all warranties, express or implied, regarding the Service, arising by operation of law or otherwise, including without limitation any and all implied warranties of merchantability, fitness for a particular purpose, non-infringement, no encumbrance, or title, in addition to any warranties arising from a course of dealing, usage, or trade practice. Neither DocTalkGo nor its licensors or suppliers warrants that the Service will meet your requirements, or that the operation of the Service will be uninterrupted or error- free. DocTalkGo disclaims all implied liability for damages arising out of the furnishing of the Service pursuant to this Agreement, including without limitation, mistakes, omissions, interruptions, delays, tortious conduct, errors, representations, or other defects arising out of the failure to the furnish the Service, whether caused by acts of commission or omission, or any other damage occurring. DocTalkGo shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for lost profits or lost revenues), whether caused by the acts or omissions of DocTalkGo, Company Parties, or DocTalkGo users, or their agents or representatives. 19.2. Your Responsibility for Loss or Damage; Backup of Data. 19.2.1. You agree that your use of the Service is at your sole risk.";

$terms_5 = "You will not hold DocTalkGo or its licensors and suppliers, as applicable, responsible for any loss or damage that results from your access to and/or use of the Service, including without limitation any loss or damage to any of your computers, mobile devices, including without limitations tablets and/or smartphones, or data. The Service may contain bugs, errors, problems, or other limitations. 19.2.2. Importantly, you acknowledge that a catastrophic disk failure or other similar event could result in the loss of all of the data related to your account. You agree and understand that it is your responsibility to backup your data to your personal computer or external storage device and to ensure such backups are secure. 19.3. Limitation of Liability. In no event shall DocTalkGo or its licensors or suppliers be liable to you for any claims arising from your use with the Service, including without limitation for special, incidental, or consequential damages, lost profits, lost data or confidential or other information, loss of privacy, costs of procurement of substitute goods or services, failure to meet any duty including without limitation of good faith or of reasonable care, negligence, or otherwise, regardless of the foreseeability of those damages or of any advice or notice given to DocTalkGo or its licensors and suppliers arising out of or in connection with your use of the Service. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action. You agree that this limitation of liability represents a reasonable allocation of risk and is a fundamental element of the basis of the bargain between DocTalkGo and you. The Service would not be provided without such limitations. 19.4. Application of Disclaimers. The above disclaimers, waivers, and limitations do not in any way limit any other disclaimer of warranties or any other limitation of liability in any other agreement between you and DocTalkGo or between you and any of DocTalkGo licensors and suppliers. Some jurisdictions may not allow the exclusion of certain implied warranties or the limitation of certain damages, so some of the above disclaimers, waivers, and limitations of liability may not apply to you. DocTalkGo licensors and suppliers are intended third-party beneficiaries of these disclaimers, waivers, and limitations. No advice or information, whether oral or written, obtained by you through the Service or otherwise shall alter any of the disclaimers or limitations stated in this section.\n \n\n 20. Your Representations and Warranties. You represent and warrant that your use of the Service will be in accordance with this Agreement and any other DocTalkGo policies, and with any applicable laws or regulations. 21. Indemnity by You. 21.1. Without limiting any indemnification provision of this Agreement, you (the “Indemnitor“) agree to defend, indemnify, and hold harmless DocTalkGo and the Company Parties (collectively, the “Indemnitees“) from and against any and all claims, actions, demands, causes of action, and other proceedings (individually, “Claim“, and collectively, “Claims”), including but not limited to legal costs and fees, and providing sole and exclusive control of the defense of any action to DocTalkGo, including the choice of legal counsel and all related settlement negotiations, arising out of or relating to: (i) the relationship between you and DocTalkGo, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory; (ii) your breach of this Agreement, including without limitation any representation or warranty contained in this Agreement; (iii) your access to or use of the Service; (iv) your provision to DocTalkGo or any of the Indemnitees of information or other data; (v) your violation or alleged violation of any foreign or domestic, international, federal, state, or local law or regulation; or (vi) your violation or alleged violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. 21.2. The Indemnitees each have the individual right, but not the obligation, to participate through counsel of their choice in any defense by you of any Claim as to which you are required to defend, indemnify, or hold harmless any, each, and/or all Indemnitees. You may not settle any Claim without the prior written consent of the concerned Company Parties. 21.3. Without limitation, the Indemnitor also agrees to compensate DocTalkGo for any and all lost revenues, future lost profits, reasonable search costs, and any other reasonable expenses resulting from any Indemnitor violation of Section 20 (Prohibited Uses), including without limitation any suspension of affiliate accounts or affiliate payment attributable to fraudulent efforts to manipulate or otherwise modify reported impressions generated by the Company Parties under any affiliate advertising agreement.\n \n\n 22. Dispute Resolution. 22.1. Binding Arbitration. 22.1.1. If you and DocTalkGo cannot resolve a Claim through negotiations, either party may elect to have the Claim finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other(s). 22.1.2. You acknowledge that without this provision, you would have the right to sue in court with a jury trial or to participate in a class action. 22.1.3. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party. 22.1.4. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (“AAA“), as modified by this Agreement, available at the AAA website www.adr.org or by calling the AAA at 1-800-778-7879. Except as otherwise provided for in this Agreement, DocTalkGo will pay the AAA filing, administration, and arbitrator fees. If, however, the arbitrator finds that either the substance of your claim or the relief sought is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then you will pay the arbitrator fees, in addition to any amount that exceeds the filing fees. In that case, you also agree to reimburse DocTalkGo for all payments disbursed that are your obligation to reimburse under the AAA Rules. The arbitrator is bound by the terms of this Agreement. All issues are for the arbitrator to resolve, except that issues relating to the enforceability of the arbitration provision are for a Court of Competent Jurisdiction to resolve. The arbitration may be conducted in person, through document submission, through telephone, or online. The arbitrator will issue a decision in writing, but need only provide a statement of reasons if requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. DocTalkGo may litigate to compel arbitration in court, to stay proceedings pending arbitration, or to modify, confirm, vacate, or enter judgment on the award entered by the arbitrator. The arbitrator shall award costs to the prevailing party (including, without limitation, fees, expenses, and reasonable attorneys’ fees) at any time during the proceeding and upon request from either party, within 14 days of the arbitrator’s ruling on the merits. 22.2. Restrictions Against Joinder of Claims. 22.2.1. You and DocTalkGo agree that any arbitration shall be limited to each Claim individually. You and DocTalkGo agree that each may only bring claims against the other in your or DocTalkGo individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. 22.2.2. If this specific provision is found to be unenforceable in a Court of Competent Jurisdiction, the Claim will still be finally and exclusively resolved by binding arbitration upon the election of either party, and any election to arbitrate by one party shall be final and binding on the other(s). In addition: (1) no arbitration shall be joined with any other arbitration, and (2) there is no right for any Claim to be arbitrated on a class-action basis or to employ class action procedures, and (3) there is no right of authority for any dispute to be brought in a purported representative capacity on behalf either of the general public or any other individuals. 22.3. Remedies in Aid of Arbitration; Equitable Relief. This agreement to arbitrate will not preclude you or DocTalkGo from seeking provisional remedies in aid of arbitration, including without limitation orders to stay a court action, compel arbitration, or confirm an arbitral award, from a Court of Competent Jurisdiction. Furthermore, this agreement to arbitrate will not preclude you or DocTalkGo from applying to a Court of Competent Jurisdiction for a temporary restraining order, preliminary injunction, or other interim or conservatory relief, as necessary. “Court of Competent Jurisdiction“ means any federal or state court: (1) that has jurisdiction over the subject matter; and (2) that is located in San Diego County in the State of California. 22.4. Venue for any Judicial Proceeding. 22.4.1. This Agreement, including without limitation this Agreement’s interpretation, shall be treated as though this Agreement were executed and performed in the State of California, and shall be governed by and construed in accordance with the laws of the State of California without regard to its conflict of law principles. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party. 22.4.2. The proper venue for any judicial action arising out of, relating to, or in connection with this Agreement will be the state and federal courts located in or nearest to San Diego, California.";

$terms_6 = "The parties stipulate to, and agree to waive any objection to, the personal jurisdiction and venue of such courts, and further expressly submit to extraterritorial service of process.\n \n\n 23. Termination. 23.1. By Company. Without limiting any other provision of this Agreement, DocTalkGo reserves the right to, in DocTalkGo sole discretion and without notice or liability, deny use of the Service to any person for any reason or for no reason at all, including without limitation for any breach or suspected breach of any representation, warranty, or covenant contained in this Agreement, or of any applicable law or regulation. 23.2. Automatic Termination Upon Breach by You. This Agreement shall automatically terminate if you breach any of this Agreement’s representations, warranties, or covenants. Such termination shall be automatic, and shall not require any action by DocTalkGo. 23.3. By You. You may terminate this Agreement and your rights under it at any time, for any or no reason at all, by providing to DocTalkGo notice of your intention to do so, in the manner required by Section 27 (Notices). 23.4. Effect of Termination. 23.4.1. Any termination of this Agreement automatically terminates all rights and licenses granted to you under this Agreement, including all rights to use the Service. Upon termination, DocTalkGo may, but has no obligation to, in DocTalkGo sole discretion, rescind any services and/or delete from DocTalkGo systems all your Personal Information and any other files or information that you made available to DocTalkGo or that otherwise relate to your use of the Service. Upon termination, you shall cease any use of the Service. 23.4.2. After termination, DocTalkGo reserves the right to exercise whatever means it deems necessary to prevent your unauthorized use of the Service, including without limitation technological barriers such as IP blocking and direct contact with your Internet Service Provider. 23.5. Legal Action. If DocTalkGo, in DocTalkGo's discretion, takes legal action against you in connection with any actual or suspected breach of this Agreement, DocTalkGo will be entitled to recover from you as part of such legal action, and you agree to pay, DocTalkGo reasonable costs and attorneys’ fees incurred as a result of such legal action. The Company Parties will have no legal obligation or other liability to you or to any third party arising out of or relating to any termination of this Agreement. 23.6. Survival. Upon termination, all rights and obligations created by this Agreement will terminate, except that the following Sections will survive any termination of this Agreement: Section 1.2 (Agreement), Section 2 (Privacy Policy), Section 4 (Eligibility), Section 6 (License), Section 9 (No Reliance on Third Party Content), Section 10 (Assumption of Risk; Release), Section 11 (User Account, Accuracy, and Security), Section 16 (Third Party Websites), Section 17 (Prohibited Uses), Section 18 (Intellectual Property), Section 19 (Disclaimers; Limitation of Liability), Section 20 (Your Representations and Warranties), Section 21 (Indemnity by You), Section 22 (Dispute Resolution), Section 23 (Termination), Section 24 (Notices), Section 25.2 (Partial Invalidity), and Section 25 (General). 27. Notices. All notices required or permitted to be given under this Agreement must be in writing.\n \n\n 24.1. DocTalkGo shall give any notice by email sent to the most recent email address, if any, provided by the intended recipient to DocTalkGo. You agree that any notice received from DocTalkGo electronically satisfies any legal requirement that such notice be in writing. 24.2. You bear the sole responsibility of ensuring that your email address on file with DocTalkGo is accurate and current, and notice to you shall be deemed effective upon the sending by DocTalkGo of an email to that address. 24.3. You shall give any notice to DocTalkGo by email to notices@DocTalkGo.com\n \n\n 25. General. 25.1. Entire Agreement. This Agreement constitutes the entire agreement between DocTalkGo and you concerning your use of the Service. 25.2. Partial Invalidity. Should any part of this Agreement be declared invalid, void, or unenforceable by a Court of Competent Jurisdiction, such decision shall not affect the validity of any remaining portion of this Agreement, which shall remain in full force and effect, and the parties acknowledge and agree that they would have executed the remaining portion without including the part so declared by a Court of Competent Jurisdiction to be invalid, void, or unenforceable. 25.3. Amendments. This Agreement may only be modified by a written amendment signed by an authorized executive of DocTalkGo, or by the unilateral amendment of this Agreement by DocTalkGo along with the posting by DocTalkGo of that amended version. 25.4. No Waiver. A waiver by either party of any term or condition of this Agreement, or any breach, in any one instance, will not waive that term or condition or any later breach. 25.5. Assignment. This Agreement and all of your rights and obligations under it will not be assignable or transferable by you without the prior written consent of DocTalkGo. This Agreement will be binding upon and will inure to the benefit of the parties, their successors, and permitted assigns. 25.6. Independent Contractors. You and DocTalkGo are independent contractors, and no agency, partnership, joint venture, or employee-employer relationship is intended or created by this Agreement. 25.7. No Third Party Beneficiaries. There are no third-party beneficiaries to this Agreement, with the following exceptions: the Company Parties; DocTalkGo licensors and suppliers (to the extent expressly stated in this Agreement); and to the extent stated in the following Sections: Section 9 (No Reliance on Third Party Content), Section 16 (Third Party Websites), Section 19.4 (Application of Disclaimers). 25.8. Injunctive Relief. You acknowledge and agree that any actual or threatened breach of this Agreement or infringement of proprietary or other third-party rights by you would cause irreparable injury to DocTalkGo and DocTalkGo licensors and suppliers, and would therefore entitle DocTalkGo or DocTalkGo licensors or suppliers, as the case may be, to injunctive relief. 25.9. Headings. The headings in this Agreement are for convenience only, and shall have no legal or contractual effect.\n\n";

$terms_concat = $terms_1 . $terms_2 . $terms_3 . $terms_4 . $terms_5 . $terms_6;

$message = "";
$error = false;
$existing_patient = false;
if ($_POST['existing_patient'] == 'yes') {
  $existing_patient = true;
}

$data = filter_var_array($_POST, FILTER_SANITIZE_EMAIL);

$patient_email = "";
if (PAYMENT_GATEWAY == "stripe") {
  $patient_email = $_POST['stripeEmail'];
}
elseif (PAYMENT_GATEWAY == "coastal") {
  $patient_email = $data['billing_email'];
}
 
$patient = array(
  'first_name' => $data['first_name'],
  'last_name' => $data['last_name'],
  'dob' => $data['dob'],
  'gender' => $data['gender'],
  'facilities' => '[{"facility_id":"'.getenv('CHARM_FACILITY_ID').'"}]',
  'email' => $patient_email,
  'home_phone' => preg_replace('/[^0-9]/', '', $_POST['phone']),
  'address' => '{"state":"'.$_POST['state'].'", "zip_code":"'.$_POST['zip_code'].'"}'
);
$patientJSON = json_encode($patient);

if (PAYMENT_GATEWAY == "coastal") {
  $billing = array(
    'first_name' => urlencode($data['billing_first_name']),
    'last_name' => urlencode($data['billing_last_name']),
    'address1' => urlencode($data['billing_address']),
    'city' => urlencode($data['billing_city']),
    'state' => urlencode($data['billing_state']),
    'zip' => urlencode($data['billing_zip_code']),
    'email' => $patient_email
  );
}

if (PAYMENT_GATEWAY == "stripe") {
  /**********
  * STRIPE *
  **********/

  $stripe = [
    "secret_key"      => getenv('STRIPE_SECRET_KEY'),
    "publishable_key" => getenv('STRIPE_PUBLISHABLE_KEY'),
  ];

  \Stripe\Stripe::setApiKey($stripe['secret_key']);

  $customer = \Stripe\Customer::create([
    'email' => $patient_email,
    'source'  => $_POST['stripeToken'],
  ]);

  try {
    $charge = \Stripe\Charge::create([
      'customer' => $customer->id,
      'amount'   => $amount,
      'currency' => 'usd',
    ]);
  } catch(Exception $e) {
    $error = true;
    $message = "Error creating charge with Stripe";
  } 
}
elseif (PAYMENT_GATEWAY == "coastal") {
  $query = "";
  $query .= "username=" . getenv('COASTAL_USERNAME') . "&";
  $query .= "password=" . urlencode(getenv('COASTAL_PASSWORD')) . "&";
  $query .= "payment_token=" . urlencode($_POST["payment_token"]) . "&";
  $query .= "amount=" . urlencode(number_format($amount/100,2,".","")) . "&";
  $query .= "first_name=" . $billing['first_name'] . "&";
  $query .= "last_name=" . $billing['last_name'] . "&";
  $query .= "address1=" . $billing['address1'] . "&";
  $query .= "city=" . $billing['city'] . "&";
  $query .= "state=" . $billing['state'] . "&";
  $query .= "zip=" . $billing['zip'] . "&";
  $query .= "email=" . $billing['email'] . "&";
  $query .= "type=sale";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "https://coastalpay.transactiongateway.com/api/transact.php");
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
  curl_setopt($ch, CURLOPT_TIMEOUT, 30);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

  curl_setopt($ch, CURLOPT_FRESH_CONNECT, 1);
  curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);

  curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
  curl_setopt($ch, CURLOPT_POST, 1);
$goodoutput = curl_exec($ch);
  if (! $goodoutput) {
    $error = true;
 
  }
  if (strpos($goodoutput, 'Approved') == false) { $error = true;}

  curl_close($ch);
  unset($ch);
//   unset($goodoutput);
  
  
  
  
   
}


// /*********
//  * CHARM *
//  *********/

// if (!$error) {

//   $patient_id = "";

//   /* CHARM Step 1 - Get refresh token */
//   $ch = curl_init();

//   curl_setopt($ch, CURLOPT_URL, 'https://accounts.charmtracker.com/oauth/v2/token?refresh_token='.getenv('CHARM_REFRESH_TOKEN').'&client_id='.getenv('CHARM_CLIENT_ID').'&client_secret='.getenv('CHARM_CLIENT_SECRET').'&grant_type=refresh_token');

//   curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
//   curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
//   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

//   $output = curl_exec($ch);
//   $json = json_decode($output,true);
//   $token = $json['access_token'];
//   curl_close($ch);


//   /* CHARM Step 2 - Get patient ID */

//   // New patient (chose "no" for existing patient)
//   if (!$existing_patient) {

//     /* Create patient chart */
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, 'https://ehr.charmtracker.com/api/ehr/v1/patients');
//     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
//     //curl_setopt($ch, CURLOPT_HEADER, true);
//     //curl_setopt($ch, CURLINFO_HEADER_OUT, true);
//     curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//       "api_key: ".getenv('CHARM_API_KEY'), 
//       "Authorization: Bearer $token", 
//       "Content-type: application/json;"
//     ));
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $patientJSON);
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');
//     //curl_setopt($ch, CURLOPT_AUTOREFERER, true); 
//     //curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     //curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
//     //curl_setopt($ch, CURLOPT_VERBOSE, 1);

//     $output = curl_exec($ch);
//     $json = json_decode($output,true);
//     //echo "<pre>",print_r($json),"</pre>";
//     //echo "<pre>",print_r(curl_getinfo($ch)),"</pre>";
//     $patient_id = $json['patient']['patient_id'];
//     curl_close($ch);
//   }

//   else if ($existing_patient) { // if charge went through & they did select 'Existing Patient'
//     /* Look up patient */
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, 'https://ehr.charmtracker.com/api/ehr/v1/patients?facility_id='.getenv('CHARM_FACILITY_ID').'&first_name='.$data['first_name'].'&last_name='.$data['last_name'].'&gender='.$data['gender'].'&dob='.$data['dob']);
//     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
//     curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//       "api_key: ".getenv('CHARM_API_KEY'), 
//       "Authorization: Bearer $token", 
//       "Content-type: application/json;"
//     ));
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');

//     $output = curl_exec($ch);
//     $json = json_decode($output,true);
//     //echo "<pre>",print_r($json),"</pre>";
//     //echo "results: ",count($json['patients']);

//     if (count($json['patients']) === 1) {
//       $patient_id = $json['patients'][0]['patient_id'];
//     }
//     else {
//       //echo "error";
//     }

//     //echo "<pre>",print_r(curl_getinfo($ch)),"</pre>";
//     curl_close($ch);
//   }
  
  
  
// TYPEFORM QUESTIONNAIRE

    $tf_token = "E1M4wc64KF5Qn5JvYwazU5d6ckoHupNYSfhZiBWLgRQH";//getenv('TYPEFORM_TOKEN');
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.typeform.com/forms/ySdwul/responses?query='.$data['typeform_id']);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Authorization: bearer $tf_token", 
      "Content-type: application/json;"
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    $tf_success = false;
    $output = curl_exec($ch);
    $tf_json = json_decode($output,true);
    $tf_parsed = (array) null;
    if ($tf_json['total_items'] != 1) {
        $error = true;
    } else {
        $tf_success = true;
        $tf_parsed = $tf_json['items'][0]['answers'];
    }
    
    $email = "";
$subject = "New sign-up";

if ($tf_success) {

  $HSDD = findAnswerByFieldId($tf_parsed, 'GdIqHzwditA5', 'choice');
  $Privacy = findAnswerByFieldId($tf_parsed, 'b3HsdgipS1GC', 'choice');
  $gender = findAnswerByFieldId($tf_parsed, 'D5Rp0r90Rahk', 'choice');
  $Desire = findAnswerByFieldId($tf_parsed, 'fSEsTrMHtbhG', 'choice');
  $Decrease = findAnswerByFieldId($tf_parsed, 'ajOKB4DXX3Rm', 'choice');
  $Length = findAnswerByFieldId($tf_parsed, 'TK4MybkkAuFh', 'choice');
  $Bother = findAnswerByFieldId($tf_parsed, 'jVoFbzQfctay', 'choice');
  $Increase = findAnswerByFieldId($tf_parsed, 'YYsX9Wib1pwL', 'choice');
  $Factors = findAnswerByFieldId($tf_parsed, 'h9YWnHQIWPTu', 'choice');
  $DOB = findAnswerByFieldId($tf_parsed, 'huDf9YIH57nI', 'choice');
  $Height = findAnswerByFieldId($tf_parsed, 'yRszKAafmQt7', 'choice');
  $Weight = findAnswerByFieldId($tf_parsed, 'd4nGxJBvAwts', 'choice');
  $Drink = findAnswerByFieldId($tf_parsed, 'NC6wxT2bjWM1', 'choice');
  $Liver = findAnswerByFieldId($tf_parsed, 'C69MMLbTcFrQ', 'choice');
  $Pressure = findAnswerByFieldId($tf_parsed, 'CKr8LFkwBgUI', 'choice');
  $Medications = findAnswerByFieldId($tf_parsed, 'mNT8KIpeuPqL', 'choice');
  $Health = findAnswerByFieldId($tf_parsed, 'SEC5laqgNe48', 'choice');
  $Conditions = findAnswerByFieldId($tf_parsed, 'FP9BDsd9Mkbu', 'choice');
  $CurrMeds = findAnswerByFieldId($tf_parsed, 'JKsY46SxqLIz', 'choice');
  $Allergies = findAnswerByFieldId($tf_parsed, 'zZSpLwVZoqv7', 'choice');
  $Operation = findAnswerByFieldId($tf_parsed, 'GdDtimL7itlJ', 'choice');
  $Disorder = findAnswerByFieldId($tf_parsed, 'GdIqHzwditA5', 'choice');
  $Treatment = findAnswerByFieldId($tf_parsed, 'vkkw8HVys8Bm', 'choice');
  $Insurance = findAnswerByFieldId($tf_parsed, 'kREO3xT8JkWT', 'choice');
  $Zip = findAnswerByFieldId($tf_parsed, 'R7XUpgs4l7l8', 'choice');
  $State = findAnswerByFieldId($tf_parsed, 'FMebrlYeJYpd', 'choice');
  $Doctor = findAnswerByFieldId($tf_parsed, 'bjU1F8jqUWaz', 'choice');
  


    $email .= "HSDD is a treatable medical condition: ".$HSDD."\n";
    $email .= "Privacy Policy: ".$Privacy."\n";
    $emIL .= "Gender: ".$gender."\n";
    $email .= "In the past, was your level of sexual desire good and satisfying to you?: ".$Desire."\n";
    $email .= "Has there been a decrease in your level of sexual desire?: ".$Decrease."\n";
    $email .= "How long have you been experiencing symptoms of low sexual desire or interest?: ".$Length."\n";
    $email .= "Are you bothered by your decreased level of sexual desire or interest?: ".$Bother."\n";
    $email .= "Would you like to increase your level of sexual desire or interest?: ".$Increase."\n";
    $email .= "Which of the factors below, if any, do you feel may be contributing to your current decrease in sexual desire?: ".$Factors."\n";
    $email .= "Date of birth: ".$DOB."\n";
    $email .= "Height: ".$Height."\n";
    $email .= "Weight: ".$Weight."\n";
    $email .= "Do you drink any alcohol?: ".$Drink."\n";
    $email .= "To confirm, do you have any liver problems?: ".$Liver."\n";
    $email .= "To confirm, do you have low blood pressure or a condition that may cause low blood pressure?: ".$Pressure."\n";
    $email .= "To confirm, are you currently taking any of the following medications?: ".$Medications."\n";
    $email .= "Do you have any sexual health symptoms?: ".$Health."\n";
    $email .= "Please add any prior medical conditions or serious problems: ".$Conditions."\n";
    $email .= "Please add any current medications: ".$Allergies."\n";
    $email .= "Please add any medication allergies: ".$Operation."\n";
    $email .= "Please add any operations or surgeries: ".$Disorder."\n";
    $email .= "Have you ever had counseling or treatment for a mental health disorder?: ".$Treatment."\n";
    $email .= "When did you receive counseling or treatment?: ".$Insurance."\n";
    $email .= "What type of health insurance do you have?: ".$gender."\n";
    $email .= "Zip: ".$Zip."\n";
    $email .= "State: ".$State."\n";
    $email .= "Is there anything else you would like your doctor to know?: ".$Doctor."\n";
}


$paubox = new Paubox\Paubox();

$message = new Paubox\Mail\Message();
$content = new Paubox\Mail\Content();
$content->setPlainText($email);

$header = new Paubox\Mail\Header();
$header->setSubject($subject);
$header->setFrom("testing@doctalkgo.com");

$message->setHeader($header);
$message->setContent($content);
$recipients = array();
array_push($recipients,"charles@doctalkgo.com");
$message->setRecipients($recipients);

$sendMessageResponse = new Paubox\Mail\SendMessageResponse();
$sendMessageResponse = $paubox->sendMessage($message);

    //echo "<pre>",print_r(curl_getinfo($ch)),"</pre>";
    curl_close($ch);

// END TYPEFORM QUESTIONNAIRE


//   /* CHARM Step 3 - Save Questionnaire */

//   $questionnaire = array(
//     'template_id' => '41864000010211087',
//     'patient_id' => $patient_id,
//     'facility_id' => getenv('CHARM_FACILITY_ID'),
//     'answers' => [
//       array(
//         'entry_id' => '41864000010211089',
//         'answer' => $data['list_medications'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010211091',
//         'answer' => $data['list_allergies'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010211093',
//         'answer' => $data['list_conditions'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010657071',
//         'answer' => $data['opiods'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010657073',
//         'answer' => $data['upcoming_surgeries'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010657075',
//         'answer' => $data['blood_pressure'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010657077',
//         'answer' => $data['seizures'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010657079',
//         'answer' => $data['antidepressants'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010211095',
//         'answer' => $data['signed'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010211097',
//         'answer' => $data['date'],
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010402123',
//         'answer' => $terms_1,
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010402125',
//         'answer' => $terms_2,
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010402127',
//         'answer' => $terms_3,
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010459093',
//         'answer' => $terms_4,
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010459095',
//         'answer' => $terms_5,
//         'is_multi_choice' => 'false'
//       ),
//       array(
//         'entry_id' => '41864000010459097',
//         'answer' => $terms_6,
//         'is_multi_choice' => 'false'
//       )
//     ]
//   );
//   $questionnaireJSON = json_encode($questionnaire);

//   //echo $questionnaireJSON;
  


//   /* save questionnaire */
//   $ch = curl_init();
//   curl_setopt($ch, CURLOPT_URL, 'https://ehr.charmtracker.com/api/ehr/v1/questionnaire/answers');
//   curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
//   curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//     "api_key: ".getenv('CHARM_API_KEY'), 
//     "Authorization: Bearer $token", 
//     "Content-type: application/json;"
//   ));
//   curl_setopt($ch, CURLOPT_POSTFIELDS, $questionnaireJSON);
//   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//   curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');

//   $output = curl_exec($ch);
//   $json = json_decode($output,true);
//   //echo "<pre>",print_r($json),"</pre>";
//   //echo "<pre>",print_r(curl_getinfo($ch)),"</pre>";
//   curl_close($ch);


//   /* Finished with CHARM */

//   if (empty($output) || !$token) {
//     $error = true;
//     $message = 'Error adding patient to EHR';
//   }
// }

// /* figure out a better cond */
// if (!empty($patient_id)) {
// }


// /**********
//  * PAUBOX *
//  **********/
// $email = "";
// $subject = "New sign-up";

// if ($error) {
//   $email .= "ERROR: $message\n\n";
//   $subject = "Sign-up error";
// }

// $email .= "Channel: ".CHANNEL."\n";
// $email .= "First name: ".$_POST['first_name']."\n";
// $email .= "Last name: ".$_POST['last_name']."\n";
// $email .= "Email: ".$patient_email."\n";
// $email .= "Gender: ".$_POST['gender']."\n";
// $email .= "Date of birth: ".$_POST['dob']."\n";
// $email .= "State: ".$_POST['state']."\n";
// $email .= "Zip: ".$_POST['zip_code']."\n";
// $email .= "Phone #: ".$_POST['phone']."\n\n";
// $email .= "Medications:\n".$_POST['list_medications']."\n\n";
// $email .= "Allergies:\n".$_POST['list_allergies']."\n\n";
// $email .= "Health Conditions:\n".$_POST['list_conditions']."\n\n";
// $email .= $terms_concat;

// $email .= "Signed: ".$_POST['signed']."\n";

// $paubox = new Paubox\Paubox();

// $message = new Paubox\Mail\Message();
// $content = new Paubox\Mail\Content();
// $content->setPlainText($email);

// $header = new Paubox\Mail\Header();
// $header->setSubject($subject);
// $header->setFrom("info@doctalkgo.com");

// $message->setHeader($header);
// $message->setContent($content);
// $message->setRecipients(unserialize(EMAIL_RECIPIENTS));

// $sendMessageResponse = new Paubox\Mail\SendMessageResponse();
// $sendMessageResponse = $paubox->sendMessage($message);
// //print_r($sendMessageResponse);




$response = array(
  'error' => $error,
  'iframe' => $iframe[$_POST['state']],
//   'json' => $tf_json,
//   'parsed' => $tf_parsed
//   'output' => $goodoutput
);

echo json_encode($response);
?>
