/*const miPromesa = new Promise ((res, rej) => {
  const condicion = false;
  if(condicion) {
    res('Esta promesa se resolvió de manera satisfactoria');
  } else {
    rej('Esta promesa fue rechazada (algun error)');
  }
})*/

/*miPromesa
  .then((resultado) => {console.log(resultado)})/*  
  .then()
  .then() 
  .catch(error => console.error(error))
  .finally(resultado => console.log('finally!'));*/

  // console.log
  // console.error
  // console.dir
  // console.table

async function revisarCondicion() {
  try{
    const resultado = await new Promise((res, rej) => {
      const condicion = false;
      if(condicion) {
        res('Esta promesa se resolvió de manera satisfactoria');
      } else {
        rej('Esta promesa fue rechazada (algun error)');
      }
      })
    console.log(resultado);
  } catch(error) {
    console.log(error)
  }
}

revisarCondicion();
