<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $interests = $_POST['interests'];
    
    // Set up recipient email address
    $to = "clark.kelsey96@gmail.com"; // Replace with your email address
    
    // Set up email subject
    $subject = "New Interest Form Submission";
    
    // Build the email content
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Interests:\n$interests\n";
    
    // Set headers
    $headers = "From: $email";
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    // Redirect to the form page if accessed directly
    header("Location: interest_form.html");
    exit;
}
?>
