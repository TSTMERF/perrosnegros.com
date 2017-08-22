<?php
	$servername = "localhost";
	$username = "root";
	$password = "promastinc";
	$dbname = "db_pn";

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn){
		die("Connection failed: " .mysqli_connect_error());
	}else{
		$showData = "SELECT jugadores.ID, jugadores.nom_J, jugadores.apellido_pj, jugadores.apellido_Mj, payments.PayDate, payments.Amount FROM jugadores INNER JOIN payments ON jugadores.ID = payments.ID";

		$data = array();
		$result = mysqli_query($conn, $showData);

		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
		} else {
			echo "0 results";
		}
		print json_encode($data);
	}
?>