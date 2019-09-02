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
            //Versiones anteriores
            $tecnologias = ['CSS', 'HTML', 'JS', 'jQuery'];
            echo $tecnologias[0];

            echo "<hr>";
            //Nueva
            $lenguajes = array('CSS', 'HTML', 'PHP', 'MySQL');
            echo $lenguajes[3];
          ?>
        </div>
    </div>

  </body>
</html>
