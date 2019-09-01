// /* Fetch */
// descargarUsuarios(30);

// function descargarUsuarios(cantidad) {
//     const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

//     //llamando a fetch
//     fetch(api)
//         .then(respuesta => respuesta.json())
//         .then(datos => imprimirHTML(datos.results));
// }

// function imprimirHTML(datos) {
//     datos.forEach(usuario => {
//         const li = document.createElement('li');

//         const { name: { first }, name: { last }, picture: { medium }, nat } = usuario;
//         li.innerHTML = `
//             Nombre: ${first} ${last}
//             Pais: ${nat}
//             imagen:<img src="${medium}">
//         `;
//         document.querySelector('#app').appendChild(li);
//     });
// }

// /* Funciones Nuevas */
// const personas = [
//     { nombre: 'Juan', edad: 20 },
//     { nombre: 'Isabel', edad: 28 },
//     { nombre: 'Cristina', edad: 26 },
//     { nombre: 'Jose', edad: 23 },
//     { nombre: 'Alejandro', edad: 42, aprendiendo: 'Cosina' }
// ]

// //Mayores de 25

// const mayores = personas.filter(persona => persona.edad > 25);
// console.table(mayores);

// //Info especifica

// const ale = personas.find(persona => persona.nombre === 'Alejandro');
// console.log(ale);

// //Acomulados
// let total = personas.reduce((edadTotal, persona) => edadTotal + persona.edad, 0);
// console.log(total / personas.length);


// /* Object Literal Enhacement */

// const serie = 'GOT',
//     genero = 'Fantacia',
//     casas = ['Stark', 'Targuerian', 'Lanister', 'Barateon'];

// //Antes 
// // const got = {
// //     serie: serie,
// //     genero: genero,
// //     casas: casas
// // }

// //Ahora
// const got = { serie, genero, casas }

// console.log(got);

// /* Destructuring */

// const cliente = {
//     nombre: 'Alejandra',
//     tipo: 'Premiun',
//     dato: {
//         ubicacion: {
//             ciudad: 'PZ',
//             pais: 'CR',
//         },
//         cuenta: {
//             desde: '10-12-1012',
//             saldo: 4000
//         }
//     },
//     gustos: {
//         musica: ['trance', 'rock']
//     }
// }

// // console.log(cliente);

// //crear la variable
// ///Antes
// // const nombreCliente = cliente.nombre,
// //     tipoCliente = cliente.tipo,
// //     UbicacionCliente = cliente.dato.ubicacion;

// // console.log(UbicacionCliente);

// ///Nueva
// // let { nombre, tipo } = cliente;
// // let { dato: { ubicacion: { ciudad } } } = cliente;

// // console.log(ciudad);

// // let { dato: { cuenta: { saldo } } } = cliente;

// // console.log(saldo);

// let { gustos: musica } = cliente;

// console.log(musica);


// /* Scope */

// const musica = 'Rock';

// if (musica) {
//     let musica = 'Grunge';
//     console.log(`Dentro del if ${musica}`);
// }
// console.log(`Fuera del IF ${musica}`);

// // Otros iteradores
// const pendientes = ['Terminar Cap JS', 'Terminar Cap Intro a PHP', 'Arreglar el proyecto de Angular', 'Arreglar la pagina de angular']

// //un arreglo con objetos

// const carrito = [
//     { id: 1, producto: 'Libro' },
//     { id: 2, producto: 'Camisa' },
//     { id: 3, producto: 'Disco' }
// ]

// //Un objeto
// let automonil = {
//     modelo: 'Camaro',
//     motor: 6.0,
//     anio: 1991,
//     marca: 'Chevrolet'
// }

// let nuevoArreglo = pendientes.forEach(pendiente => pendiente);

// let nuevoArreglo2 = pendientes.map(pendiente => pendiente);

// console.log(nuevoArreglo);
// console.log(nuevoArreglo2);

