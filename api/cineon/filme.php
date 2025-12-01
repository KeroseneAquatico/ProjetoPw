<?php


include '../connection.php';
include '../auth/session.php';

$filmeID = $_SESSION['filme_id'];

if (!$filmeID) {
    echo json_encode(['error' => true, 'message' => 'Nenhum filme selecionado!']);
    exit;
}

$stmt = $conn->prepare("SELECT video, nome FROM filmes WHERE id = ? LIMIT 1");
$stmt->execute([$filmeID]);
$filme = $stmt->fetch();

if (!$filme) {
    echo json_encode(['error' => true, 'message' => 'Filme não encontrado!']);
    exit;
}

echo json_encode([
    'error' => false,
    'video' => $filme['video'],
    'titulo' => $filme['titulo']
]);