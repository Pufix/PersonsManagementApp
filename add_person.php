<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';
function GUID()
{
    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
}

$firstName = $_GET['first_name'];
$lastName = $_GET['last_name'];
$email = $_GET['email'];
$gender = $_GET['gender'];
$ipAddress = $_GET['ip_address'];

$id = GUID();


$sql = "INSERT INTO Person (id, first_name, last_name, email, gender, ip_address) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $id, $firstName, $lastName, $email, $gender, $ipAddress);

if ($stmt->execute()) {
    echo "Person added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
