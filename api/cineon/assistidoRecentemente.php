<?php

include '../connection.php';
session_start();
$perfilId = $_SESSION['perfil_id'] ?? null;

$filme = $_SESSION['filme_id'] ?? null;

$assistidos=[];

$stmt = $conn->prepare("INSERT INTO assistido_recentemente (perfil_id, filme_id) VALUES (?, ?)");
$stmt->execute([$perfilId, $filme]);
$data = $stmt->fetchAll();

foreach ($data as $row) {
    $assistidos[] = $row;
}
echo json_encode($assistidos);