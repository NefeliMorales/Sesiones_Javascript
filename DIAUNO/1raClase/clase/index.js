// MODELO DEL OBJECTO DEL DOCUMENTO

/*
  Solo puede ser accedido mediante de palabra clave "document"
*/

var documento = {
  head: {
    meta: {

    },
    title: {

    }
  },
  body: {
    div: {
      h1: {
        variable: "Let"
      }
    }
  }
}

/* 
  VARIABLES JAVASCRIPT

  VAR ._ Var es una variable js que deduce el tipo de dato, el ambito de esta variable
      puede ser accedida desde cualquier lugar del proyecto.
  
  LET ._ El ambito de esta variable solo se encuentra dentro de donde fue declarada.

  CONST ._ El ambito de esta variable solo se encuentra dentro de donde fue declarada,
        este tipo de variable solo puede ser declarada una vez, no puede ser editada solo
        puede mutar. 
        

*/

// let nombre = true
//   nombre = false
//   console.log('Nombre', nombre)
// const DNI = 12345678
//   DNI = 98765421
//   console.log('DNI', DNI)

/*

  FUNCIONES 

  Las funciones en js sirven cierto codigo en el momento que querramos.

  function => palabra reservada para declarar una funcion
  nombre de la funcion => sirve para identificar el funcion

 */

// function printMyName(name) {
//    const name = "Nefeli"
//   console.log("My name is ", name)
// }

// printMyName("Nefeli")

// function myAge(year) {
//   const currentYear = new Date().getFullYear()

//   const age = currentYear - year

//   return age
// }

// const data = myAge(1995)
// console.log("My age is ", data)

/*

  COMO ACCEDER AL DOM

  Se puede acceder mediante la palabra document


*/

// const h1 = document.getElementById('key')
// const h2 = document.getElementsByClassName('dom')

// h1.innerText="Nefeli"
// h1.style.color="green"

// console.log('h2', h2)

/*

  EVENTOS

  Los eventos son acciones que pueden suceder en el proyecto.

*/

// function click() {
//   console.log('I did click')
// }
// h1.addEventListener('click', click)

// function onMouseOver() {
//   console.log("Pasé sobre el h1")
// }
// h1.addEventListener('mouseover', onMouseOver)

// function onMouseOut() {
//   console.log("Salí del h1")
// }
// h1.addEventListener('mouseout', onMouseOut)

/*

  COMBINANDO LO APRENDIDO

 */

const buton = document.getElementById('save')
const clean = document.getElementById('clean')
const result = document.getElementById('result')

function showMyCountry() {
  // const country = input.value
  result.innerText="I want travel to " + country
  result.style.color="red"
  console.log('input', country)
  // alert("I want travel to " + country)
}

function condicion() {
  let isValid = true
  const country = document.getElementById('country').value
  if (country == "") {
    isValid = false
    console.log("Usted no agregó ningún país", isValid)
  } else {
    console.log('tiene país')
    result.innerText="El país que escribió fue " + country + ", es " + isValid
  }
}

function limpiar() {
  result.innerText=""
}

buton.addEventListener('click', condicion)
clean.addEventListener('click', limpiar)

/*


EJERCICIOS

  1. Realice una funcion que cuando pase el
  mouse sobre alguna etiqueta me muestre la fecha actual.

  2. Investigar sobre el evento onChange

  3. Hace un formulario de registro que tenga nombres, apellidos, edad,
  email, telefono, direccion, sexo y nacionalidad. Un boton guardar que mi muestre
  por consola todos los datos de la persona registrada.

  4. Hace una funcion que me retorne un número aleatorio cada vez que ejecute
  la funcion

*/


