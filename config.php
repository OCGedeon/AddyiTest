<?php
define("CHANNEL", "contrave");
define("ENV_FILE", __DIR__ . "/env.php");
define("EMAIL_RECIPIENTS", serialize(array('info@doctalkgo.com')));
define("PAYMENT_GATEWAY", "coastal");

$amount = 4500;

$iframe['MA'] = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a12577f1a5c03b5c3025a2f3f23b7da7faa84274aa7a6b03efc9fac109f10b85efde6ba727299f4d464";
// $iframe['OR'] = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a1217dc8373aeb97a364689ba79fd0b855b3d5e9b7e556f27659fac109f10b85efde6ba727299f4d464";
$iframe['OR'] = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a12ca7a9a7d80000c7ca2073d88c7c715ba582e3dbd59db5a139fac109f10b85efde6ba727299f4d464";
$iframe['MT'] = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a12ca7a9a7d80000c7c496dceae9fd748583d5e9b7e556f27659fac109f10b85efde6ba727299f4d464";
// $iframe['VT'] = "https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a12ca7a9a7d80000c7c496dceae9fd748583d5e9b7e556f27659fac109f10b85efde6ba727299f4d464";
$iframe['VT'] ="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=6d648f615ca62a12ca7a9a7d80000c7ca2073d88c7c715ba582e3dbd59db5a139fac109f10b85efde6ba727299f4d464";
