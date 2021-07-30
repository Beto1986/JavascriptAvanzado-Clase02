//					INICIO EJEMPLOS EN CLASE					 			

// console.log(document.querySelector("p").innerText);
// document.querySelectorAll(".hola").forEach(e => console.log(e.innerHTML));
// console.log(document.querySelector(".clase").innerHTML);
// console.log(document.querySelector("#id").innerHTML);

/* // Seleccionar un elemento por su ID
console.log(document.querySelector("#chau").innerText)
// Seleccionar el primer elemento de su tipo
console.log(document.querySelector("p").innerText)
// Seleccionar el primer elemento de su clase
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de su tipo
console.log(document.querySelectorAll("p").innerText) // Esto es un arreglo
// Seleccionar todos los elementos de su clase
console.log(document.querySelectorAll(".p").innerText)
// Seleccionar varios tipos de elementos
console.log(document.querySelectorAll("p,span").innerText)
// Seleccionar el primer elemento de un grupo
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de una clase y tipo
console.log(document.querySelectorAll("p.hola").innerText)


document.querySelectorAll(".hola").forEach(e => console.log( e.innerHTML)) // Recorrer el arreglo 

console.log(document.querySelectorAll("p,span").forEach(e =>e.innerHTML)) //Nos devuelve undefined

console.log(document.querySelector("#chau").innerHTML)
 */
/* 
document.querySelector(".hola").innerText = "<a href=''>Hola</a>" // Cambia el texto dentro de una etiqueta
document.querySelector(".chau").innerHTML = "<a href=''>Hola</a>" // Cambia la naturaleza del elemento
 */

// let mascota = document.querySelector("#mascota").innerHTML

// const foto = m => m ==="gatito" ? document.querySelector("img").src = "gatito.jpg" : document.querySelector("img").src = "perrito.jpg"

// document.querySelector("#texto").innerText = `Su mascota preferida es: ${mascota}`

// foto(mascota)
//					FIN EJEMPLOS EN CLASE					 			



// 0)  En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
/*	a) El primer span
	b) El primer span con clase “guayerd”
	c) El span con id “hola”
	d) Todos los span
	e) Todos los elementos  con clase “guayerd”
	f) Todos los span con clase “guayerd”.
	g) Todos los span y párrafos. */

// // a) El primer span
// console.log(document.querySelector("span").innerText);

// // b) El primer span con clase “guayerd”
// console.log(document.querySelector("span.guayerd").innerText);

// // c) El span con id “hola”
// console.log(document.querySelector("span#hola").innerText);

// // d) Todos los span
// document.querySelectorAll("span").forEach(e => console.log(e.innerText));

// // e) Todos los elementos  con clase “guayerd”
// document.querySelectorAll(".guayerd").forEach(e => console.log(e.innerText));

// f) Todos los span con clase “guayerd”.
// document.querySelectorAll("span.guayerd").forEach(e => console.log(e.innerText));

// g) Todos los span y párrafos.
// document.querySelectorAll("span,p").forEach(e => console.log(e.innerText));

// 1) Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
/* a) Al ID azul cambiarle el texto por “Azul”.
b) Al primer párrafo cambiarle el texto por “Verde”.
c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
d) A todos los párrafos agregarles un “!” al final del texto. 
e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.*/

// // a) Al ID azul cambiarle el texto por “Azul”.
// document.querySelector("#azul").innerText = "Azul";

// // b) Al primer párrafo cambiarle el texto por “Verde”.
// document.querySelector("p").innerText = "Verde";

// // c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
// document.querySelectorAll("p.rojo").forEach(e => (e.innerText = "Rojo"));

// // d) A todos los párrafos agregarles un “!” al final del texto.
// document.querySelectorAll("p").forEach(e => e.innerText = e.innerText + "!");

// // e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.
// document.querySelectorAll("p,h1").forEach(e => e.innerText = "*" + e.innerText);

// 2) Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”.

// const temp1 = 10;
// const temp2 = 30;

// const temperatura = (temp1, temp2) => (temp1 + temp2) / 2;

// document.querySelector("p").innerText = `La temperatura media es ${temperatura(temp1, temp2)} ºC`; // Creo párrafo nuevo en el HTML.

// 3) Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.

// let mascota = document.querySelector("#mascota").innerHTML
// const foto = m => m ==="gatito" ? document.querySelector("img").src = "gatito.jpg" : document.querySelector("img").src = "perrito.jpg"
// document.querySelector("#texto").innerText = `Su mascota preferida es: ${mascota}`
// foto(mascota)

// const estacion = prompt("Seleccione una de las estaciones del año: (Invierno, Verano, Primavera, Otoño)").toLocaleLowerCase();

