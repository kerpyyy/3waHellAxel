<?php


// Sauvegarde des données dans la base users
function saveUser(PDO $connection, array $data): void
{
    $query = $connection->prepare
    ('INSERT INTO users (nom,mail) VALUES (?,?)');

    $query->execute([
        $data['nom'],
        $data['mail']
    ]);
}

// Sauvegarde des données dans la base content
function saveContent(PDO $connection, array $data): void
{
    $query = $connection->prepare
    ('INSERT INTO content (theme,jobs,message,idUser) VALUES (?,?,?,?)');
    $idU=$connection->lastInsertId();
    $query->execute([
        $data['themes'],
        $data['choose_job'],
        $data['message'],
        $idU
    ]);

}


// Affichage des données users
function getUsers(PDO $connection): array
{
    $query = $connection->prepare('
        SELECT nom, mail, idUser
        FROM users
    ');
    
    $query->execute();
    
    return $query->fetchAll();
}

// Affichage des données post
function getContent(PDO $connection, int $id): array
{
    $query = $connection->prepare('
        SELECT message, theme 
        FROM content
        WHERE idUser = ?
    ');
    
    $query->execute([
        $id
    ]);

    return $query->fetch();
}


// Suppresion de tout les utilisateurs

// function deletePost(PDO $connection): void
// {
//     $query = $connection->prepare('DELETE FROM users');
//     $query->execute();
// }


// Suppresion de l'utilisateur au choix
function deletePost(PDO $connection, int $id): void
{
    $query = $connection->prepare('DELETE FROM users WHERE idUser = ?');
    $query->execute([
        $id
    ]);
}

function updatePost(PDO $connection, array $data): void
{
    $query = $connection->prepare('
        UPDATE content SET message = ?, theme = ?
    ');
    
    $query->execute([
        $data['message'],
        $data['theme'],
    ]);
}



