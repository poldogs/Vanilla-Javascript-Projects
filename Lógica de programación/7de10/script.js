/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const calcularCuadrado = (serie) => {
  
  /* var square = serie.map(function (x){
     Math.sqrt(x)
    })  */
  var square = serie.map((x) => Math.pow(x,2))
  
  console.info(square)
}

calcularCuadrado([1, 4, 5])


/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. 
miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const altoBajo = (serie) => {
  
  let array = [Math.max(...serie), Math.min(...serie)]

  console.info(array)
  }

altoBajo([1, 4, 5, 99, -60]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena 
los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
{pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const separadorPI = (serie) =>{
  pares = serie.filter((x) => (x % 2 === 0))
  impares = serie.filter((x) => (x % 2 !== 0))
  console.info({pares, impares})
}

separadorPI([1,2,3,4,5,6,7,8,9,0])