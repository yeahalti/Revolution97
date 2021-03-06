<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Keep in touch</title>
    <link rel="stylesheet" type="text/css" href="../css/cuf.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script  src="../js/cuf.js"></script>
</head>
<body>
    
<audio autoplay>
  <source src="../audio/musicsound.ogg" type="audio/ogg">
  <source src="../audio/musicsound.MP3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

 <div class="nav">
    <a href="index.html" target="_blank"><i class="fa fa-home"></i></a>
</div>

<div class="row">
  <div class="column left">
     <div class="panel-content">
          <header>SAD TO SEE YOU GO!</header>
          
          
        <form id="form" name="cuform" ><br> 
        <input id="name" type="text" placeholder="NAME" name="name" required><br>
        <input id="submit" type="button" name="submit" value="SUBMIT" onclick="return validate();"><br>
            <!-- if you type = "submit" , "Message saved" won't work. No one knows why -->
            <span><a class="links" href="../php_pages/cufed.php">Edit your response</a></span><br>
            <span><a class="links" href="../php_pages/cuf.php">Send your response</a></span><br>
            <span><a class="links" href="../html/users.html" target="_blank">Check your response</a></span><br>
         <span id="error_message" class="text-danger"></span> <br> 
         <span id="success_message" class="text-success" ></span>
  </form>
        
      </div>
  </div>
  <div class="column right">
   <img src="../img/cuf.jpg">
  </div>
</div>


</body>
</html>

<script>  
 $(document).ready(function(){  
      $('#submit').click(function(){  
           var name = $('#name').val(); 
           
           if(name == '')  
           {  
                $('#error_message').html("All Fields are required");  
           }  
           else  
           {  
                $('#error_message').html('');
                //$('#success_message').html('All Fields are proper!');
                $.ajax({  
                     url:"../php/delete.php",  
                     method:"POST", 
                     data: "json",
                     data:{name:name}, 
                     success:function(data){  
                         var res = eval(data)
                          $("form").trigger("reset");  
                          $('#success_message').fadeIn().html(res);  
                          setTimeout(function(){  
                               $('#success_message').fadeOut("Slow");  
                          }, 5000); 
                         //alert("Form submitted successfully.\nReturned json: " + data["json"]);
                     }  
                });  
           }  
      });  
 });  
 </script>  
