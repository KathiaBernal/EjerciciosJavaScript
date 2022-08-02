// Mejores prácticas:

// camelCase
// Utilizar mayúsculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...

var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;

// Seguir un standard personal

// Pueden contener número, letras, guión bajo, símbolo de dólar
var a;
var a1;
var a_Nombre;
var a$Direccion;

// Declaración de variables
// Type number
var edad = 26;
var peso = 63;
var miopia = 3;
var astigmatismo = 3;

// Type boolean
var ciego = true;
var hambre = true;
var bateria = false;
var ia = true;

// Type string
var nombre = "Kathia Bernal";
var ciudad = "Tepic";
var nacionalidad = "Mexicana";

//Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;
// Variables undefined
var xx, yy, zz;

// Defined: el amor que le damos a nuestro crush
// Undefined: el amor que nos tiene nuestro crush
// El amor que nos decía tener nuestro ex

// Variable tres = 4
// var dos = tres (4)
// var uno = dos (4)
var uno = dos = tres = 4;

// Escribir en una sola linea variables undefined de nuestro carrito de compras
var catsum, leche, galletas, cereal, rollo, jabon, shampoo, detergente;

// typeOf();
// Nos indica el tipo de dato al que pertenece nuestra variable

var a = 2;
typeof(a);
// number

var b = "2";
typeof(b);
// string

var c = true;
typeof(c);
// boolean

var d = null;
typeof(d);
// object

//Not a Number
//isNaN() es una función que bis permite verificar si un dato es o no es un número

// NaN es tal cual un tipo de dato en JavaScript
isNaN(NaN);
// true

var e = NaN;
isNaN(e);
// true
typeof(e);
// number

// Nueva forma de declarar variables
var a = 1;

// Nos permite modificar su valor actual sin restricciones
let a = 1;

// Constante
// Es una variable con un dato que no va a cambiar
const a = 1;
// Variables constantes deben mantenerse con un solo valor
// No es posible cambiarles el valor posterior a su declaración

// Arrays
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const carros = ["BMW", "Volvo", "Mercedes", "Ford"];
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"];




