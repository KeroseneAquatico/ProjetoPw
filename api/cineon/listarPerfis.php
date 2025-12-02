<?php

include "../connection.php";

session_start();
$id = $_SESSION['id'] ?? null;


$stmt = $conn->prepare("SELECT id, nome FROM perfis WHERE usuario_id = ?");
$stmt->execute([$id]);
$data = $stmt->fetchAll();
$perfis = [];

if(count($data) === 0){
    echo json_encode([
        'error' => true,
        'message' => 'Nenhum perfil encontrado para este usuário!'
    ]);
    exit;
}

foreach($data as $perfil){
    $perfis[] = [
        'id' => $perfil['id'],
        'nome' => $perfil['nome'],
    ];
};

echo json_encode([
    'error' => false,
    'perfis' => $perfis
]);