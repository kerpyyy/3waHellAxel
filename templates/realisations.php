<?php

// Ficher phtml spéficique à la page 
$template = 'realisations';

require_once '../BDD/connexion.php';
require_once '../BDD/content.php';


// On récupère tout le contenu de la table users

// Connexion à la base de données
$db = getConnection();

// Récupération des articles
$users = getUsers($db);

// Chargement du layout qui va lui-même charger le template au bon endroit
require '../templates/layouthome.phtml';
