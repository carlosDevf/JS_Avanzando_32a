//https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
// para que esto funcione: 
// agregar dentro del package.json al propiedad de type="module" linea 6 de este proyecto
// cambiar la extension del archivo por mjs

import colors from 'picocolors' //nuevo estandar
import inquerer from 'inquirer'

// Asincrona: inquerer necesita esperar el dato del usuario
async function main(){
    console.log(colors.white("Benvenido a mi super app"))
    
    // su nombre al usuario 
    const { name } = await inquerer.prompt({
        type: "input",
        name: "name",
        message: "¿Como te llamas?"
    })

    console.log(colors.blue(`Hola, ${name}`))

    const { edad } = await inquerer.prompt({
        type: "input",
        name: "edad",
        message: "¿Que edad tienes?"
    })


    if (edad >= 18) {
        console.log(colors.green("perfecto eres mayor de edad"))
    } else {
        console.log(colors.red("Este sitio no es para ti"))
    }

}

main()

