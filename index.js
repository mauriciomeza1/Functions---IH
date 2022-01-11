//FUNCIONES - Fábricas de código que se pueden reutilizar las veces necesarias.

// 1. FUNCIÓN DECLARATIVA 
//PARÁMETROS: DENTRO DEL PARÉNTESIS
//JAVASCRIPT TRADICIONAL 
//CARACTERÍSTICA ADICIONAL - HOISTING
console.log(saludar("english"))

function saludar(idioma) {

    switch (idioma) {
        case "spanish": 
            return "Hola mundo!"
        case "english":
            return "Hello world!"
        case "chinese":
            return "Ni hao!"
        default: 
            return "No se especificó el idioma"
    }
}

//TODA FUNCIÓN TIENE SU INVOCACIÓN
const resultado1 = saludar()
const resultado2 = saludar("spanish")
const resultado3 = saludar("english")
const resultado4 = saludar("chinese")
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)


// 2. FUNCIONES DE EXPRESIÓN 
//PROPUESTA DE JAVASCRIPT MODERNO 
//DECLARES DE LA FUNCIÓN Y LE ASIGNES A UNA VARIABLE 
//NO CUENTAN CON HOISTING


// A. NORMAL 
const despedirse = function(nombre) {
    return `Me dio gusto verte, ${nombre}`
}
console.log(despedirse("Sam"))

// B. FLECHA
// - VERSIÓN COMPLETA 
const gritarUno = () => {
    return "Está lloviendo! Se me va a mojar la ropa!"
}

console.log(gritarUno())

// -VERSIÓN SINTETIZADA
// DEBE CUMPLIR CON UNA CONDICIÓN - QUE SÓLO TENGAS UNA SENTENCIA (UNA SOLA LINEA DE CÓDIGO DENTRO DE LA FUNCIÓN)
// APLICAMOS RETORNO IMPLÍCITO 
const gritarDos = () => "Aguas! aguas!"

console.log(gritarDos())