// const estacionSeleccionada = estacion => {
//     switch (estacion) {
//         case "invierno":
//             document.querySelector("img").src = "img/invierno.jpg"
//             break;
//         case "verano":
//             document.querySelector("img").src = "img/verano.jpg"
//             break;
//         case "primavera":
//             document.querySelector("img").src = "img/primavera.jpg"
//             break;
//         case "otoño":
//             document.querySelector("img").src = "img/otoño.jpg"
//             break;
//             // default:
//             // alert(`La estacion '${estacion}' ingresada no corresponde a una estación del año`)
//             // break;
//     }
// }

// estacionSeleccionada(estacion);

// 4) Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.

// const anioActual = 2021;
// const anioNac = parseInt(prompt("Ingrese su año de nacimiento"));

// const edadUsuario = (anioActual, anioNac) => anioActual - anioNac >= 18 ? document.write(`Su edad es de ${anioActual - anioNac} años por lo tanto usted es mayor de edad`) : document.write(`Su edad es de ${anioActual - anioNac} años por lo tanto usted es menor de edad`);

// edadUsuario(anioActual, anioNac);

// 5) Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 

// const nombre = prompt("Ingrese su nombre").toLowerCase();
// const animalFav = parseInt(prompt("Ingrese su animal favorito: \n 1 - Perro \n 2 - Gato \n 3 - Canario"));

// let saludarUsuario = (nombre, animal) => {

//     switch (animal) {
//         // Si es un perro
//         case 1:
//             document.write(`Hola ${nombre}! `);
//             document.write('<br> <img src = "img/perro.jpg"/>');
//             break;
//             // Si es un gato
//         case 2:
//             document.write(`Hola ${nombre}!`);
//             document.write('<br> <img src="img/gato.jpg"/>');
//             break;
//             // Si es un canario
//         case 3:
//             document.write(`Hola ${nombre}!`);
//             document.write('<br> <img src="img/canario.jpg"/>');
//             break;
//             // Si no es ninguno de los animales propuestos
//         default:
//             document.write(`El animal ${animal} es incorrecto, debe ser Perro, Gato o Canario`)
//     }
// }

// saludarUsuario(nombre, animalFav)

// 6) Crear en el HTML un span con un ángulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
/* Ángulo: 90
   Opuesto: 270*/

// const seleccionarAngulo = parseInt(prompt("Ingrese un valor de ángulo de 0 a 360"));

// let obtenerAnguloOpuesto = angulo => {
//     document.querySelector("span.angulo").innerText = `Ángulo: ${angulo}`;
//     document.querySelector("span.opuesto").innerText = `Opuesto: ${360 - angulo}`;
// }

// obtenerAnguloOpuesto(seleccionarAngulo);

// 7) Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
//nombre.apellido@empresa.com(.ar si es argentina).

// const nombre = prompt("Ingrese su nombre").toLowerCase();
// const apellido = prompt("Ingrese su apellido").toLowerCase();
// const empresa = prompt("Ingrese su empresa").toLowerCase();
// const empresaArgentina = confirm("¿Su empresa es Argentina?");

// document.write(`${nombre}.${apellido}@${empresa}.com${empresaArgentina === true ?'.ar' : ''} `);

// 8) En un restaurante tienen menú del día según el día de la semana.
/* a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del mismo.

Lunes: Milanesas con puré 
Martes: Fideos con salsa
Miércoles: Pizza
Jueves: Hamburguesas con papas fritas
Viernes: Pastel de papa */

// const dia = parseInt(prompt("Ingrese el día de la semana: \n 1 - Lunes \n 2 - Martes \n 3 - Miércoles \n 4 - Jueves \n 5 - Viernes"));

// const menu = dia => {
//     switch (dia) {
//         case 1:
//             document.write(`Milanesas con puré <br> $300 <br> <img src="img/milanesaconpure.jpg"/>`);
//             break;
//         case 2:
//             document.write(`Fideos con salsa <br> $250 <br> <img src="img/fideosconsalsa.jpg"/>`);
//             break;
//         case 3:
//             document.write(`Pizza <br> $400 <br> <img src="img/pizza.jpg"/>`);
//             break;
//         case 4:
//             document.write(`Hamburguesas con papas fritas <br> $430 <br> <img src="img/hamburguesaconpapas.jpg"/>`);
//             break;
//         case 5:
//             document.write(`Pastel de papa <br> $280 <br> <img src="img/pasteldepapas.jpg"/>`);
//             break;
//         default:
//             document.write(`Debe ingresar un día de la semana(Lunes a Viernes)`);
//             break;
//     }
// }

// menu(dia);

/* b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

Milanesas con puré ($300)
Fideos con salsa ($250)
Pizza ($400)
Hamburguesas con papas fritas ($430)
Pastel de papa  ($280)*/

// Este ejercicio lo integré con el anterior(a) por simplicidad y para no repetir más código similar.