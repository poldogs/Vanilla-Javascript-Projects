/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá 
los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenar = (arreglo = undefined) =>{
  let arreglo2 = [...arreglo]
  
  console.info({
    asc : arreglo.sort(), 
    desc : arreglo2.sort().reverse()
  })
}

ordenar(([7, 5,7,8,6]))



/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const eliminarDuplicados = (array = undefined) =>{
  
  newArray = [];
  array.forEach(element => {
    if(!newArray.includes(element)){
    newArray.push(element)
    }
  });
  
  console.info(newArray)
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])


/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const calcularPromedio = (array = undefined) => {

  const sumWithInitial = array.reduce((accumulator, currentValue) => (accumulator + currentValue));
  let media = sumWithInitial/array.length
  console.info(media)
}

calcularPromedio([9,8,7,6,5,4,3,2,1,0]);