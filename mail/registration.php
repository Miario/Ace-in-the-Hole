<?php

include 'db_connect.php';

if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['comments'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$age = ($_POST['age']);
$tshirt = ($_POST['tshirt']);
$liability = ($_POST['liability']);
$comments = strip_tags(htmlspecialchars($_POST['comments']));
   
// Create the email and send the message
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

foreach ($_POST['event'] as $_event)
    {
        $event[] = $_event;
    }   $finalevent = implode(',', $event);


$sql = "INSERT INTO regform (name, email, phone, age, event, tshirt, liability, comments)
VALUES ('$name', '$email_address', '$phone', '$age', '$finalevent', '$tshirt', '$liability', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

$to = 'clearorbi@gmail.com';
$email_subject = "Website Registration Form:  $name";
$email_body = "You have received a new message from your website registration form.\n\n"."Here are the details: \n \n Name: $name \n \n Email: $email_address \n \n Phone: $phone \n \n Age: $age \n \n Event registering for: $event \n \n T-shirt Size: \n $tshirt \n \n Liability: \n $liability \n \n Comments: \n $comments";
$headers = "From: noreply@clearorb.com\n";
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>