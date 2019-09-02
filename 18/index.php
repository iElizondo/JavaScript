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
            $series = array('GOT', 'TBBT', 'ST','Esposas','BB','Dark');
          ?>

          <?php
            $i=0;
            while ($i <= count($series)) {
              # code...
              if(count($series)>0){
                echo $series[$i].'<br/>';
                if($i+1 === count($series)){
                  echo "fin";
                }
              }else{
                echo "no hay resultados";
              }
              $i++;
            }
          ?>

          <hr>

        

        </div>
    </div>

  </body>
</html>
