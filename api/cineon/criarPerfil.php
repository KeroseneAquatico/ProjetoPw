<?php

include "../connection.php";

session_start();

$nome = $_POST['nomePerfil'] ?? null;
$id = $_SESSION['id'] ?? null;


if(
    empty($nome) || 
    !isset($nome) 
    ){
    echo json_encode([
        'error' => true,
        'message' => 'Nome ou imagem do perfil não podem estar vazios!'
    ]);
    exit;
}


$stmt = $conn->prepare("INSERT INTO perfis (usuario_id, nome) VALUES (?, ?)");
$stmt->execute([$id, $nome]);

echo json_encode([
    'error' => false,
    'message' => 'Perfil criado com sucesso!'
]);