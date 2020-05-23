<?php
namespace Phppot;

use \Phppot\Member;
if (! empty($_POST["login"])) {
    session_start();
    $bot_name = filter_var($_POST["bot_name"], FILTER_SANITIZE_STRING);
    $bot_key = filter_var($_POST["bot_key"], FILTER_SANITIZE_STRING);
    require_once (__DIR__ . "./class/Member.php");
    
    $member = new Member();
    $isLoggedIn = $member->processLogin($bot_name, $bot_key);
    if (! $isLoggedIn) {
        $_SESSION["errorMessage"] = "Invalid Credentials";
    }
    header("Location: ./checker.php");
    exit();
}