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
            $persona = array(
              'nombre'=>'Iasbel',
              'pais'=>'CR',
              'profesion'=>'Desarrolladora Web'
            );
          ?>
          <pre>
          <?php print_r($persona); ?>
          </pre>

          <?php echo $persona['nombre'] ?>

          <pre>
          <?php 
            //Permite ver solo los valores de un array indexado
            print_r(array_values($persona)); 
          ?>
          </pre>

          <pre>
          <?php 
            //Permite ver solo las llaves de un array indexado
            print_r(array_keys($persona)); 
          ?>
          </pre>

        </div>
    </div>

  </body>
</html>