// carrito.forEach(producto => console.log(
//     producto.producto));

// carrito.map(producto => console.log(
//     producto.producto));

// Object.keys(automonil).forEach(caract => console.log(
//     caract));

// Object.values(automonil).map(caract => console.log(
//     caract));

// for (let i = 0; i < pendientes.length; i++) {
//     console.log(pendientes[i]);
// }

// for (info of Object.values(automonil)) {
//     console.log(info);
// }
// /* Loops */
// const carrito = ['p1', 'p2', 'p3'];
// // //For loops
// for (let i = 0; i < carrito.length; i++) {
//     console.log(`Producto en el carrito ${carrito[i]}`);
// }
// //While loop
// let i = 11;
// while (i < carrito.length) {
//     console.log(carrito[i]);
//     i++;
// }

// //Do While
// do {
//     console.log(i);
//     i++
// } while (i < 10);

// /* Switch */

// const metodoPago = 'tarjeta';

// switch (metodoPago) {
//     case 'efectivo':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log(`Pagaste con ${metodoPago} revisarremos qie tengas fondos`);
//         break;
//     case 'tarjeta':
//         console.log(`Pagaste con ${metodoPago} espere un momento`);
//         break;
//     default:
//         console.log('Aun no has pagado o metodo de pago invalido');
//         break;
// }

// /* Ternario */
// let logueado = true;

// console.log(logueado ? 'Si se logueo' : 'Nose logueo');

// /* Condicionales */

// let puntaje = 1000;
// const logueado = true;
// const edad = 22;

// if (puntaje) {
//     console.log(`Si ahi puntaje y es de ${puntaje}`);
// } else {
//     console.log('No hay puntaje');
// }

// if (edad >= 18) {
//     console.log('Si eres mayor de edad');
// } else {
//     console.log('No eren mayor de edad');

// }

// let dinero = 500;
// let totalCarrito = 600;
// let tarjeta = true;

// if (dinero > totalCarrito || tarjeta) {
//     console.log('Pago Carrecto');
// } else {
//     console.log('Fondos Insuficientes');
// }

// let hora = 30;

// if (hora > 0 && hora <= 12) {
//     console.log('Buenos dias');

// } else if (hora > 12 && hora <= 18) {
//     console.log('Buenas tardes');

// } else if (hora > 18 && hora <= 24) {
//     console.log('Buenas Noches');

// } else {
//     console.log('Horario no valido');

// }
// /* Fechas */

// //fecha actual
// const diaHoy = new Date();

// let valor = diaHoy;
// //retorna el mes enero = 0
// valor = diaHoy.getMonth();
// //retorna el numero del dia domingo = 0
// valor = diaHoy.getDay();
// //retorna el dia del mes
// valor = diaHoy.getDate();
// //retorna los minutos de la hora actual
// valor = diaHoy.getMinutes();
// //retorna la hora
// valor = diaHoy.getHours();
// //la hora en milisegundos al instante
// valor = diaHoy.getTime();
// //retorna el anio actual
// valor = diaHoy.getFullYear();
// valor = diaHoy.setFullYear(1998);
// valor = diaHoy.getFullYear();

// console.log(valor);

// //fecha dada (Mes-dia-anio)
// const cumple = new Date('7-20-1991');

// console.log(cumple.getDay());

// /* Objetos */

// //objet literal
// const persona = {
//     nombre: 'Juan',
//     edad: 28,
//     anioNacimiento: function() {
//         return new Date().getFullYear() - this.edad;
//     }
// }
// console.log(persona.anioNacimiento());
// //Objet Constructor
// class Tarea {
//     constructor(nombre, urgencia) {
//         this.nombre = nombre;
//         this.urgencia = urgencia;
//     }
// }
// ///crear nuevas tareas
// const tarea1 = new Tarea('Aprender JS', 'Urgente');
// const tarea2 = new Tarea('Desayuno', 'Urgente');
// const tarea3 = new Tarea('Pasear a Minie', 'Media');
// const tarea4 = new Tarea('Lavar', 'Urgente');


// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

// /* Arrow Funtions */

// let viajando = (destino) => `Viajando a la ciudad de ${destino}`;

// let viaje;

// viaje = viajando('Londres');

// console.log(viaje);

// /* Funciones Retornan*/

// const suma = function(a = 0, b = 0) {
//     return a + b;
// }
// const multiplicar = function(a = 0) {
//     return a * 5;
// }

// console.log(multiplicar(suma(1, 3)));

// /* Funciones dentro de objetos */

// const pasatiempo = {
//     reproducir: function(cancion) {
//         console.log(`Reproduciendo la cancion: ${cancion}`);
//     },
//     pausar: function() {
//         console.log('Pausado.......');
//     }
// }

// pasatiempo.borrar = function(id) {
//     console.log(`Borrando la cancion con el ID ${id}`);
// }
// pasatiempo.reproducir('Matematica de la Carne');
// pasatiempo.pausar();
// pasatiempo.borrar(123);

// /* Funciones*/

// ////Funcion declaration
// saludar('Isabel', 'Desarrolladora Web');
// saludar('Cristina', 'Ingeniera');
// saludar('Alejandro');
// saludar('Veronica', 'Enfermera');

// function saludar(nombre = 'Visitante', trabajo = 'No sabemos') {
//     console.log("Hola " + nombre + " Tutrabajo es: " + trabajo);
// }

// ////Funcion expression
// const suma = function(a = 0, b = 0) {
//     console.log(a + b);
// }
// suma();
// suma(30, 50);
// suma(100, 200);


// ////IIFE
// (function(tecnologia) {
//     console.log('Aqui Estoy!!!! aprendiendo ' + tecnologia);
// })('JS');

// /* Template String */
// const nombre = 'Isabel',
//     trabajo = "Desarrollador";

// console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
// console.log(`Nombre: ${nombre} + Trabajo: ${trabajo}`);

// /* Objetos*/
// //Objet literal
// const presona = {
//     nombre: 'Isabel',
//     apellido: 'Elizondo',
//     edad: 28,
//     trabajo: true,
//     pasatiempos: ["Pelis", "Cine", "Gim", "leer", "Netflix"],
//     hogar: {
//         ciudad: 'Perez Zeledon',
//         pais: "Costa Rica"
//     }
// }
// console.log(presona.pasatiempos[4]);

// /*Crear un arreglo */
// const numeros = [10, 20, 30, 40, 50];
// //console.table(numeros);

// const meses = new Array('enero', 'feb', 'marzo');
// //agrega al final
// meses.push("abril");
// meses.push("Mayo");
// meses.unshift("Mes 0"); //agrega al inicio del areglo
// meses.pop(); //elimina al final del arreglo
// meses.shift(); //elimina al principio
// //eliminar un rango
// //meses.splice(0, 2);
// meses.reverse();

// let frutas = ['platano', 'manzanas', 'fresa', 'naranja'];
// frutas.sort();

// console.log(frutas);

// /*Tipos de datos */
// //string
// const nombre = 'Juan';
// console.log(typeof nombre);

// //numero
// const edad = 28;
// console.log(typeof edad);

// //boleano
// let aprendiendoJS = true;
// console.log(typeof aprendiendoJS);

// // null
// let hijos = null;
// console.log(typeof hijos);

// //indefinido
// let valor;
// console.log(typeof valor);
// //arreglo
// let lenguajes = ['html', 'js', 'php'];
// console.log(typeof lenguajes);
// //objetos
// let persona = {
//     nombre: 'Isabel',
//     ciudad: 'Mexico'
// }
// console.log(typeof persona);

// // fechas
// let fecha = new Date();
// console.log(typeof fecha);

// let dato = 123456789987456321;

