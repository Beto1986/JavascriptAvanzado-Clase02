# JavascriptAvanzado-Clase02

Ejercicios del DOM.

0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
	a) El primer span
	b) El primer span con clase “guayerd”
	c) El span con id “hola”
	d) Todos los span
	e) Todos los elementos  con clase “guayerd”
	f) Todos los span con clase “guayerd”.
	f) Todos los span y párrafos.



      <span>Uno</span>
    <p class="guayerd">Setenta</p>
    <span class="guayerd">Cinco </span>
    <span>Dos</span>
    <span>Test</span>
    <span class="guayerd">Cuatro </span>
    <span id="hola">Tres </span>
    <p>Diez</p>
 



1) Hacer un HTML nuevo con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
a) Al ID azul cambiarle el texto por “Azul”.
b) Al primer párrafo cambiarle el texto por “Verde”.
c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
d) A todos los párrafos agregarles un “!” al final del texto. 
e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.


2) Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 


3) Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.


4) Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.

5) Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 

6) Crear en el HTML un span con un ángulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
Ángulo: 90
Opuesto: 270

7) Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
nombre.apellido@empresa.com(.ar si es argentina).

8) En un restaurante tienen menú del día según el día de la semana.
a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del mismo.

Lunes: Milanesas con puré 
Martes: Fideos con salsa
Miércoles: Pizza
Jueves: Hamburguesas con papas fritas
Viernes: Pastel de papa

b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

Milanesas con puré ($300)
Fideos con salsa ($250)
Pizza ($400)
Hamburguesas con papas fritas ($430)
Pastel de papa  ($280)

