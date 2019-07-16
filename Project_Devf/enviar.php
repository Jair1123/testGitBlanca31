<?php
// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// datos para el correo
$destinatario = "jairhdzisidro@gmail.com";
$asunto = "Contacto desde nuestra web";
$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario,$asunto,$carta);
header('Location:recepcion_correo.html')
?>