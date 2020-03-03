function siguiente(x, done) {
  done(x + 1)
}

function doble(x, done){
  done(x * 2)
}


function imprimir(resultado){
  console.log('Resultado:', resultado)
}


siguiente(8, imprimir)

doble(8, imprimir)

doble(8, funcion)

function funcion(numero){
  siguiente(numero, imprimir)
}

siguiente(8, funcion2)

function funcion2(numero){
  doble(numero, imprimir)
}


function dobleDelSiguiente(x, done){
  done(doble(siguiente))
}


dobleDelSiguiente(8, imprimir)





