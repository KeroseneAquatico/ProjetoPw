<?php

include "../connection.php";

session_start();

$newPassword = $_POST["newPassword"];
$emailRecupera = $_SESSION["emailRecupera"];
if (
    !isset($newPassword) ||
    empty($newPassword)
) {
    echo json_encode([
        "error" => true,
        "message" => "Preencha TODOS os campos, por favor!"
    ]);
    exit;
};

if (strlen($newPassword) < 8) {
    echo json_encode([
        "error" => true,
        "message" => "A senha deve ter no mínimo 8 caracteres!"
    ]);
    exit;
};

if(!isset($emailRecupera) || empty($emailRecupera)){
    echo json_encode([
        "error" => true,
        "message" => "Erro na sessão. Por favor, reinicie o processo de recuperação de senha."
    ]);
    exit;
};

$hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

$stmt = $conn->prepare("UPDATE usuarios SET password = ? WHERE email = ?");
$sucesso = $stmt->execute([$hashedPassword, $emailRecupera]);

if ($sucesso) {
    echo json_encode([
        "error" => false,
        "message" => "Senha atualizada com sucesso!"
    ]);
} else {
    echo json_encode([
        "error" => true,
        "message" => "Erro ao atualizar a senha. Tente novamente."
    ]);
};

unset($_SESSION["emailRecupera"]);