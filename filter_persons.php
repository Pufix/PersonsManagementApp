<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

$namePart = $_GET['name_part'];

$sql = "SELECT * FROM Person WHERE first_name LIKE '%$namePart%' OR last_name LIKE '%$namePart%'";
$result = $conn->query($sql);

$persons = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $persons[] = $row;
    }
}

echo json_encode($persons);

$conn->close();
