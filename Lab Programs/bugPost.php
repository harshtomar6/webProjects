<?php
	$serverName = "localhost";
	$username = "root";
	$password = "";
	$database = "bugs";

	$conn = new mysqli($serverName, $username, $password, $database);

	if($conn->connect_error)
		die("Error" .$conn->connect_error);

	echo "SUCCESS";
?>