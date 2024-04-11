#!/usr/bin/env node
const { suma, multi } = require('./operaciones')
const { vehiculos } = require('./CONSTANS')
// NODE 16 conforme el manual
const os = require('node:os')
// modulo nativo

console.log(suma(1000, 20))
console.log(multi(200, 2))
vehiculos.forEach(v => {
    console.log("El carro que tenemos disponible: " + v.modelo)
})

console.log(os.totalmem() + ' memoria disponible')
console.log(os.cpus().length, ' procesadores disponibles')
console.log(os.hostname(), ' nombre del host')