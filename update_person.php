<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

$id = $_GET['id'];
$first_name = $_GET['first_name'];
$last_name = $_GET['last_name'];
$email = $_GET['email'];
$gender = $_GET['gender'];
$ip_address = $_GET['ip_address'];


$sql = "UPDATE Person SET first_name = ?, last_name = ?, email = ?, gender = ?, ip_address = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $first_name, $last_name, $email, $gender, $ip_address, $id);

if ($stmt->execute()) {
    echo "Person updated successfully!";
} else {
    echo "Error updating record: " . $conn->error;
}

$stmt->close();


$conn->close();
