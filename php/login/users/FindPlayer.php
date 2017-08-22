<?php
	$servername = "localhost";
	$username = "root";
	$password = "promastinc";
	$dbname = "db_pn";

    $IDPlayer = $_POST['IDPlayer'];
    echo json_encode($IDPlayer);

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn){
		die("Connection failed: " .mysqli_connect_error());
	}else{
		$showData = "SELECT * FROM inscription WHERE ID='$IDPlayer'";

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