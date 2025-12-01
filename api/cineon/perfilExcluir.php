<?php

include '../connection.php';
include '../session.php';

$perfilId = $_GET['perfilId'];
$userId = $_SESSION['user_id'];

$stmt = $conn->prepare("DELETE FROM perfis WHERE id = ? AND user_id = ?");
$stmt -> execute([$perfilId, $userId]);

echo json_encode(['error' => false, 'message' => 'Perfil excluído com sucesso.']);
?>