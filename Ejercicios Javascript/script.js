// 🏅Variables
// En tu consola, declará una Variable llamada uno y asignale un número cualquiera.
let uno = 8; // 8
// Declará una Variable llamada dos y asignale como valor la Variable uno.
let dos = uno; // 8
// Cambiá el valor de la Variable uno.
// Pensá antes de ver la solución: ¿Cuál es el valor de la Variable dos? -> El mismo de la variable UNO
console.log({ uno });
console.log({ dos });

// 🏅 Mensaje Con Variables
// Declará las siguientes Variables y asignales un valor:
// nombre.
let nombre = "Violeta Sol";
// edad.
let edad = 26;
// cumpleaños.
let cumpleaños = "7 de Julio";
// ciudad.
let ciudad = "Salta";
// ocupacion.
let ocupacion = "Desarrolladora Web";
// pasatiempos.
let pasatiempo = "Programar y leer";
// Usá console.log para escribir un párrafo que combine Strings con la información guardada en las Variables.
console.log(`Hola! Mi nombre es ${nombre}, tengo ${edad} años y mi cumpleaños es el ${cumpleaños}. Vivo en ${ciudad}, soy ${ocupacion} y me encanta ${pasatiempo}`);

// Ahora creá múltiples Variables en una única línea de código.
let nombre_2 = "Violeta Sol", edad_2 = 26, cumpleaños_2 = "7 de Julio", ciudad_2 = "Salta", ocupacion_2 = "Desarrolladora Web", pasatiempo_2 = "Programar y leer";

console.log(`Hola! Mi nombre es ${nombre_2}, tengo ${edad_2} años y mi cumpleaños es el ${cumpleaños_2}. Vivo en ${ciudad_2}, soy ${ocupacion_2} y me encanta ${pasatiempo_2}`);

// 🏅Cantidad De Caracteres
// Pedile al usuario que ingrese un texto breve. Guardá su input.
// Mostrá por consola cuántos caracteres tiene el input.
let text = "";
function textInput() {
    text = prompt("Por favor ingresa un texto breve:");
    textDef = text.replace(/\s+/g, "");
    console.log(`El texto ingresado tiene ${textDef.length} caracteres sin espacios y ${text.length} contando los espacios.`);
}

textInput();

// 🏅🏅Calculadora De Edad
// Preguntale al usuario su edad.
// Si no recordás como hacerlo, probá con lo siguiente:
let age = 0;
age = prompt("Indique cuál es su edad");
// prompt() → prompt (“Indique cuál es su edad”)
// 🛎️ Recordá: ¡Guardá este valor en una variable porque la usarás más adelante!

// Calculá cuántos días representa. Por ejemplo: Si tiene 28 años, serán 10.220 días.
// 👩‍🏫👨‍🏫 Para este ejercicio, considerá que un año tiene 365 días. No consideres el año bisiesto.
function daysOfAge() {
    let totalDays = age * 365;
    console.log(`Tenés ${age} años y representa ${totalDays} días.`);
}

daysOfAge();
// Mostrá la respuesta al usuario.

// 🏅🏅Suma De Valores
// Creá 3 Variables:
// num1.
let num1 = 0;
// num2.
let num2 = 0;
// resultado.
let result = 0;
// Pedile al usuario que le asigne un valor a num1 y num2. La Variable resultado deberá ser la suma entre num1 y num2.
// Mostrá por consola el valor de resultado.

num1 = prompt("Por favor, ingrese un número:");
num2 = prompt("Por favor, ingrese otro número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

result = num1 + num2;

console.log(`La suma de ${num1} y ${num2} es: ${result}`);

// 🏅🏅🏅Calculador De Abastecimiento De Por Vida
// Ejercicio 1
// ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!

// Almacená tu edad en una Variable.
let currentAge = 26;
// Guardá tu edad máxima en otra Variable.
let maximunAge = 89;
// Declará una Variable con el nombre de tu snack favorito.
let favoriteSnack = "Papitas";
// Estimá cuántos snacks comerás por día y guardalo como un número en una Variable.
let snackPerDay = 10;
// Calculá cuántos snacks te quedan por comer en el resto de tu vida.
let remainingYears = maximunAge - currentAge;
let remainingDays = remainingYears * 365;
let totalSnacks = remainingDays * snackPerDay;
// Mostrá el resultado en un alert: "Necesitarás NN snacks para que te alcancen hasta los XX años."
alert(`Necsitarás ${totalSnacks} snacks para que te alcancen hasta los ${maximunAge} años.`);
// Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.
let pricePerUnit = 20;
let totalCost = totalSnacks * pricePerUnit;
alert(`Necesitarás ${totalCost} para poder comprar snacks el resto de tu vida.`);

// Ejercicio 2
// Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida.
// Almacená en una Variable la cantidad de días que vas a estar de viaje.
let travelDays = 7;
// Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
let maxBudget = 50000;
// Declará la Variable comida.
let meals = 4;
// Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
let totalMeals = travelDays * meals;
// Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
let expensePerMeal = maxBudget / totalMeals;
// Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".
alert(`Podés gastar ${expensePerMeal.toFixed(2)} en cada comida para que te alcance la plata durante los ${travelDays} días de viaje`);

// *Ejercicios: ES6
// Ejercicio 1
// Usá Template Literals para obtener el output "Gabriela es programadora" a partir de las Variables:

let nombre_3 = "Gabriela";
let profesion = "programadora";

console.log(`${nombre_3} es ${profesion}.`);
alert(`${nombre_3} es ${profesion}.`);

// Ejercicio 2
// Desarrollá un programa que calcule cuánto debe abonar un cliente al finalizar su compra.
let itemPrice = parseFloat(prompt("Ingresá el precio del artículo:"));
// !La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
let quantity = parseInt(prompt("Ingresá la cantidad que vas a llevar:"));
// !Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. Si no se especifica la base o se especifica como 0, JavaScript asume lo siguiente:
// !Si el parámetro cadena comienza por "0x", la base es 16 (hexadecimal).
// !Si el parámetro cadena comienza por "0", la base es de 8 (octal). Esta característica está desaconsejada.
// !Si el parámetro cadena comienza por cualquier otro valor, la base es 10 (decimal).
// !Para eso, el programa debe solicitar el ingreso del precio del artículo y la cantidad que llevará.
let total = itemPrice * quantity;
// Usá Template Literals e interpolación de Strings para realizar la operación matemática.
let message = `El total a abonar por ${quantity} artículos a $${itemPrice.toFixed(2)} cada uno es $${total.toFixed(2)}.`;

console.log(message);
alert(message);
