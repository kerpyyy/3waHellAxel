<?php

// Fichier phtml de la page
$template = 'contact';

// Chargement du layout qui va lui-même charger le template au bon endroit
require '../templates/layouthome.phtml';
require '../BDD/connexion.php';
require '../BDD/content.php';
        $erreur="";
        $succes="Votre message a bien été envoyer";
        //Verification que les données soit saisies
        if((isset($_POST['submit'],$_POST['name'])) && empty($_POST['name'])) $erreur =  $lang['contact_p_name'];
        if((isset($_POST['submit'],$_POST['mail'])) && empty($_POST['mail']) && (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL))) $erreur = $lang['contact_p_mail'];
        if((isset($_POST['submit'],$_POST['themes'])) && (empty($_POST['themes']) || ($_POST['themes']==""))) $erreur = $lang['contact_p_theme'];
        if((isset($_POST['submit'],$_POST['message'])) && empty($_POST['message'])) $erreur = $lang['contact_p_message'];
        
        
        //Contrôle des formats des deux paramètres via les expressions régulières
        if(isset($_POST['submit'],$_POST['name'],$_POST['mail'],$_POST['themes'],$_POST['choose_job'],$_POST['message']) && $erreur=="")
        {
            //Initialisation de l'objet PDO et ouverture de la connexion pour appel à la base de données
            $db = getConnection();  
        
            //Tableau associatif pour requête d'insertion 
            $data = array(
                'nom' => $_POST['name'],
                'mail' => $_POST['mail'],
                'themes' => $_POST['themes'],
                'choose_job' => $_POST['choose_job'],
                'message' => $_POST['message']);
        
                // Appel de ma fonction de sauvegarde
                saveUser($db, $data);
                saveContent($db, $data);
                
                echo $succes;
        } 
        if($erreur!=""){
            echo $erreur;
        }
        ?>


  














