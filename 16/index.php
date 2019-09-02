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
              'datos'=>array(
                'nombre'=>'Iasbel',
              'pais'=>'CR',
              'profesion'=>'Desarrolladora Web'
              ),
              'lenguajes'=>array(
                'front_end'=>array('css','hatml','JS','jQuery'),
                'Back_end'=>array('php','mysql','python')
              )
            );
          ?>
          <h2>Foreach arreglos Multidimensionales</h2>
           <ul>
              <?php foreach ($persona['datos'] as $key => $dato):?>
                <li><?php echo $dato; ?></li> 
              <?php endforeach;?>

              <?php foreach ($persona as $lenguaje):?>
                <?php if(array_key_exists('front_end',$lenguaje)):?>
                  <h2>Lenguales de Font End</h2>
                    <?php foreach ($lenguaje['front_end'] as $frontend):?>
                      <li><?php echo $frontend; ?></li> 
                    <?php endforeach;?>
                <?php endif;?>

                <?php if(array_key_exists('Back_end',$lenguaje)):?>
                  <h2>Lenguales de Font End</h2>
                    <?php foreach ($lenguaje['Back_end'] as $Backend):?>
                      <li><?php echo $Backend; ?></li> 
                    <?php endforeach;?>
                <?php endif;?>
              <?php endforeach;?>
           </ul>

           <!-- <pre>
           <?php //print_r($persona) ?>
           </pre> -->

        </div>
    </div>

  </body>
</html>
