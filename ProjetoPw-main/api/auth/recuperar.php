<?php

include '../connection.php';

session_start();

$emailRecuperado = $_POST["emailRecupera"];
$nomeRecuperado = $_POST["nomeRecupera"];

if(
    !isset($emailRecuperado) ||
    !isset($nomeRecuperado) ||
    empty($emailRecuperado) ||
    empty($nomeRecuperado)
){
    echo json_encode([
        "error" => true,
        "message" => "Preencha TODOS os campos, por favor!"
    ]);
    exit;
};

$stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ? AND nome = ?");
$stmt->execute([$emailRecuperado, $nomeRecuperado]);
$data = $stmt->fetch();

if(!$data){
    echo json_encode([
        "error" => true,
        "message" => "Nenhum usuário encontrado com esses dados!"
    ]);
    exit;
};

$_SESSION["emailRecupera"] = $emailRecuperado;

if ($data) {
    echo json_encode(["error" => false,
        "message" => "Usuário encontrado! Por favor, insira uma nova senha para sua conta."
    ])
;};