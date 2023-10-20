/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 
"odnuM aloH".*/
const invertirTexto = (frase = "") =>
    (!frase)
        ? console.warn("Introduce una frase")
        : console.info(`Su texto quedaría como ${frase.split("").reverse().join("")}`);

invertirTexto()
invertirTexto("Hola Mundo")

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion
("hola mundo adios mundo", "mundo") devolverá 2.*/
const buscadorPalabra = (frase = "",palabra = "") =>
    (!frase)
        ? console.warn("Introduce una frase")
        : (!palabra)
        ? console.warn("Introduce una palabra")
        : (!frase.includes(palabra))
        ? console.warn(`La frase ${frase} no contiene la palabra ${palabra}`)
        : console.info(`La palabra ${palabra} aparece ${frase.split(palabra).length-1} veces en la frase`)

buscadorPalabra("hola mundo adios mundo", "mundo");
buscadorPalabra("", "mundo");
buscadorPalabra("hola mundo adios mundo", "");
buscadorPalabra("la cara es cara y encara", "cara");

console.info("Segunda forma de hacerlo")
const buscarPalabra = (frase = "", patron = undefined) => {
    if(!frase){
        console.warn("Introduce una frase")
    }

    if(patron === undefined){
        console.warn("Introduce un patrón")
    }

    let i = 0,
        contador = 0
    while (i !== -1) {
        i = frase.indexOf(patron, i)
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    console.info(`El patrón ${patron} se repite ${contador} veces`)
}
buscarPalabra("hola mundo adios mundo", "mundo");
buscarPalabra("la cara es cara y encara", "cara");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que 
en otro), pe. mifuncion("Salas") devolverá true.*/
const esPalindromo = (palabra = "") => {
    if(!palabra){
        console.warn("Introduce una palabra")
    } else {
        palabra = palabra.toLowerCase();
        palabraInversa = palabra.split("").reverse().join("");
        console.info(`${palabraInversa.includes(palabra) ? "E" : "No e"}s palíndromo`)
    }
}

esPalindromo("Salas")
esPalindromo("Asa")
esPalindromo("Casa")


/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, 
xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
const eliminarPatron = (frase = "", patron = undefined) => {
    if(!frase){
        console.warn("Introduce una frase")
    }

    if(patron === undefined){
        console.warn("Introduce un patrón")
    }

    console.info(`Su frase quedaría como ${frase.split(patron).join("")}`)
}



eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy")