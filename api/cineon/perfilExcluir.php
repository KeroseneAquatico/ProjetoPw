<?php

include '../connection.php';
session_start();

$perfilId = $_GET['perfilId'];
$userId = $_SESSION['id'];

$stmt = $conn->prepare("DELETE FROM perfis WHERE id = ? AND user_id = ?");
$stmt -> execute([$perfilId, $userId]);

echo json_encode(['error' => false, 'message' => 'Perfil excluído com sucesso.']);
?>