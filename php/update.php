<?php  
 //insert.php  
 $connect = mysqli_connect("localhost", "root", "", "cuform");  
 if(isset($_POST["name"]))  
 {  
      $name = mysqli_real_escape_string($connect, $_POST["name"]);  
      $email = mysqli_real_escape_string($connect, $_POST["email"]); 
      $message = mysqli_real_escape_string($connect, $_POST["message"]);  
      $sql="UPDATE cuform SET email= '$email', message= '$message' WHERE name= '$name'";
      if(mysqli_query($connect, $sql))  
      {  
           //echo "Message Saved";  
          //$test = "Successfully entered";
          $test = 'Message Updated. We will get back to you soon!';
          echo json_encode($test);
      }  
     //$return["test1"] = json_encode("$test");
     //echo json_encode($test);
 }  
 ?>  