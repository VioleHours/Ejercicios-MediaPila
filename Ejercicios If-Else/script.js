// *Qué Devuelve Cada Expresión?
// Sin probar en la consola, pensá que devolverá cada una de estas expresiones. ¿Son true o false?
// let x=10
// let y ="a"
// y==="b" || x >= 10 // true

// let x=3
// let y=8
// !(x == "3" || x === y) && !(y !== 8 && x <= y) // false

// let str = ""
// let msj = "jaja!"
// let esGracioso = "false"
// !((str || msj) && esGracioso) // false

// 🏅 Comparaciones
// Escribí en tu consola estas expresiones teniendo en cuenta el valor que deben retornar:

// Que compare 2 Strings y retorne un valor true.
console.log("Nombre" === "Nombre");
// Que compare 2 Strings y devuelva false.
console.log("Violeta" === "violeta");
// Que involucre un String y un Número y retorne false.
console.log("1234" === 1234);
// Que involucre un String y un Número y retorne true.
console.log("1234" == 1234);

// *🏅🏅 Mis Primeras Condicionales
// En este ejercicio deberás:

// Escribir una sentencia if que siempre ejecute su bloque de código.
if (true) {
    console.log("Esto siempre se ejecuta");
}

// Escribir una sentencia if que nunca ejecute su bloque de código.
if (false) {
    console.log("Este bloque nunca se ejecuta.");
}
// Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.
let estado = prompt("¿Cómo estás hoy?");
if (estado.toLowerCase() === "triste") {
    console.log("¡Ánimo! Todo va a mejorar, un día a la vez.");
}

// Escribir una sentencia que le pregunte al usuario cuál es el número secreto.
// ⚠️ Importante: Solamente deberás advertirle con un mensaje en caso de que esté equivocado.
let numeroSecreto = 7;
let respuesta = prompt("¿Cuál es el número secreto?");
if (parseInt(respuesta) !== numeroSecreto) {
    console.log("¡Error! Ese no es el número secreto.");
}

// Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código:
//  window.location = "http://www.google.com"
let contraseña = prompt("Por favor, ingrese la contraseña:");
let contraseñaCorrecta = "Contraseña123";
if (contraseña === contraseñaCorrecta) {
    window.location = "http://www.google.com";
} else {
    console.log("Contraseña incorrecta.");
}

// *🏅🏅 Par O Impar
// Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usá la estructura condicional if...else.
let numero = prompt("Ingresa un número");
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
// 🏅🏅🏅 Agregá Caminos
// ¿Recordás este código?:

let edad = prompt("Ingrese su edad.");

if (edad < 0) {
    console.error("Error, su edad no es válida.");
} else if (edad < 18) {
    alert("No puede pasar al bar." + (edad % 2 !== 0 ? " ¿Sabías que tu edad es impar?" : ""));
} else if (edad < 21) {
    alert("Puede pasar al bar, pero no puede tomar alcohol." + (edad % 2 !== 0 ? " ¿Sabías que tu edad es impar?" : ""));
} else if (edad == 21) {
    alert("Puede pasar al bar y tomar alcohol. ¡Felicitaciones por llegar a la mayoría de edad!" + (edad % 2 !== 0 ? " ¿Sabías que tu edad es impar?" : ""));
} else {
    alert("Puede pasar al bar y tomar alcohol." + (edad % 2 !== 0 ? " ¿Sabías que tu edad es impar?" : ""));
}
// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:

// Si la edad es negativa, que se muestre en la consola este mensaje: "Error, su edad no es válida."
// ⚠️Importante: No se deberá mostrar ningún otro mensaje.
// Si tiene 21 años, además de darle la bienvenida, felicitalo por haber llegado a la mayoría de edad.
// Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".


// *🏅🏅🏅 Adiviná El Número
// En un nuevo documento HTML, agregá un tag script y creá la Variable numeroSecreto. Ese número deberá ser igual a un entero.

// Preguntale al usuario cuál es el número secreto.

// Mostrale un mensaje que le indique al usuario si adivinó, o no, el número secreto.

// Pista: Usá la comparación estricta. Buscá en Google cómo usar Number().

// Indicale al usuario si el número ingresado es mayor o menor que el número secreto.

// *🚀¿Puedo Jubilarme?
// Parte 1
// En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.

// ⚠️ Importante: En Argentina, las mujeres pueden jubilarse a los 60 años.
let edadJubilacionMujeres = 60; 
let edadJubilacionHombres = 65;
// Pedile al usuario que ingrese su edad y guardá este valor en una Variable. A partir de ese input, informale si puede jubilarse o no.
let edadIngresada = Number(prompt('Ingrese su edad'));
let genero = prompt('Ingrese su género: Femenino o  Masculino').toLowerCase();
if ((edadIngresada >= edadJubilacionMujeres && genero === 'femenino') || (edadIngresada >= edadJubilacionHombres && genero === 'masculino')) {
    alert('Puede jubilarse, FELICIDADES!')
} else {
    alert('Aún no puede jubilarse, recuerde que la edad Jubilatoria de mujeres en Argentina es de 60 años y en hombres es de 65 años.')
}
// Parte 2
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse.

// ⚠️ Importante: En Argentina, los hombres pueden jubilarse a los 65 años.

// Para esto, además de preguntar la edad del usuario deberás confirmar si es hombre o mujer.

// Te recomendamos empezar con dos bloques if.

// Extra Bonus
// Optimizá tu código de modo que, todo el ejercicio, se resuelva con un solo if. Usá operadores lógicos y de relación.

// A ver si aqui me funciona lo que pienso o lloro.
let edadJubilacion = Number(prompt('Ingrese su edad'));
let generoPersona = prompt('Ingrese si es Hombre o Mujer').toLowerCase();

let respuestaJubilacion = (edadJubilacion >= 65 && generoPersona === 'hombre') || (edadJubilacion >= 60 && generoPersona === 'mujer') ? 'FELICIDADES, Estás en edad de jubilarte' : 'Aún no podés jubilarte'

alert(respuestaJubilacion)

//Si funciona vamo lo pibeeeeeeeee

// *Ejercicio 1
// Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.
let datos = prompt('ingrese su palabra').toLowerCase();

switch(datos) {
    case 'casa':
        alert('House')
    break
    case 'perro':
        alert('Dog')
    break
    case 'pelota':
        alert('Ball')
    break
    case 'arbol':
        alert('tree')
    break
    case 'genio':
        alert('genius')
    break
    default:
        alert('La palabra ingresada es incorrecta')
}
// En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.

// *Ejercicio 2
// Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:
let valoracion = prompt('Califique la pelicula que acaba de ver como Muy Mala, Mala, Mediocre, Buena o Muy Buena').toLowerCase();
// Muy Mala.
// Mala.
// Mediocre.
// Buena.
// Muy buena.
// Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.
switch (valoracion) {
    case 'muy mala':
        alert('Calificaste la película como Muy Mala. Lo lamentamos mucho.')
    break
    case 'mala':
        alert('Calificaste la película como Mala. Lo sentimos')
    break
    case 'mediocre':
        alert('Calificaste la película como Mediocre. Intentaremos mejorar')
    break
    case 'buena':
        alert('Calificaste la película como Buena. Nos alegra')
    break
    case 'muy buena':
        alert('Calificaste la película como Muy Buena. ¡Nos alegra mucho!')
    break
    default:
        alert('Ingresaste un valor Inválido')
}
alert('¡Gracias por tu visita!');
// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".

// Cuando el usuario haya valorado la película, agradecele su visita.