<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>Aprendiendo PHP</title>
    <link href="https://fonts.googleapis.com/css?family=Proza+Libre" rel="stylesheet">

    <link rel="stylesheet" href="css/estilos.css" media="screen" title="no title">
  </head>
  <body>

    <div class="contenedor">
      <h1>Aprendiendo PHP</h1>
        <div class="contenido">
          <h2>Agenda Telefonica</h2>
          <?php
           function usuario($nombre, $telefono){
             return $contacto = $nombre." ".$telefono."<br/> <hr>";
           }
           echo usuario('Isabel Elizondo','1234-4321');
           echo usuario('Alejandro Quesada','1234-4321');
           echo usuario('Cristina Meza','1234-4321');
          ?>

        </div>
    </div>

  </body>
</html>
