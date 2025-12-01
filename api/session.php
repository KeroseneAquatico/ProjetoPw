<?php

session_start();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => true, 'message' => "usuario não encontrado, sessão inválida"]);
    exit;
}


