<?php
$serverAddress="localhost";
$username="root";
$password="";
$databaseName="portfolio";
$con=new mysqli("$serverAddress","$username","$password","$databaseName");
$f_name=$_POST['f_name'];
$l_name=$_POST['l_name'];
$email=$_POST['email'];
$country=$_POST['country'];
$subject=$_POST['subject'];
// $sql="INSERT INTO get_data(f_name,l_name_email,country,subject)VALUE('$f_name','$l_name','$email','$country','$subject')";
$sql = "INSERT INTO get_data (f_name, l_name, email, country, subject) VALUES ('$f_name', '$l_name', '$email', '$country', '$subject')";

if($con->query($sql)==TRUE){
    echo 'Data Inserted';
}
else{
    echo 'something wrong';
}
?>