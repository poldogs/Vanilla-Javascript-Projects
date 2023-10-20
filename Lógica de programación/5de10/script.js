/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) 
devolverá 4 base 10.*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn(`No ingresaste el numero a convertir`)

    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`)

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    } else if (base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)
    }
}

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. 
miFuncion(1000, 20) devolverá 800.*/

const hacerDescuento = (cantidad = undefined, descuento = undefined) => {
    if(typeof cantidad !== "number") return console.warn(`Ingrese un número de cantidad`)

    if(typeof descuento !== "number") return console.warn(`Ingrese un número de descuento`)

    if(cantidad === undefined) return console.warn(`Ingrese un número de cantidad`)

    if(descuento === undefined) return console.warn(`Ingrese un número de descuento`)
    
    if(descuento > 100) return console.warn(`El descuento no puede ser mayor al 100%`)

    console.info(cantidad - (cantidad*descuento/100))
}

hacerDescuento(1000, 20);
hacerDescuento(1000, 120);
hacerDescuento(1000, );
hacerDescuento(1000, true);


/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. 
miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const aniosHastaHoy = (fechaDada = undefined) => {
    
    

    if(fechaDada === undefined) return console.warn(`Introduzca una fecha`)

    if(!(fechaDada instanceof Date)) return console.warn(`Introduzca la fecha como en el ejemplo: Date(YYYY,MM,DD)`)

    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    let anioDado = fechaDada.getFullYear();

    if(Math.sign(anioActual - anioDado) === -1) return console.warn(`Introdujo una fecha futura T.T`)
    
    console.info(anioActual - anioDado)
}

aniosHastaHoy(new Date(1984,4,23))
aniosHastaHoy(new Date(1997,4,23))
aniosHastaHoy(new Date(2064,4,23))
aniosHastaHoy({})
aniosHastaHoy(true)