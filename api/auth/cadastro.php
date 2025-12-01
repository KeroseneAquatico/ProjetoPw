<?php

include "../connection.php";

$name = $_POST["nomeCadastro"];
$email = $_POST["emailCadastro"];
$password = $_POST["senhaCadastro"];
$confirmPassword = $_POST["senhaCadastro2"];
$planoAssinatura = $_POST["planoAssinatura"];

if(!isset($name) ||
    !isset($email) ||
    !isset($password) ||
    !isset($confirmPassword) ||
    !isset($planoAssinatura) ||
    empty($name) ||
    empty($email) ||
    empty($password) ||
    empty($confirmPassword) || 
    empty($planoAssinatura)
){
    echo json_encode([
        "error" => true,
        "message" => "Preencha TODOS os campos, por favor!"
    ]);
    exit;
};

if($password !== $confirmPassword){
    echo json_encode([
        "error" => true,
        "message" => "As senhas não coincidem!"
    ]);
    exit;
}
if(strlen($password) < 8){
    echo json_encode([
        "error" => true,
        "message" => "A senha deve ter no mínimo 8 caracteres!"
    ]);
    exit;
}
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare("INSERT INTO users (name, email, password, plano_assinatura) VALUES (?, ?, ?, ?)");
if($stmt->execute([ $name, $email, $hashedPassword, $planoAssinatura])){
    echo json_encode([
        "error" => false,
        "message" => "Cadastro realizado com sucesso!"
    ]);
} else {
    echo json_encode([
        "error" => true,
        "message" => "Erro ao cadastrar usuário: " 
    ]);
}