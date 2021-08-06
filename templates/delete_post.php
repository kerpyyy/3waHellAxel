<?php

require '../BDD/connexion.php';
require '../BDD/content.php';

$db = getConnection();

// deletePost($db);
deletePost($db, (int) $_GET['id']);

header("Location: http://localhost/website/templates/realisations");
exit();