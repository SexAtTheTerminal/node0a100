const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer")
require('dotenv').config()
const Busquedas = require("./models/busqueda")


console.clear();

const main = async () => {
    const busquedas = new Busquedas()
    let opt = 0;
    do {
        // llamada a la funcion que pinta el menu
        opt = await inquirerMenu();
        switch (opt.opcion) {
            case '1':
                //mostrar mensaje
                const lugar = await leerInput('Ciudad:')
                //Buscar lugares
                const lugares = await busquedas.ciudad(lugar)
                //Seleccionar el lugar
                const id = await listarLugares(lugares)
                if (id === '0') continue //cancela
                const lugarSel = lugares.find(l => l.id === id)
                //Guardar en arreglo
                busquedas.agregarHistorial(lugarSel.nombre)

                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)

                //Mostrar resultados
                console.log('\nInformacion de la Ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Maxima: ', clima.max);
                console.log('Minima: ', clima.min);
                console.log('Estado del clima: ', clima.desc.green)
                break;

            case '2':
                busquedas.leerDB();
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}. `.green
                    console.log(`${idx}${lugar}`)
                })
                break;
            case '0':
                break;

        }
        await pausa();

    } while (opt.opcion !== '0');

}
main();