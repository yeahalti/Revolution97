<?php  
 //insert.php  
 $connect = mysqli_connect("localhost", "root", "", "cuform");  
 if(isset($_POST["name"]))  
 {  
      $name = mysqli_real_escape_string($connect, $_POST["name"]);  
      $email = mysqli_real_escape_string($connect, $_POST["email"]); 
      $message = mysqli_real_escape_string($connect, $_POST["message"]);  
      $sql="INSERT INTO cuform (name,email,message) VALUES ('$_POST[name]','$_POST[email]','$_POST[message]')";
      if(mysqli_query($connect, $sql))  
      {  
           //echo "Message Saved";  
          //$test = "Successfully entered";
          $test = 'Message Saved. We will get back to you soon!';
          echo json_encode($test);
      }  
     //$return["test1"] = json_encode("$test");
     //echo json_encode($test);
 }  
 ?>  