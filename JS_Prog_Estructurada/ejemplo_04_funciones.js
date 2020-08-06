// LLAMADAS A LAS FUNCIONES:
// Los procimientos, que no devuelven nada, sólo se invocan,
// la instrución o sentencia es sólo la llamada a la función
menuDeLaAbuela();
menuRestaurante(1); // Pasamos el argumento 1 que será el parámetro numeroMenu
menuRestaurante(1 + 1); // Pasamos el argumento 2 que será el parámetro numeroMenu
menuRestaurante();  // No hay argumento, por lo que el parámetro será undefined
menuRestaurante(2 * 3); // Pasará por el default del switch

// Las funciones que devuelven valor:
// Podemos invocarlas como procedimientos, es decir, ignorar el valor devuelto
menuDeMadre();
// O podemos el valor devuelto y hacer con él:
var respuesta = menuDeMadre();
if (respuesta === true)
    alert("Muy bien hijo");
else
    alert("¡Que te las comas he dicho!");
// respuesta = "sdfsdf"; Jamás cambies el tipo de una variable aunque se pueda
// ¿Qué podemos hacer con el valor devuelto? Lo que queramos
// Por ejemplo, guardar en variable
var miComida = menuPersonalizado("Pan, espinacas y tortilla", 2);
// y mostrar en el HTML
document.write("<p>"  + miComida + "</p>");
// Podemos usar el valor devuelto directamente en otra instrucción
console.log("Has comido " + menuPersonalizado("Da igual", 0));
// Podemos pasar como parámetro lo que devuelve otra función
document.write("<p>" + menuPersonalizado("cachopo".toUpperCase(), parseInt("3")) + "</p>");
// TIPOS DE FUNCIONES:

// Funciones declaradas de la manera tradicional:
// Procedimiento: es una función que no devuelve (return ) nada

// Ejemplo: procedimiento sin parámetro
function menuDeLaAbuela() {
    document.write("<p>Fabada asturiana</p>");    
}

// Ejemplo: procedimiento con parámetro
function menuRestaurante(numeroMenu) {
    // El switch en el fondo es un if con varios else if
    switch (numeroMenu) {
        case 1:
            document.write("<p>Filete con papas</p>");
            break;
        case 2:
            document.write("<p>Ensalada vegetal</p>");
            break;
        default:    // Como el else, cualquier otro caso
            document.write("<p>No tenemos el menu " + numeroMenu + "</p>");
            break;
    }
}

// Ejemplo: Función sin parámetro que devuelve valor
function menuDeMadre() {
    // Por ejemplo vamos a devolver true o false si te lo has comido
    document.write("<p>Mamá te dice que te comas acelgas</p>");
    var siTeLoHasComido = prompt("¿Te has comido las acelgas", "si");
    if (siTeLoHasComido === "si") {
        return true;
    } else {
        return false;
    }
}
// Ejemplo: Función con parámetros que devuelve un valor
// vamos a devolver un string
function menuPersonalizado(ingredientes, cantidad) {
    if (cantidad < 0) {
        return "No puedes perder comida"
    } else if (cantidad == 0) {
        return "No hay comida"
    } else {
        return "La comida lleva " + cantidad + " de " + ingredientes;
    }
}