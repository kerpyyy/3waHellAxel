<?php
    session_start(); // Démarrage de la session
    $template = 'login';
    // Ficher phtml spéficique à la page 
    require_once '../BDD/connexion.php'; // On inclut la connexion à la base de données
    // Chargement du layout qui va lui-même charger le template au bon endroit
    require '../templates/layouthome.phtml';

    if(isset($_GET['login_err']))
                {
                    $err = htmlspecialchars($_GET['login_err']);

                    switch($err)
                    {
                        case 'password':
                        ?>
                            <div>
                                <strong>Erreur</strong>mot de passe incorrect
                            </div>
                        <?php
                        break;

                        case 'email':
                        ?>
                            <div>
                                <strong>Erreur</strong>email incorrect
                            </div>
                        <?php
                        break;

                        case 'already':
                        ?>
                            <div>
                                <strong>Erreur</strong>compte non existant
                            </div>
                        <?php
                        break;
                    }
                }
                

    if(isset($_POST['email']) && isset($_POST['password'])) // Si il existe les champs email, password et qu'il sont pas vident
    {

        $db=getConnection();

        // Patch XSS
        $email = htmlspecialchars($_POST['email']); 
        $password = htmlspecialchars($_POST['password']);
        
        
        // On regarde si l'utilisateur est inscrit dans la table utilisateurs
        $check = $db->prepare('SELECT pseudo, email, password FROM utilisateurs WHERE email = ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();
        
        

        // Si > à 0 alors l'utilisateur existe
        if($row > 0)
        {
            // Si le mail est bon niveau format
            if(filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $password = hash("sha256", $password);
                if($data["password"] === $password)
                {
                    $_SESSION['user'] = $data['pseudo'];
                    header('Location:landing.php');  
                }else{ header('Location: login.php?login_err=password'); die(); } // si erreur de mot de passe non trouvable
            }else{ header('Location: login.php?login_err=email'); die(); } // si erreur de mail non trouvable
        }else{ header('Location: login.php?login_err=already'); die(); } // si deja connecté
    }