<?php

function getConnection(): PDO
{
    return new PDO(
        'mysql:host=localhost;dbname=formulaire_conetcom;charset=UTF8', 
        'root', 
        '', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            // Affiche les erreurs SQL
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    );
}



