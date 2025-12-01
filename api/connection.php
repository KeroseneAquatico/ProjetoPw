<?php

$host = "127.0.0.1";
$user = "root";
$password = 'z$z!mprö!!36725112008#';
$database = "cineon_db";
$port = 3306;
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];
$conn = new PDO(
    "mysql:host=$host;dbname=$database;port=$port",
    $user,
    $password,
$options,
);
?>