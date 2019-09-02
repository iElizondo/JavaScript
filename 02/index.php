<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aprendiendo PHP</title>
    <link href="https://fonts.googleapis.com/css?family=Proza+Libre" rel="stylesheet">

    <link rel="stylesheet" href="css/estilos.css" media="screen" title="no title">
  </head>
  <body>

    <div class="contenedor">
      <h1>Aprendiendo PHP</h1>
        <div class="contenido">
          <?php
          //No pueden enpesar con numero ni tener guines medios
            $hola_mundo = "Hola Mundo";
            $numero = 20;

            echo $hola_mundo;

            $saludo = "<h1>Hola</h1>";
            echo $saludo;
          ?>
        </div>
    </div>

  </body>
</html>
