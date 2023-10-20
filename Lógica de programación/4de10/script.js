/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o 
no, pe. miFuncion(7) devolverá true.*/
const esPrimo = (numero = undefined) =>{
    let primo = true
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0){
            primo = false;
        }
    }
console.info(primo)
}
esPrimo(7)
esPrimo(12)
esPrimo(67)

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
const parImpar = (numero = undefined) => {
    if (numero % 2 === 0){
    console.info('Par')
    } else {console.info(`Impar`)}
}

parImpar(6)
parImpar(15)
parImpar(6)


/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
devolverá 32°F.*/

//(32 °F − 32) × 5 / 9 = 0 °C

const convertirTemp = (grados = undefined, conversor = "") => {
    if(conversor === "C"){
        console.info(`${(grados * 9/5)+ 32} ºF`)
    }
    if(conversor === "F"){
        console.info(`${(grados - 32)* 9/5} ºC`)
    }
    if(grados === undefined){
        console.info(`Introduce una temperatura`)
    }
    if(conversor !== "C" && conversor !== "F"){
        console.info(`Introduce una C o una F en funcion de la temperatura introducida`)
    }
}

convertirTemp(0,"C");