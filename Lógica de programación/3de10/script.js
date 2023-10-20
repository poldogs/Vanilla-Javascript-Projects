/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const randomNumber = () => {
    let random = 0
    while (random < 501 || random > 600) {
        random = Math.round(Math.random()*1000)
    }
    console.info(random)
}
randomNumber()



/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.*/
const esCapicuo = (numero = undefined) => {
    if(numero === undefined){
        console.info("Inserta un numero")
    }
    if(parseInt(numero.toString().split("").reverse().join("")) === numero){
        console.info(`${numero} es capicuo`)
    } else {console.info(`${numero} NO es capicuo`)}
}
esCapicuo(2002)
esCapicuo(2003)



/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como 
el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/
const factorial = (numero = undefined) =>{

    if (Math.sign(numero) === -1) {
        console.warn(`El número no puede ser negativo`)
    }
    if (numero === undefined) {
        console.warn(`Introduce un número`)
    }
    if (numero === 0){
        console.warn(`El factorial de 0 es 0 T.T`)
    }
    let savor = 1
    let primigenio = numero
    while(numero > 1){
        savor *= numero;
        numero--
    }
    console.info(`El factorial de ${primigenio} es ${savor}`)
}
factorial(5)
factorial(6)
factorial(4)
factorial(0)

