// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 4;
let salida = '';
for (i = 1; i <= 10; i++) {
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.

}

console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile(`tabla-del-${j}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla del ${j} Creado`);

})

