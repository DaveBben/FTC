<?php

	 include "db_config.php";
	 if(isset($_POST['id'])){
		 $id=$_POST['id'];
		 $question = $_POST['question'];
		 $ip = $_SERVER['REMOTE_ADDR'];
		 $date = date('m/d/Y h:i:s a');
		 if($id >= 0 and $id <= 7){
		 
		 $q=mysqli_query($con,"INSERT INTO `Questions` (`id`,`ip`,`date`) VALUES ('$id','$ip','$date')");
		 if($q)
		  echo "<H2>Thank you. Your result for the survey has been recorded.<br> It takes most courage to: $question</H2>";
		 else
		  echo "<H2>Something went wrong</H2>";
		 }
		 else{
			 echo "<H2>Something went wrong</H2>";
		 }
	 }
	 
 ?>