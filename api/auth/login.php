<?php

include '../connection.php';

session_start();

$email = $_POST["email"];
$password = $_POST["password"];

if(
    !isset($email) ||
    !isset($password) ||
    empty($email) ||
    empty($password)
){
    echo json_encode([
        "error" => true,
        "message" => "Preencha TODOS os campos, por favor!"
    ]);
    exit;
};

if(strlen($password) < 8){
    echo json_encode([
        "error" => true,
        "message" => "A senha tem que conter no mínimo 8 dígitos"
    ]);
    exit;
};

$sql = "SELECT * FROM USUARIOS WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$email]);
$data = $stmt->fetch();

if(!password_verify($password, $data["password"])){
    echo json_encode([
        "error" => true,
        "message" => "❌ Os dados não conferem com nenhum usuário cadastrado!"
    ]);
    exit;
};

$_SESSION["id"] = $data["id"];
$_SESSION["user_name"] = $data["nome"];

echo json_encode([
    "message" => "login realizado com sucesso"
]);