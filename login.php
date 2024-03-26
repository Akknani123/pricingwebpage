<?php
$servername = "localhost";
$username = "root";
$password = "@bajaraang123";
$database = "demo";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM reg WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        echo "Login successful!";
    } else {
        echo "Invalid email or password. Please try again.";
    }
}
?>
