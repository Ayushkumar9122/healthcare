<?php
// Step 1: Database connection
$host = 'localhost';
$username = 'root';
$password = 'root'; // Default for MAMP is 'root'
$dbname = 'healthcare_system';

// Connect
$conn = new mysqli($host, $username, $password, $dbname);

// Check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Get data from form
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$appointment_date = $_POST['appointment_date'];
$appointment_time = $_POST['appointment_time'];
$doctor_name = $_POST['doctor_name'];
$additional_info = $_POST['additional_info'];

// Step 3: Insert into database
$sql = "INSERT INTO appointments (full_name, email, appointment_date, appointment_time, doctor_name, additional_info)
        VALUES ('$full_name', '$email', '$appointment_date', '$appointment_time', '$doctor_name', '$additional_info')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Appointment booked successfully!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
