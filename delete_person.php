<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

$id = $_GET['id'];

$sql = "DELETE FROM Person WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Person deleted successfully";
} else {
    echo "Error deleting person: " . $conn->error;
}

$conn->close();
