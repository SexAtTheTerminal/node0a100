// hacer la tabla del 5 en javascrconst { option } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
const { option } = require('yargs');

console.clear();

// const [, , arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
// const [, j] = arg3.split('='); //separa el string por el caracter =

console.log(j);

// crearArchivo(j)
//     .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
//     .catch(err => console.log(err));

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));
