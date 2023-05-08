<?php
  // Obtener los datos del formulario
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Dirección de correo electrónico donde se enviará el mensaje
  $para = 'abrahamav011@gmail.com';

  // Asunto del mensaje
  $asunto = 'Mensaje de contacto desde tu sitio web';

  // Cuerpo del mensaje
  $cuerpo = "Nombre: $nombre\nCorreo electrónico: $email\nMensaje:\n$mensaje";

  // Encabezados del correo electrónico
  $encabezados = "From: $email\r\n";
  $encabezados .= "Reply-To: $email\r\n";

  // Enviar el mensaje de correo electrónico
  mail($para, $asunto, $cuerpo, $encabezados);

  // Redirigir al visitante a una página de confirmación
  header('Location: confirmacion.html');
?>
