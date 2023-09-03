<?php
session_start();

// Define your password
$password = "your_password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $enteredPassword = $_POST["password"];

    if ($enteredPassword === $password) {
        // Successful login, set a session variable to indicate the user is logged in
        $_SESSION["password_authenticated"] = true;
        header("Location: index.html"); // Redirect to your main page
        exit();
    } else {
        $error_message = "Invalid password.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="POST" action="">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
    <?php if (isset($error_message)) { ?>
        <p style="color: red;"><?php echo $error_message; ?></p>
    <?php } ?>
</body>
</html>
