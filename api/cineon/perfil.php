<?php

include '../connection.php';

session_start();

$stmt = $conn->prepare("SELECT id,nome FROM perfis WHERE id = ?");
$stmt -> execute([ $_GET['perfil_id'] ]);
$perfil = $stmt->fetch();

if(!$perfil){
    echo json_encode(['error' => true, 'message' => 'Nenhum perfil encontrado']);
    exit;
}
echo json_encode([
    'error' => false,
    'perfil' =>$perfil]);

$_SESSION['perfil_id'] = $perfil['id'];

    ?>