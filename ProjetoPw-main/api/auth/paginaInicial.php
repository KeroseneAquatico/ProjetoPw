<?php 

include "../connection.php";
include "session.php";


$userId = $_SESSION['user_id'];
$perfil = $_SESSION['perfil'] ?? $_SESSION['role'] ?? null;
header('Content-Type: application/json');


// fazer um objeto com 2 chaves um retorna os filmes e outro retorna coisas do perfil e etc
// validar usuário no banco e garantir que o perfil esteja atualizado
$stmtUser = $conn->prepare("SELECT id, perfil FROM usuarios WHERE id = :id LIMIT 1");
$stmtUser->bindValue(':id', $userId);
$stmtUser->execute();
$user = $stmtUser->fetch();

if (!$user) {
    echo json_encode(['error' => 'Usuário inválido']);
    exit;
}

$perfil = $user['perfil'];
// $userId e $perfil podem ser usados abaixo

$stmt = $conn->prepare( "SELECT * FROM filmes");
$stmt->execute();
$data = $stmt->fetchAll();
echo json_encode($data);

?>