<?php
 
$servername = "localhost";
$username = "movieboy_trainer";
$password = "0KF!vgBLp6";
$dbname = "movieboy_pokemon";
 
 
// check for post data (using  isempty to make sure the value isn't empty)
if (isset($_POST['id'])){
    $id = $_POST['id'];
	$link = mysqli_connect(servername,username,password,dbname);
	mysqli_query($link,"INSERT INTO Questions (`id`) VALUES ($id)") 
}
?>