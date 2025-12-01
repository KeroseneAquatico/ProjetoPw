<?php
include "../connection.php";
include "session.php";

$userId = $_SESSION['user_id'] ?? null;
if (!$userId) {
    echo json_encode(['error' => true, 'message' => 'Usuário não autenticado']);
    exit;
}

$stmtUser = $conn->prepare("SELECT id, perfil, nome, email FROM usuarios WHERE id = :id LIMIT 1");
$stmtUser->bindValue(':id', $userId);
$stmtUser->execute();
$user = $stmtUser->fetch();

if (!$user) {
    echo json_encode(['error' => 'Usuário inválido']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM filmes");
$stmt->execute();
$filmes = $stmt->fetchAll();

$response = [
    'perfil' => [
        'id' => (int)$user['id'],
        'perfil' => $user['perfil'] ?? null,
        'nome' => $user['nome'] ?? null,
        'email' => $user['email'] ?? null
    ],
    'filmes' => $filmes
];

echo json_encode($response);
exit;
?>
