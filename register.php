<?php
$servername = "localhost";
$username = "root";
$password = "@bajaraang123";
$database = "demo";
$conn = new mysqli($servername, $username, $password, $database);
if($conn->connect_error){
    die('connection failed:'.$conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST['name'];
$email = $_POST['email'];
$number=$_POST['number'];
$gender=$_POST['gender'];
$password = $_POST['password'];
$sql = "INSERT INTO reg (name, email,number,gender,password) VALUES ('$name', '$email','$number','$gender','$password')";
if (mysqli_query($conn, $sql)) {
    echo "Registration successful";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
}
?>