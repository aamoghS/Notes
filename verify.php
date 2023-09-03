<?php
// Sample stored password hash
$storedPasswordHash = '$2y$10$4niV...'; // Replace with your actual hash

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $enteredPassword = $_POST['password']; // Get the entered password
    if (password_verify($enteredPassword, $storedPasswordHash)) {
        // Password is correct, allow access to the protected content
        header('Location: protected_page.html');
        exit();
    } else {
        // Password is incorrect, show an error message
        echo 'Incorrect password. Please try again.';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <!-- Your HTML code for the login form -->
</head>
<body>
    <form method="POST" action="verify.php">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">
        <button type="submit">Login</button>
    </form>
</body>
</html>
