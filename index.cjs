const http = require('node:http')

const hostname = "127.0.0.1" // localhost
const port = 3000 // este es el puerto por default de todos los equipos 

/// req y res => Modulo entero de DEVF intro Backend
const server = http.createServer((req, res) => {
    res.statusCode = 200 // ok 
    // peteciones a una API
    res.setHeader("Content-Type", "text/html")
    const html = `
        <div>
            <h1>Hola Mundo</h1>
            <a href="https://www.google.com">
                Ir a Google
            </a>            
        </div>
    `
    res.end(html)
})

// para cerrar o mater el servidor en la terminal presionamos crtl + c
// arrancar el servidor
server.listen(port, hostname, () => {
    console.log("🚀 esta vivio!!!!")
})