// //numeros
// dato = String(dato);
// //boleanos
// dato = String(true);
// //fecha
// dato = new Date();
// dato = String(new Date());
// //areglo
// dato = String([1, 2, 3, 400]);

// console.log(dato);
// console.log(dato.length);

// let dato;
// dato = Number("20");
// dato = Number("2020");
// dato = Number(true);
// dato = Number(false);
// dato = Number(null);
// dato = Number("Hola Mundo");
// dato = Number([1, 2, 3, 4]);

// //parseInt y parseFloat
// dato = parseInt("100");
// dato = parseInt("100.2");
// dato = parseFloat("100.2");
// dato = parseInt("100");

// //console.log(dato);

// //to fixed
// let numero1 = "10123552753.525036582662124",
//     numero2 = 1025861445235.2263357789585;
// console.log(Number(numero1).toFixed(5));
// console.log(numero2.toFixed(5));

// let numero1 = 50,
//     numero2 = "10",
//     numero3 = "tres",
//     numero4 = "20.20";
// console.log(numero1 + numero2);
// console.log(Number(numero2) + numero1);
// console.log(parseInt(numero2) + numero1);
// console.log(parseFloat(numero4) + numero1);
// console.log(Number(numero3));

/*Variables*/
// var nombreCliente = 'Isabel';
// var nombre_cliente = 'Isabel';
// var NombreCliente = 'Isabel';
// var nombrecliente = 'Isabel';

// console.log(nombreCliente);

// let nombre = 'Karen';
// console.log(nombre);

// const cliente = 'Juan';
// console.log(cliente);

// const divMensaje = document.getElementById('mensaje');

// let nombre;
// nombre = 'ISABEL'; //""
// console.log(nombre);

/*Concatenar*/

// let aprendiendo = 'Aprendiendo';
// tecnologia = 'JavaScrip';

// console.log(`${aprendiendo} ${tecnologia}`);

// let banda = "Metallica",
//     cancion = 'Enter Sandman';

// let nombre = banda + " " + cancion;
/* Funciones String */
// //Length cuantas letra tiene una variable
// console.log(banda.length);

// //concat
// nombre = nombre.concat(" ", "y es genial");

// //Todas Mayusculas
// nombre = nombre.toUpperCase();

// //Todas Minusculas
// nombre = nombre.toLowerCase();

// console.log(nombre);

// let actividad = 'Estoy aprendiendo JavaScript con el curso';

// //Dividir la cadena
// nombre = actividad.split(' ');

// let intereses = 'Leer, caminar, escuchar musica, escribir, aprender a programar';

// nombre = intereses.split(', ');

// // Reemplazar un valor
// nombre = actividad.replace('JavaScript', 'JS');
// //includes revisa que algo exista
// nombre = actividad.includes('JavaScript');


// // console.log(nombre);

// let master = 'Master ',
//     puppets = 'Of Puppets';

// console.log(master.repeat(3));
// console.log(puppets);

// const numero1 = 30,
//     numero2 = "20",
//     numero3 = 20.20,
//     numero4 = -3,
//     numero5 = 20;

// let resultado;
// //suma
// resultado = numero1 + numero5;
// //resta
// resultado = numero1 - numero5;
// //multiplicar
// resultado = numero1 * numero5;
// //dividir
// resultado = numero1 / numero5;
// //Clase math
// resultado = Math.round(2.5);
// resultado = Math.floor(2.99);
// resultado = Math.ceil(2.01);
// // Raiz Cuadrada
// resultado = Math.sqrt(144);
// //valor absoluto
// resultado = Math.abs(numero4);
// //potencia
// resultado = Math.pow(8, 3);
// //minimo
// resultado = Math.min(10, 2, 4, 60, 5);
// //maximo
// resultado = Math.max(10, 2, 4, 60, 5);

// resultado = (20 + 30) * 2;

// let puntaje = 0;
// console.log(puntaje);let dato = 198