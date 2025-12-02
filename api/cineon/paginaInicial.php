<?php

include "../connection.php";

session_start();
$perfilId = $_SESSION['perfil_id'] ?? null;


$stmtUser = $conn->prepare("SELECT id, perfil, imagem, nome FROM perfis WHERE perfis.id = ? LIMIT 1");
$stmtUser->execute([$perfilId]);
$user = $stmtUser->fetch();

if (!$user) {
    echo json_encode(['error' => 'Usuário inválido']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM filmes");
$stmt->execute();
$filmes = $stmt->fetchAll();

$filmearray= [];
foreach ($filmes as &$filme) {
    $filmearray[] = [
        'id' => $filme['id'],
        'titulo' => $filme['titulo'],
        'descricao' => $filme['descricao'],
        'genero' => $filme['genero'],
        'ano' => $filme['ano'],
        'capa' => $filme['capa']
    ];
}

$res = [
    'perfil' => [
        'id' => $user['id'],
        'perfil' => $user['perfil'] ?? null,
        'nome' => $user['nome'] ?? null,
        'imagem' => $user['email'] ?? null
    ],
    'filmes' => $filmearray
];

echo json_encode($res);
exit;
?>