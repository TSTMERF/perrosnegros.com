<?php
	session_start();

	if (isset($_SESSION['loggedin']) && ($_SESSION['loggedin'] == true) && ($_SESSION['Lvl'] == 3)) {
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
	    <title>Pagos</title>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	    <link rel='stylesheet' href="https://material.angularjs.org/latest/angular-material.min.css" type='text/css'/>

	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-animate.min.js"></script>-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-animate.min.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-aria.min.js"></script>-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-aria.min.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-material.min.js"></script>-->
	    <script type="text/javascript" src="https://material.angularjs.org/latest/angular-material.min.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-messages.min.js"></script>-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-messages.min.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-route.min.js"></script>-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-route.min.js"></script>
	    <!--<script type="text/javascript" src="js/libraries/angular-sanitize.min.js"></script>-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-sanitize.min.js"></script>
	    <!--https://code.angularjs.org/1.4.8/angular-touch.js-->
	    <script type="text/javascript" src="https://code.angularjs.org/1.4.8/angular-touch.js"></script>
  	</head>
  	<body>

	    <nav class="navbar navbar-inverse">
	      	<div class="container-fluid">
	        	<div class="navbar-header">
	          		<a class="navbar-brand"><?php echo $_SESSION['username']; ?></a>
	        	</div>
	        </div>
	    </nav>
	    <div class="col-md-12">
	    <form id="Payment" method="POST" action="SendPayment.php">
		   	<div class="input-group">
		        <span class="glyphicon glyphicon-user"></span>
		        <input type="text" name="IDPlayer" class="form-control" placeholder="ID de Jugador" required>
		    </div>
		    <div class="input-group">
		        <span class="glyphicon glyphicon-usd"></span>
		        <input type="number" name="Amount" class="form-control" placeholder="$00.00" required>
	        </div>
	        <br>
	        <div align="left">
	        	<button type="submit" name="submit" value="submit" class="btn btn-success">Pagar<span class="glyphicon glyphicon-send"></span></button>
	        </div>
	        <br>
	    </form>
	    </div>

	</body>

</html>