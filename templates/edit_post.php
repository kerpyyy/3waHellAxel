<?php

// Ficher phtml spéficique à la page 


require '../BDD/connexion.php';
require '../BDD/content.php';

$db = getConnection();

if (empty($_POST)) {
    
    $content = getContent($db, (int) $_GET['id']);

    $template = 'edit_post';
    // Chargement du layout qui va lui-même charger le template au bon endroit
    require '../templates/layouthome.phtml';

} else {
    updatePost($db, $_POST);
    
    header("Location: http://localhost/website/templates/realisations");
}
        

