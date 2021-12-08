<?php

require_once '../BDD/connexion.php'; // On inclu la connexion à la bdd

$db = getConnection();

// Si les variables existent et qu'elles ne sont pas vides
if(isset($_POST['pseudo']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['password_retype']))
{
    // Patch XSS
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $password_retype = htmlspecialchars($_POST['password_retype']);

    // On vérifie si l'utilisateur existe
    $check = $db->prepare('SELECT pseudo, email, password FROM utilisateurs WHERE email = ?');
    $check->execute(array($email));
    $data = $check->fetch();
    $row = $check->rowCount();

    $email = strtolower($email); // on transforme toute les lettres majuscule en minuscule pour éviter que Test@gmail.com et test@gmail.com soient deux compte différents ..
    
    // Si la requete renvoie un 0 alors l'utilisateur n'existe pas 
    if($row == 0){ 
        if(strlen($pseudo) <= 100){ // On verifie que la longueur du pseudo <= 100
            if(strlen($email) <= 100){ // On verifie que la longueur du mail <= 100
                if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Si l'email est de la bonne forme
                    if($password === $password_retype){ // si les deux mdp saisis sont bon

                        $password = hash('sha256', $password);
                    
                        // On insère dans la base de données
                        $insert = $db->prepare('INSERT INTO utilisateurs(pseudo, email, password) VALUES(:pseudo, :email, :password)');
                        $insert->execute(array(
                            'pseudo' => $pseudo,
                            'email' => $email,
                            'password' => $password,
                        ));
                        // On redirige avec le message de succès
                        header('Location:inscription.php?reg_err=success');
                        die();
                    }else{ header('Location: inscription.php?reg_err=password'); die();}
                }else{ header('Location: inscription.php?reg_err=email'); die();}
            }else{ header('Location: inscription.php?reg_err=email_length'); die();}
        }else{ header('Location: inscription.php?reg_err=pseudo_length'); die();}
    }else{ header('Location: inscription.php?reg_err=already'); die();}
}