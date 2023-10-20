/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá 10.*/

const contarCaracteres = (cadena = "") => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena") 
        : console.info(`La cadena "${cadena}" tiene "${cadena.length}" caracteres`);


contarCaracteres("Hola Mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".*/
const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
        : (longitud === undefined)
            ? console.warn("No ingresaste la longitud que deseas del texto")
            :console.info(`La cadena resultante es "${cadena.slice(0,longitud)}" `);


recortarTexto("Hola Mundo", 4);
recortarTexto("",4);
recortarTexto("Hola Mundo",);


/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
const separadorDeTextos = (frase = "", separador = "") =>
    (!frase)
        ? console.warn("No ingresaste ninguna frase")
        : (separador === "")
        ? console.warn("No ingresaste ningun caracter separador")
        : console.info(`Si la frase ${frase} se separa por la letra ${separador} queda como ${frase.split(separador)}`)


separadorDeTextos('hola que tal', ' ');
separadorDeTextos('hola que tal', '');
separadorDeTextos("", ' ');
separadorDeTextos('hola que tal', 'a');



/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola 
Mundo Hola Mundo.*/

const repetidorDeTextos = (frase = "", repeticiones = undefined) =>
    (!frase)
        ? console.warn("No ingresaste ninguna frase")
        : (repeticiones === undefined)
        ? console.warn("No ingresaste numero de repeticiones")
        : (frase.endsWith(" "))
        ? console.info(frase.repeat(repeticiones))
        : console.info((frase + " ").repeat(repeticiones));

repetidorDeTextos('', 3);
repetidorDeTextos('Hola Mundo', );
repetidorDeTextos('Hola Mundo', 3);
repetidorDeTextos('Hola Mundo ', 3);

