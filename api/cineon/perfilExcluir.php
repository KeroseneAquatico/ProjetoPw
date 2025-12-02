
<?php

include '../connection.php';

session_start();

$perfilId = $_GET['Perfilid'] ?? null;
$userId = $_SESSION['id'] ?? null;

$stmt = $conn->prepare("DELETE FROM perfis WHERE id = ? AND usuario_id = ?");
$stmt -> execute([$perfilId, $userId]);



echo json_encode(['error' => false, 'message' => 'Perfil excluído com sucesso.']);
?>