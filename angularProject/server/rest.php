<?php
header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

header("Content-Type: application/x-www-form-urlencoded;charset=utf-8; charset=UTF-8");
$conn = mysqli_connect("localhost","root","","angularuser");

$req = $_SERVER['REQUEST_METHOD'];
if($req == 'GET')
{
		if (isset($_GET['id']))
		{
			$sql = "SELECT * FROM userinfo where user_id =".$_GET['id']."";
		}
		else{
			$sql = "SELECT * FROM userinfo ";
		}
	 
	$result = mysqli_query($conn,$sql);
	
	$arr = array();
	$items='';
	while($rs = mysqli_fetch_array($result)) {
		
		 $id = $rs['user_id'];
		 $name = $rs['name'];
		 $email = $rs['email'];
		 $age = $rs['age'];
		 $gender = $rs['gender'];
		 $degree = $rs['qualification'];
		 $arr []=array ("u_id" => $id,"Name" => $name,"Email" => $email,"Age" => $age,"Gender" => $gender,"Degree" => $degree);
	}
	
	mysqli_close($conn);
	echo json_encode($arr);
}
else if($req == 'POST')
{	
	if(isset($_POST))
	{
			if(!empty($_POST['name']) )
		{
			$name = $_POST['name'];
			
		}
		else{
			echo "plese Enter Your Name";
			exit;
		}
		if(!empty($_POST['email']))
		{
			$mail = $_POST['email'];
			
		}
		else{
			echo "plese Enter Email";
			exit;
		}
		if(!empty($_POST['age']))
		{
			$age = $_POST['age'];
			
		}
		else{
			echo "plese Enter Your Age";
			exit;
		}
		if(!empty($_POST['gender']))
		{
			$gender = $_POST['gender'];
			
		}
		else{
			echo "plese Select Gender";
			exit;
		}
		if(!empty($_POST['qualification']))
		{
			$qualification = $_POST['qualification'];
			
		}
		else{
			echo "plese Select Your Qualification";
			exit;
		}
	}
	else{
		exit;
		
	}
	if(!empty($_POST['uid']))
	{
		$sql ="UPDATE userinfo set name = '".$name."',email = '".$mail."',age = ".$age.",gender = '".$gender."',qualification = '".$qualification."' where user_id =". $_POST['uid']."";
	}
	else{
		$sql ="insert into userinfo(name,email,age,gender,qualification) values ('".$name."','".$mail."',".$age.",'".$gender."','".$qualification."') ";
	}
	$i = mysqli_query($conn,$sql);
	if($i > 0)
	{
		echo "Your Record Successfullt Inserted";
	}
	else{
		echo "Error in post query";
	}
}
else if($req == 'DELETE')
{
	$sql ="DELETE from userinfo where user_id = ".$_REQUEST['id']." ";
	$i = mysqli_query($conn,$sql);
	if($i > 0)
	{
		echo "Your Record has been Successfully DELETED";
	}
	else{
		echo "Error in Delete query";
	}
}


?>