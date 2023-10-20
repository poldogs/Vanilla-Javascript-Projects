/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
  constructor(idIMDB , titulo, director, anioEstreno, paisOrigen, genero, calificacionIMDB) {

    if (typeof idIMDB === 'string' && /^[A-Za-z]{2}\d{7}$/.test(idIMDB)) {
        this.idIMDB = idIMDB;
    } else {
        throw new Error('El formato del ID IMDB no es válido.');
    }
    
    if (typeof titulo === "string" && titulo.length < 100) {
      this.titulo = titulo;
    } else {
      throw new Error('El titulo de la pelicula debe ser menor a 100 caracteres')
    }

    if (typeof director === "string" && director.length < 50) {
      this.director = director;
    } else {
      throw new Error('El director de la pelicula debe ser menor a 50 caracteres')
    }

    if (anioEstreno.toString().length === 4) {
      this.anioEstreno = anioEstreno;
    } else {
      throw new Error('El año de estreno deben ser 4 dígitos')
    }

    if (Array.isArray(paisOrigen)) {
      this.paisOrigen = paisOrigen;
    } else {
      throw new Error('El país de origen debe ser un Array');
    }

    if (Pelicula.generosAceptados().includes(genero)) {
      this.genero = genero;
    } else {
      throw new Error(`El género "${genero}" no está entre los géneros aceptados: ${Pelicula.generosAceptados().join(", ")}`);
    }

    if (typeof calificacionIMDB === 'number' && calificacionIMDB >= 0 && calificacionIMDB <= 10) {
      // Redondear la calificación a una posición decimal
      this.calificacionIMDB = parseFloat(calificacionIMDB.toFixed(1));
    } else {
      throw new Error('La calificación debe ser un número entre 0 y 10 con una posición decimal.');
    }

    
    
  }
  static generosAceptados() {
    return ["Acción", "Comedia", "Drama", "Ciencia ficción", "Aventura", "Animación", "Romance", "Terror", "Fantasía", "Documental"];
  }
}
console.info(Pelicula.generosAceptados());

const coco = new Pelicula('AB3456789',"Coco la Película", "Mike Mens", 2015, ["Mexico"], "Acción", 8.42)
const elReyLeon = new Pelicula('VF7654321', "El Rey León", "Roger Allers", 1994, ["Estados Unidos"], "Animación", 8.65);
const toyStory = new Pelicula('PO7890123', "Toy Story", "John Lasseter", 1995, ["Estados Unidos"], "Drama", 6.03);

console.info(coco, elReyLeon, toyStory)