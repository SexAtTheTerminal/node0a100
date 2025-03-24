// hacer la tabla del 5 en javascrip
const { crearArchivo } = require('./helper/multiplicar')
console.clear();

const [, , arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);

//const j = 6;

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err));
 */
