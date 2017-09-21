<?php
	$servername = "50.62.209.75";
	$username = "PN1";
	$password = "P_NegrosN.1_";
	$dbname = "db_pn";

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(!$conn){
		die("Connection failed: " .mysqli_connect_error());
	}else{

		$Name 				= $_POST ['name'];
		$LastNameP			= $_POST ['LastNameP'];
		$LastNameM			= $_POST ['LastNameM'];
		$birthDate 			= $_POST ['birthDate'];
		$Age 				= $_POST ['Age'];
		$Height 			= $_POST ['Height'];
		$Weight 			= $_POST ['Weight'];
		$Email 				= $_POST ['Email'];
		$Siblings 			= $_POST ['Siblings'];
		$Street 			= $_POST ['Street'];
		$Colonia 			= $_POST ['Colonia'];
		$Municipio 			= $_POST ['Municipio'];
		$Estado 			= $_POST ['Estado'];
		$CP 				= $_POST ['CP'];
		$PhoneP 			= $_POST ['PhoneP'];
		$PhoneM 			= $_POST ['PhoneM'];
		$School 			= $_POST ['School'];
		$Grade 				= $_POST ['Grade'];
		$Average 			= $_POST ['Average'];
		$Insurance 			= $_POST ['Insurance'];
		$Doctor  			= $_POST ['Doctor'];
		$Phone 				= $_POST ['Phone'];
		$InsurancePolicy 	= $_POST ['InsurancePolicy'];
		$InsuranceCarrier 	= $_POST ['InsuranceCarrier'];
		$RH 				= $_POST ['RH'];
		$Allergies 			= $_POST ['Allergies'];
		$Injuries 			= $_POST ['Injuries'];
		$Procedures 		= $_POST ['Procedures'];
		$Medication 		= $_POST ['Medication'];
		$med 				= $_POST ['med'];
		$nece 				= $_POST ['nece'];
		$FatherName 		= $_POST ['FatherName'];
		$FatherLastName 	= $_POST ['FatherLastName'];
		$ProfessionF 		= $_POST ['ProfessionF'];
		$FatherPhoneP 		= $_POST ['FatherPhoneP'];
		$FatherPhoneM  		= $_POST ['FatherPhoneM'];
		$FatherEmail 		= $_POST ['FatherEmail'];
		$JobF				= $_POST ['FatherDelegate'];
		$MotherName 		= $_POST ['MotherName'];
		$MotherLastName 	= $_POST ['MotherLastName'];
		$ProfessionM 		= $_POST ['ProfessionM'];
		$MotherPhoneP 		= $_POST ['MotherPhoneP'];
		$MotherPhoneM 		= $_POST ['MotherPhoneM'];
		$MotherEmail 		= $_POST ['MotherEmail'];
		$JobM				= $_POST ['MotherDelegate'];
		$Sport 				= $_POST ['Sport'];
		$YearsPlaying		= $_POST ['YearsPlaying'];
		$Team 				= $_POST ['Team'];
		$Temp 				= $_POST ['Temp'];
		$Category 			= $_POST ['Category'];
		$EmergencyName		= $_POST ['EmergencyName'];
		$EmergencyPhone		= $_POST ['EmergencyPhone'];
		

		$Name 		= strtoupper($Name);
		$LastNameP 	= strtoupper($LastNameP);
		$LastNameM 	= strtoupper($LastNameM);
		$neceS = implode(",", $nece);

		$ID	= "PN".$Name;

		$validar="SELECT ID from jugadores WHERE ID='$ID'";
		$result=mysqli_query($conn,$validar);
		$row = mysqli_fetch_assoc($result);
		if ($row!=null){

			$data = array('success' => false, 'message' => 'Sorry! User already exists.');
			echo json_encode($data);
		}
		else{
			$sql = "INSERT INTO jugadores (nom_J, apellido_Pj, apellido_Mj, fecha, temporada, categoria, fecha_nac, edad, estatura, peso, exp_dep, exp_años, exp_equipo, calle_n_j, col_j, municipio_j, edo_j, cp_j, tel_part_j, tel_movil_j, correo_j, escuela, esc_grado, esc_prom, hermanos_j, ID) VALUES ('$Name','$LastNameP','$LastNameM', current_timestamp,'$Temp','$Category','$birthDate','$Age','$Height','$Weight','$Sport','$YearsPlaying','$Team','$Street','$Colonia','$Municipio','$Estado','$CP','$PhoneP','$PhoneM','$Email','$School','$Grade','$Average','$Siblings','$ID')";
			$sql2 = "INSERT INTO medico(RH, Allergies, Injuries, Procedures, Medication, med, nece, Doctor, Phone, EmergencyName, EmergencyPhone, Insurance, InsurancePolicy, InsuranceCarrier, ID) VALUES ('$RH','$Allergies','$Injuries','$Procedures','$Medication','$med','$neceS','$Doctor','$Phone','$EmergencyName','$EmergencyPhone','$Insurance','$InsurancePolicy','$InsuranceCarrier','$ID')";
			$sql3 = "INSERT INTO padres(FatherName, FatherLastName, ProfessionF, JobF, FatherPhoneP, FatherPhoneM, FatherEmail, MotherName, MotherLastName, ProfessionM, JobM, MotherPhoneP, MotherPhoneM, MotherEmail, ID) VALUES ('$FatherName', '$FatherLastName', '$ProfessionF', '$JobF', '$FatherPhoneP', '$FatherPhoneM', '$FatherEmail', '$MotherName', '$MotherLastName', '$ProfessionM', '$JobM', '$MotherPhoneP', '$MotherPhoneM', '$MotherEmail','$ID')";
			$resultado=mysqli_query($conn,$sql);
			$resultado2=mysqli_query($conn,$sql2);
			$resultado3=mysqli_query($conn,$sql3);

			if ($resultado && $resultado2 && $resultado3) {
				$data = array('success' => true, 'message' => 'Gracias!, Eres un Perro Negro ahora! :)');
			    echo json_encode($data);
			}else {
			    $data = array('success' => false, 'message' => 'Lo siendo, ocurrió algún error. Intentalo de nuevo :´( ');
			    echo json_encode($data);
			}
		}

	}
?>