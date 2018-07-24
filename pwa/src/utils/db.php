<?php

try {

$bdd = new PDO('mysql:host=localhost;dbname=portfolio', 'admin', 'passwordMariaDB');


} catch (PDOException $e) {

print "Erreur !: " . $e->getMessage() . "<br/>";
die();

}

?>