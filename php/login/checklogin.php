<?php
session_start();
?>

<?php

$host_db = "50.62.209.75";
$user_db = "PN1";
$pass_db = "P_NegrosN.1_";
$db_name = "db_pn";
$tbl_name = "usuarios";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

if ($conexion->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];
 
$sql = "SELECT PermitLvl FROM $tbl_name WHERE ID = '$username' and password = '$password'";

$result = $conexion->query($sql);
if ($result->num_rows > 0) {
	while($row = mysqli_fetch_row($result)){
		$data = $row;
	}
	$data=implode($data);
	// }
 	//$row = $result->fetch_array(MYSQLI_ASSOC);
 	//if (password_verify($password, $row['password'])) { 

    $_SESSION['loggedin'] 	= true;
    $_SESSION['username'] 	= $username;
    $_SESSION['Lvl']		= $data;
    $_SESSION['start'] 		= time();
    $_SESSION['expire'] 	= $_SESSION['start'] + (5 * 60);

    //echo "Bienvenido! " . $_SESSION['username'];
    $Lvl_0='0'; //---- root (super su)
    $Lvl_1='1'; //---- contador/dueno
    $Lvl_2='2'; //---- entranadores/delegados
    $Lvl_3='3'; //---- secretaria (pagos)
    $Lvl_4='4'; //---- jugadores
    $Lvl_5='5'; //---- aun sin asignar
    $Lvl_6='6'; //---- inactivo sin acceso
    if($data==$Lvl_0){
    	header("Location: admins/Cpanel.php"); 
	}else if($data==$Lvl_1){
		header("Location: users/Reports.php");
	}else if($data==$Lvl_2){
		header("Location: users/Lists.php");
	}else if($data==$Lvl_3){
		header("Location: users/Payments.php");
	}else if($data==$Lvl_4){
		header("Location: users/PlayerProfile.php");
	}else if($data==$Lvl_6){
		header("Location: users/Inactive.php");
	}
 }else {
 	$data = array('success' => false, 'message' => 'ID o Password son incorrectos.');
	echo json_encode($data);
    header("Location: ../../html/system/login.html");
 }
 mysqli_close($conexion); 
 ?>