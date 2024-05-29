<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

$id = $_POST['id'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$ip_address = $_POST['ip_address'];

if (empty($id)) {
    $stmt = $conn->prepare("INSERT INTO Person (id, first_name, last_name, email, gender, ip_address) VALUES (UUID(), ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $first_name, $last_name, $email, $gender, $ip_address);
} else {
    $stmt = $conn->prepare("UPDATE Person SET first_name = ?, last_name = ?, email = ?, gender = ?, ip_address = ? WHERE id = ?");
    $stmt->bind_param("ssssss", $first_name, $last_name, $email, $gender, $ip_address, $id);
}

if ($stmt->execute()) {
    echo "Person saved successfully";
} else {
    echo "Error saving person";
}

$stmt->close();
$conn->close();
?>
