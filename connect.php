<?php
session_start();
try{
    $db = new PDO('mysql:dbname=Nomimatti;host=localhost;charset=utf8','root','root');

    if(!empty($_POST)){
        $name = $_POST['name'];
        $address = $_POST['address'];
        $password = sha1($_POST['password']);
        
    //    $db->query("INSERT INTO `members`( `name`, `address`, `password`, `picture`, `created`, `modified`) VALUES ('{$name}','{$address}','{$password}','',NOW(),'')");


       $db->query( "INSERT INTO members SET name='{$name}', address='{$address}', password='{$password}'");
    //    echo $statement->execute(array(
        // $_SESSION['join']['name'],
        // $_SESSION['join']['address'],
        // sha1($_SESSION['join']['password']),
        // ));
        // unset($_SESSION['join']);
        header('Location: home.html');
      
    };    

}catch(PDOException $e){
    echo 'DB接続エラー：' .$e->getMessage;
}
// require ('connect.php');

 
?>