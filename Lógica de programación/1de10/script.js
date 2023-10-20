/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá 10.*/
console.log("Ejercicio 1")
function characterCounter(a) {
    console.log(a.length);
}
characterCounter("Hola Mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".*/
console.log("Ejercicio 2")
function newTextGenerator(a,x){
    console.log(a.slice(0,x));
}
newTextGenerator("Hola Mundo", 6)

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
console.log("Ejercicio 3")
function seperatorGenerator(a,b) {
    const newArray = a.split(b);
    console.log(newArray);
}
seperatorGenerator('hola que tal', ' ')
seperatorGenerator('hola que tal', 'a')

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola 
Mundo Hola Mundo.*/
console.log("Ejercicio 4")
function textRepeater(a,x){
    finalSpace = a + " "
    console.log(finalSpace.repeat(x))
}
textRepeater('Hola Mundo', 3)
textRepeater('Piribiri', 3)

