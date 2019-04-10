<?php  
 //delete.php  
 $connect = mysqli_connect("localhost", "root", "", "cuform");  
 if(isset($_POST["name"]))  
 {  
      $name = mysqli_real_escape_string($connect, $_POST["name"]);  
      $sql="DELETE FROM cuform WHERE name='$name'";
      if(mysqli_query($connect, $sql))  
      {  
           //echo "Records were deleted successfully.";
          $test = "Records were deleted successfully.";
          echo json_encode($test);
      }  
     
     //$return["test1"] = json_encode("$test");
     //echo json_encode($test);
 }  
 ?>  