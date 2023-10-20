/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. 
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const contarCaracteres = (frase = "") =>{
    if(!frase) return console.warn(`Escriba una frase`)

    if(typeof frase !== "string") return (`Escriba una frase`)

    //A minúscula, se eliminan espacios y se vuelve a unir todo, así no contea espacios como consonantes
    frase = frase.toLowerCase().split(" ").join("")

    let contadorV = 0,
    contadorC = 0

    for (let i = 0; i < frase.length; i++) {
        ("aeiouáéíóú".includes(frase.charAt(i))) ? contadorV++ : contadorC++
    }

    console.info(`La frase contiene ${contadorC} consonantes y ${contadorV} vocales`)
}
contarCaracteres("Hola Mundo");
contarCaracteres("Está mareá");


/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero.*/

function esNombreValido(texto) {
    // Expresión regular para validar nombres: letras mayúsculas y minúsculas, espacios y apóstrofes permitidos.
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ'\s]+$/;
  
    // Usamos test() para verificar si el texto cumple con la expresión regular.
    if (regex.test(texto)) {
    console.log(`${texto} es un nombre válido.`);
    } else {
    console.log(`${texto} no es un nombre válido.`);
    }
}
esNombreValido("Poldo Gallardo")
esNombreValido("Poldo98_")

  

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
devolverá verdadero.*/

function esEmailValido(texto) {
    // Expresión regular para validar direcciones de correo electrónico.
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Usamos test() para verificar si el texto cumple con la expresión regular.
    if (regex.test(texto)) {
    console.log(`${texto} es una dirección de correo electrónico válida.`);
    } else {
    console.log(`${texto} no es una dirección de correo electrónico válida.`);
    }

}
  
esEmailValido("poldo@gmail.com");
esEmailValido("poldo@gmail");

  
  
  