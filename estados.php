<?php
	$servername = "50.62.209.75";
	$username = "PN2";
	$password = "P_NegrosN.1_";
	$dbname = "mexico";

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn){
		die("Connection failed: " .mysqli_connect_error());
	}
       mysqli_set_charset($conn, 'utf8');

	$Estado 	= $_POST['Estado'];
	$Municipio 	= $_POST['Municipio'];
	$Colonia    = $_POST['Colonia']; 

	if($Colonia != ''){
		$showData = "SELECT DISTINCT CodigoPostal FROM codigospostales WHERE Colonia='$Colonia'";
		$data = array();
		$result = mysqli_query($conn, $showData);

		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
		} else {
			echo "0 results";
		};
		print json_encode($data);
	}
	else if($Municipio != ''){
		$showData = "SELECT DISTINCT Colonia FROM codigospostales WHERE Municipio='$Municipio'";
		$data = array();
		$result = mysqli_query($conn, $showData);

		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
		} else {
			echo "0 results";
		};
		print json_encode($data);
	}
	else if($Estado != ''){
		$showData = "SELECT DISTINCT Municipio FROM codigospostales WHERE Estado='$Estado'";
		$data = array();
		$result = mysqli_query($conn, $showData);
		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
		} else {
			echo "0 results";
		};
		print json_encode($data);
	}
	else{
		$showData = "SELECT DISTINCT Estado FROM codigospostales";
		$data = array();
		$result = mysqli_query($conn, $showData);

		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
		} else {
			echo "0 results";
		};
		print json_encode($data);
	}
	unset($Estado);
	unset($Municipio);
	unset($Colonia);
	mysqli_close($conn);
?>