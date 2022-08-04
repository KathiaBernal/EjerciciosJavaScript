
// Ejercicio 1
function idCard () {
    let nombre = "Kathia";
    let ubicacion = "Tepic";
    let pasatiempo = "Ver documentales";
    return (`Hola, mi nombre es ${nombre}, vivo en ${ubicacion}, y disfruto de ${pasatiempo}`);
}
console.log(idCard());

// Ejercicio 2
function calcPetAge (humanAge) {
    let cuyoEquiv = 20;
    let cuyoAge = humanAge * cuyoEquiv;
    return (`La edad del cuyo es ${cuyoAge}`);
}
console.log(calcPetAge(2));