<?php

require_once '../BDD/connexion.php';
require_once '../BDD/content.php';
require '../templates/landing.php';

$db = getConnection();

// Verification que l'user est connecte si oui on peut delete, si non redirection 

if(!isset($_SESSION['user'])){
    header('Location:realisations.php');
    die();
}else{
    deletePost($db, (int) $_GET['id']);
}

header("Location: realisations.php");
exit();