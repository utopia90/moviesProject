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
