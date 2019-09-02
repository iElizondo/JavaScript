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
            $lenguaje = "my sql";

            switch($lenguaje){
              case 'PHP':
                echo "Backend";
                break;
              case 'JS':
                echo "Frontend";
                break;
              case "CSS":
                echo "Frontend";
                break;
              case "HTML":
                echo "Frontend";
                break;
              default: 
                echo "No valido";
                break;

            }


          ?>
        </div>
    </div>

  </body>
</html>
