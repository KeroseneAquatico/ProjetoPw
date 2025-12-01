<?php

include '../connection.php';
include '../session.php';

$user = $_SESSION['user_id'];
echo json_encode([
    'error' => false,
    'user' => $user
]);
?>