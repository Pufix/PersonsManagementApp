<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

$id = $_GET['id'];
$sql = "Select * FROM Person WHERE id like '$id'";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo '['.json_encode($row).']';


$conn->close();
