<?php

include '../connection.php';

session_start();

$stmt = $conn->prepare("SELECT id,nome,imagem FROM perfis WHERE usuario_id = ?");
$stmt->execute([ $_SESSION['user_id']]);
$perfis = $stmt->fetchAll();


if(!$perfis){
    echo json_encode(['error' => true, 'message' => 'Nenhum perfil encontrado']);
    exit;
}
echo json_encode([
    'error' => false,
    'perfis' =>$perfis]);
    ?>