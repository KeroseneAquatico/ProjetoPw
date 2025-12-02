<?php

include "../connection.php";

session_start();

$perfilId = $_SESSION['perfil_id'];

$filmeMaisTarde = $_GET['filme_id'];
$filmes = [];

$stmt = $conn->prepare("INSERT INTO assistir_mais_tarde (perfil_id, filme_id) VALUES (?, ?)");
$stmt->execute([$perfilId, $filmeMaisTarde]);
$data = $stmt->fetchAll();

foreach ($data as $row) {
    $filmes[] = $row;
}
echo json_encode($filmes);
?>