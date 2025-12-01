<?php

include '../connection.php';
include '../session.php';

$userId = $_SESSION['user_id'];
$nomePerfil = $_POST('nomePerfil');
$iconePerfil = $_POST('iconePerfil');
if( !isset($nomePerfil) || empty($nomePerfil)){
    echo json_encode(['error' => true, 'message' => 'Nome do perfil é obrigatório.']);
    exit;
}
if (!isset($iconePerfil) || empty($iconePerfil)){
    echo json_encode(['error' => true, 'message' => 'Ícone do perfil é obrigatório.']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO perfis (user_id, nome, imagem) VALUES (?, ?, ?)");
$stmt-> execute([$userId, $nomePerfil, $iconePerfil]);
