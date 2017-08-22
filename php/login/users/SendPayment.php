<?php
	session_start();

	if (isset($_SESSION['loggedin']) && ($_SESSION['loggedin'] == true) && ($_SESSION['Lvl'] == 3)) {

		$servername = "localhost";
		$username = "root";
		$password = "promastinc";
		$dbname = "db_pn";

		$IDPlayer 		= $_POST['IDPlayer'];
		$Amount			= $_POST['Amount'];
		$DebtCollector	= $_SESSION['username'];

		$conn = mysqli_connect($servername, $username, $password, $dbname);
		if(!$conn){
			die("Connection failed: " .mysqli_connect_error());
		}else{
			$sql = "INSERT INTO payments (ID, PayDate, Amount, DebtCollector) VALUES ('$IDPlayer', current_timestamp, '$Amount', '$DebtCollector')";
			$resultado=mysqli_query($conn,$sql);

			if ($resultado) {
				$data = array('success' => true, 'message' => 'Gracias por tu pago! :)');
			    echo json_encode($data);
			    header("Location: Payments.php");
			}else {
			    $data = array('success' => false, 'message' => 'Lo siento, ocurrió un error. Intentalo de nuevo :´( ');
			    echo json_encode($data);
			}
		}

	} else {
	   //echo "Esta pagina es solo para usuarios registrados.<br>";
	   //echo "<br><a href='login.html'>Login</a>";
	   //echo "<br><br><a href='index.html'>Registrarme</a>";
		header("Location: ../../../html/system/login.html");

	exit;
	}

	$now = time();

	if($now > $_SESSION['expire']) {
		session_destroy();

		//echo "Su sesion a terminado,
		//<a href='login.html'>Necesita Hacer Login</a>";
		header("Location: ../../../html/system/login.html");
	exit;
	}
?>