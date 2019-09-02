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
            //Muestra el resultado
            // echo 10+20;
            //Muestra la operacion
            // echo "10+20";
            //Cocatenas texto y numero
            echo "10+20= ". (10+20);
          ?>
          <hr>
          <?php
              $numero1 = 10;
              $numero2 = 20;
              $numero3 = 30;
              $numero4 = 40;

              //Suma
              echo ($numero1 + $numero2) . "<hr>";
              //Resta 
              echo ($numero4 - $numero2) . "<hr>";
              //Multiplicacion
              echo ($numero1 * $numero2) . "<hr>";
              //Division
              echo ($numero4 / $numero1) . "<hr>";

              //Parentesis
              echo ($numero1 + $numero2) * ($numero1*.16). "<hr>";

              //incremeto por 1 
              $numero1++;
              echo ($numero1) . "<hr>";

              //decremento por 1 
              $numero1--;
              echo ($numero1) . "<hr>";

              //icremeto por 1 
              $total = 0;
              $total += 10;
              $total += 20;

              echo ($total) . "<hr>";

              //decremento por 1 
              $total = 100;
              $total -= 10;
              $total -= 20;

              echo ($total) . "<hr>";

              echo (20%3) . "<hr>";


          ?>
        </div>
    </div>

  </body>
</html>
