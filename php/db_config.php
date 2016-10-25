<?php
 
/*
 * Database secret stuff....shhhh
 */
$servername = "localhost";
$username = "movieboy_trainer";
$password = "0KF!vgBLp6";
$dbname = "movieboy_pokemon";

 $con = mysqli_connect("$servername","$username","$password","$dbname") or die ("could not connect database");
?>