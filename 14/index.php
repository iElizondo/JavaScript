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
            $tecnologias = array('CSS', 'HTML', 'JS','jQuery');
            //Me dice si el elemento existe
            $existe = in_array('HTML5',$tecnologias);
          ?>
          <pre>
          <?php 
            //var_dunp devuelve un true mientras que echo y print_r solo un 1 (si existe)
            var_dump($existe); 
          ?>
          </pre>

          <?php
            $persona = array(
              'nombre'=>'Isabel',
              'pais'=>'CR',
              'profesion'=>'Desarrolladora Web'
            );

            $existe2 = in_array('Isabel',array_values($persona));
          ?>
           <?php 
            //var_dunp devuelve un true mientras que echo y print_r solo un 1 (si existe)
            var_dump($existe2); 
          ?>

        </div>
    </div>

  </body>
</html>
