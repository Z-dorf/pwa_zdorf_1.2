<?php
header("Access-Control-Allow-Origin: *");

require_once('../utils/db.php');


$req = $bdd->prepare('SELECT * from experiences');
$req ->execute();
$projects = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($projects, JSON_UNESCAPED_UNICODE);


?>