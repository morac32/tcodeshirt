//Contact Form in PHP
<?php
  //let's get all form values
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $website = htmlspecialchars($_POST['website']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid
      $receiver = "tcodeshirt2021@gmail.com"; //email receiver email address
      $subject = "From: $name <$email>"; //subject of the email. Subject looks like From: T-codeshirt <tcodeshirt@gmail.com>

      //merging concating all user values inside body variable. \n is used for new line
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email"; //sender email
      if(mail($receiver, $subject, $body, $sender)){ //mail() is a inbuilt php function to send mail
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>