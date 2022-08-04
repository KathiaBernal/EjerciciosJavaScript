// Mejores prácticas
// Simplificar funciones lo más que se pueda

// 1. Utilizar keyword: function
// 2. Nombras nuestra función
// 3. Utilizar () y abrir y cerrar la función {}

function myFunction() {
    // Aquí va el cuerpo de la función
    console.log("Hola Mundo");
}

// myFunction();

function myName() {
    let name = "Kathia Bernal";
    console.log(name);
}

// myName();
// Variable con scope local
function scopeFunction() {
    let local = "Esto se encuentra dentro de la función";
    console.log(local);
}

// scopeFunction();
// console.log(local);

var nombre = "Kathia Bernal"

function globalScope() {
    console.log(nombre);
}

// globalScope();

// Scope de variables
// LET
// Scope global, local
// Hoisting: La variable no existe para nuestro interprete de JS
// console.log(a);
let a = "Hoisting let";

// VAR
// Scope global, local
// Hoisting: No se puede utilizar o invocar antes de declararla
// console.log(x); //Ejemplo de cómo no se hace
var x = "hola"; //Ejemplo de cómo no se hace

// CONST
// Scope global, local
// Hoisting: No se puede tilizar. No existe para nuestro interprete de JS.
// console.log(c);
const c = "Hoistig const";



// Input
const miNombre = "Kathia";

function fiuFiu(x) {
    // console.log(x);
}

// Parámetro declarado en variable
fiuFiu(miNombre); // Aquí sí es obligatorio nombrar la variable
// Parámetro aleatorio
fiuFiu("Kathia Bernal");
fiuFiu(2);


// Function con más de 1 parámetro
function dosParam(x, y) {
    // console.log(x + y);
}

// Invocación con 2 parámetros
dosParam("Hola", "Mundo");

function tresParam(x, y, z) {
    // console.log(x + y + z);
}

tresParam("Hola", "Soy", "Kathia");

//////////////////////////////////////////////////////////
// OUTPUT

function out() {
    let x = "Hola";
    return x;
}

// Podemos recibir el dato de forma directa
// console.log(out());

// Podemos guardar el output en una variable
// Y la podemos utilizar después
const receive = out();

// console.log(receive);

// Función con parámetros y return
function areaRectangulo (b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));

function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log(areaTriangulo(8, 4));

///////////////////////////////////////////////////////

// objeto (síntaxis básica)
const conejo = {
    "nombre": "Griselo",
    "edad": 27,
    "color": "Gris",
    "peso": 500
}


const myFunction = () => {

}