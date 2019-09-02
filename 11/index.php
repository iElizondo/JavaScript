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
          ?>
          <pre>
          <?php print_r($tecnologias) ?>
          </pre>

          <?php
                $tecnologias[]= "Python";
                $tecnologias[5]= "Java";
          ?>
          <pre>
          <?php print_r($tecnologias) ?>
          </pre>

          <?php
                //Borar el ultimo elemento y traerlo en variable
                $java = array_pop($tecnologias);
          ?>
          <h1><?php echo $java ?></h1>
          <pre>
          <?php print_r($tecnologias) ?>
          </pre>

          <?php 
                //remover el elemento que se le determine
                unset($tecnologias[1]);
          ?>
          <pre>
          <?php print_r($tecnologias) ?>
          </pre>

          <?php 
                //remover el primer elemento y agregarlo avariable
                $css = array_shift($tecnologias);

          ?>
          <h1><?php echo $css ?></h1>
          <pre>
          <?php print_r($tecnologias) ?>
          </pre>

          <?php 
                //remover elementos y agregar otros
                $array = array_splice($tecnologias,1,1,array('AngularJS','jQuery'));

          ?>
          <pre>
              <?php print_r($array) ?>
          </pre>
          <pre>
              <?php print_r($tecnologias) ?>
          </pre>

        </div>
    </div>

  </body>
</html>
