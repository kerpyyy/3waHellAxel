<?php 
session_start();
// si la session existe pas soit si l'on est pas connecté on redirige
if(!isset($_SESSION['user'])){
    header('Location:index.php');
    die();
}

// Ficher phtml spéficique à la page 
$template = 'landing';

// Chargement du layout qui va lui-même charger le template au bon endroit
require '../templates/layouthome.phtml';

