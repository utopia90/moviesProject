// El molde para los futuros objetos:
class Film {

    // La función especial que se encarga de inicializar el objeto
    constructor (tit, ye, url) {
        // Declarando y asignando propiedades a este objeto en concreto (this)
        // Las propiedades también se las puede llamar variables miembro
        this.title = tit;   // No llevan let ni var
        this.year = ye;
        this.url = url;
    }
    mostrarEnConsola() {
        console.log(`Peli: ${this.title} - ${this.year}`);
    }
}
// Model es para gestionar el listado de películas
class Model {
    constructor() {
        this.films = [ ]; // new Array()
    }
    // Métodos a la altura del interior de la clase
    // OPERACIONES   CRUD
    // Create = addFilm
    addFilm(ti, ye, url) {    
        // Creamos una nueva instancia (nuevo objeto) de tipo Film    
        let fil = new Film(ti, ye, url);
        fil.mostrarEnConsola();
        // Y lo añadimos al array
        this.films.push( fil );
    }
    // Read: listar todos, obtener uno, 
    getFilms() {    // Obtener todos
        return this.films;
    }
    // filtrar y coger unos pocos... o uno
    getFilm(titulo) {   // Filtrar para buscar una peli por título
        // Recorremos (iteramos) sobre el array
        for (let i = 0; i < this.films.length; i++) {
            // Y si el título de la peli actual núm i es el mismo que recibimos
            if (titulo === this.films[i].title) {
                // Devolvemos esa peli
                return this.films[i];
            }
        }
        // Cuando termine de buscar, si no ha encontrado nada, devuelve null
        return null;
    }
    // Update
    // Delete
}

// Ejemplo de uso:    variable = new NombreDeClase ( argumentos de inicialización )

let miPeli = new Film("The Lord of the Rings", 1999);
miPeli.url = "http://sdfsdf.jpg";
// Con el acento grave: Template string, podemos insertar con ${ } variables
miPeli.mostrarEnConsola();

let tuPeli = new Film("Matrix", 1999);
tuPeli.url = "http://sdfsdf.jpg";
tuPeli.mostrarEnConsola();
