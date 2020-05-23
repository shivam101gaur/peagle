<?php
session_start();
if(!empty($_SESSION["userId"])) {
    $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
    $_SESSION['date'] = date("Y/m/d");
    $_SESSION['day'] = date("l");
    $_SESSION['intime'] = date("h:i:sa");

    $logfile = fopen('data/log.txt', 'a');//opens file in append mode  
    fwrite($logfile, $_SESSION['ip']."\t\t".$_SESSION['date']."\t\t".$_SESSION['day']."\t\t".$_SESSION['intime']."\t\t");  
    
    fclose($logfile);  

    require_once './view/control_system.html';
    
} else {
    require_once './view/user_login.html';
}
?>