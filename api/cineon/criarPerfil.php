<?php

include '../connection.php';
include '../session.php';

$nomePerfil = $_POST('nomePerfil');
$
if( !isset($nomePerfil) || empty($nomePerfil)){
    echo json_encode(['error' => true, 'message' => 'Nome do perfil é obrigatório.']);
    exit;
}
if 