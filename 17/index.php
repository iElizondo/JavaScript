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

        <?php
            $tecnologias = array('CSS', 'HTML', 'JS','jQuery','Python');
          ?>

          <?php
            for ($i=0; $i <count($tecnologias) ; $i++ ) { 
              # code...
              echo $tecnologias[$i]. '<br/>';
            }
          ?>

          <hr>

        <?php
            //Iteraniones for

            for ($i=0; $i <100 ; $i++ ) { 
              # code...
              echo $i. '<br/>';
            }
          ?>

          <hr>

          <?php
            for ($i=0; $i <100 ; $i++ ) { 
              # code...
              if($i==5){
                echo "Cinto <br/>";
                continue;
              }
              echo $i. '<br/>';
            }
          ?>

          <hr>

          <?php
            for ($i=0; $i <=500 ; $i++ ) { 
              # code...
              if($i%2==0){
                echo $i. '<br/>';
              }
            }
          ?>

        </div>
    </div>

  </body>
</html>
