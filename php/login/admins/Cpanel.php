<?php
	session_start();

	if (isset($_SESSION['loggedin']) && ($_SESSION['loggedin'] == true) && ($_SESSION['Lvl'] == 0)) {

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

<!DOCTYPE html>
<html>

<head>
<title>Panel de Control</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#Reports">Reportes</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="#Users">Usuarios</a></li>
      <li><a href="#Players">Jugadores</a></li>
      <li><a  href=../logout.php>Cerrar Sesion</a>
    </ul>
</nav>

<div id="Reports" class="container">
  <h2>Navbar Button</h2>
  <p>Use the navbar-btn class on a button to vertically align (same padding as links) it inside the navbar.</p>
</div>

<div id="Users" class="container">
  <h2>Navbar Button</h2>
  <p>Use the navbar-btn class on a button to vertically align (same padding as links) it inside the navbar.</p>
</div>

<div id="Players" class="container">
  <h2>Navbar Button</h2>
  <p>Use the navbar-btn class on a button to vertically align (same padding as links) it inside the navbar.</p>
</div>

</body>
</html>