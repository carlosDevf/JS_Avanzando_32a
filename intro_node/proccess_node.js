// el objeto global del proceso que se esta ejecutando en ese momento
// 
console.log('hola')
console.log(process.argv)
/* console.log(process.env) */ /// todos los dias en backed y en el front7
// forma en que manejamos datos sencibles de un servidor contraseñas, tokens
// manejar eventos 
// 
// electron => 
process.on('beforeExit', () => {
    // cerrar sesiones de base datos
    // mandar mensajes
    // cerrar funciones del sistema operativo    
    console.log("✌ regresa pronto")
})