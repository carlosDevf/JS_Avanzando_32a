const fs = require('node:fs')
const path = require('node:path') // commonJS
// file system => sistema operativo
/// PARA TODA UNA CLASE DESPUES
/// Sincrona => se resuleven de inmediato
/// Asincrono => tardan en resolverse ///
/// 
console.log(path.sep, 'hola')
const pathFile = path.join('recursos', 'lista.txt')

console.log(path.extname(pathFile)) // validar si el archivo es correcto
// buena practica a la hora de usar archivos y carpetas hay usar path
console.log(pathFile)
/// llamada Promesa o Asyncrono
const file = fs.readFile(pathFile, 'utf-8', (err, info) => {
	// callback solucion que se le dio a las funciones que tardan tiempo en ejecutarse
	// bloquean el hilo de ejecucion 
	// encodig de texto
	// bloque de memoria => buffer
    if (err) {
        console.log(err)
        return err
    }
    /* console.log(info) */
		console.log(info)
		return info
})
// () => {} funcion anonima
// function{} => 
