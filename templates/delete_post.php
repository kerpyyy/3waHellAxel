<?php

require_once '../BDD/connexion.php';
require_once '../BDD/content.php';
require '../templates/landing.php';

$db = getConnection();

if(!isset($_SESSION)){
    header('Location:index.php');
    die();
}else{
    deletePost($db, (int) $_GET['id']);
}

header("Location: realisations.php");
exit();