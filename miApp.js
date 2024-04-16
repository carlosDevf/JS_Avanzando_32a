import colors from 'picocolors' //nuevo estandar
import inquerer from 'inquirer'

// Asincrona
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

