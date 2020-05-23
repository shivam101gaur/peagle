<?php 
session_start();
$_SESSION[outtime] = date("h:i:sa");
$logfile = fopen('data/log.txt', 'a');
fwrite($logfile,$_SESSION[outtime]."\r\n");
fclose($logfile); 

$_SESSION["user_id"] = "";
session_destroy();
header("Location: checker.php");
?>