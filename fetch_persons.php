<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include 'db.php';

$sql = "SELECT * FROM Person";
$result = $conn->query($sql);

$persons = array();
while ($row = $result->fetch_assoc()) {
    $persons[] = $row;
}
echo json_encode($persons);

$conn->close();
