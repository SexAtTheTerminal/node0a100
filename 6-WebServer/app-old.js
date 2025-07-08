console.log('Hola mundo')

const http = require('http')

http.createServer((req, res) => {
    //req: request es la peticion al servidor
    //res: response es la respuesta del servidor
    console.log(req)
    // res.setHeader(201, { 'Content-Type', 'application/json'}) //Recurso no encontrado
    // res.setHeader('Content-Disposition', 'attachment; filename = lista.csv')//Sirve para hacer ETL
    // res.writeHead(200, { 'Content-Type': 'application/csv' })
    // res.write('id,nombre\n');
    // res.write('1,Fernando\n');
    // res.write('2,Mariza\n');
    // res.write('3,Gladys\n');
    res.write('Hola mundo')
    res.end();

})

    .listen(8080)
console.log('Escuchando el puerto', 8080)