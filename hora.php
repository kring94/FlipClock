<?php
/*
En javascript:
fechaHoy = new Date();
Sat Feb 07 2015 15:41:51 GMT-0500 (COT)
*/

/*
La zonas horarias soportadas por PHP las puedes encontrar en
http://php.net/manual/es/timezones.php
*/
date_default_timezone_set("America/Bogota");

// Resultado equivalente en php
echo date("D M d Y H:i:s \G\M\TO (T)", time());