<?php

include "../connection.php";

session_start();


$user = $_SESSION["id"] ?? null;
$plano_id = $_SESSION["plano_id"] ?? null;
$sql = "SELECT 
    usuarios.*, 
    planos.*
FROM usuarios
INNER JOIN planos ON usuarios.plano_id = planos.id
WHERE usuarios.id = ?;";
$stmt = $conn->prepare($sql);
$stmt->execute([$user]);
$data = $stmt->fetch();

if(!$data){
    echo json_encode(['error' => true, 'message' => 'Usuário não encontrado']);
    exit;
}

echo json_encode([
    'error' => false,
    'user_id' => $user,
    'planos_max' => $data['max_perfis']
]);