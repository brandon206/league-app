<?php
$proxyURL = "https://api.pandascore.co/lol/versions/9.4.1/items?token=9hBdfanuM4g5NGYky5NJAxrKFSNqbg2G1Xr2V52TaTdmFgHm0x0&sort=name";
$acceptableHeaders = [];
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: ". implode(',',$acceptableHeaders));
$params = '';
foreach($_GET as $key=>$value){
        $value = rawurlencode($value);
        $params.="&$key=$value";
}
$headers = apache_request_headers();
$curl = curl_init();
$headerParams = [];
foreach($headers as $key=>$value){
        if(in_array($key, $acceptableHeaders)){
                $headerParams[] = "$key:$value";
        }
}
curl_setopt_array($curl, array(
  CURLOPT_URL => "$proxyURL?$params",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => $headerParams,
  //REMOVE BELOW LINE ON LIVE SITE
  CURLOPT_SSL_VERIFYPEER => false
));
$response = curl_exec($curl);
$err = curl_error($curl);
echo $err;
echo $response;
?>