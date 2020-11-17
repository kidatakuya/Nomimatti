<?php
session_start();
try{
    $db = new PDO('mysql:dbname=tkida;host=localhost;charset=utf8','tkida','eccMyAdmin');

    if(!empty($_POST)){
       
        $name = $_POST['name'];
        $address = $_POST['address'];
        $password = sha1($_POST['password']);
        // print($name);
        // $login = $db->prepare("SELECT * FROM members WHERE name=? AND address=? AND password=?");
        $login = $db->query("SELECT * FROM Nomimatti_members WHERE name='{$name}' AND address='{$address}' AND password='{$password}'");
        $login;
    //    $login->sxcuet(array(
    //     $_POST['name'],
    //     $_POST['address'],
    //     sha1($_POST['password']),
    //    ));
       $member = $login->fetch();
       
       if($member){
           $_SESSION['id'] = $member['id'];
        header('Location: home.html');
        exec();
       }else{
        //    print "エラー";
        //    $error['login'] = 'blank';
        header('Location: inerx.html');
       };
      
    }else{
        // print "エラー１";
    };

}catch(PDOException $e){
    print "エラー１";
    echo 'DB接続エラー：' .$e->getMessage;
}
?>