const fs = require('fs')
const axios = require('axios')
const { attachment } = require('express/lib/response')

class Busquedas {
    historial = []
    dbPath = './db/database.json'
    constructor() {
        //To do leer la BD si existe
    }

    //Obtener Historial capitalizado
    get historialCapitalizado() {
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ')
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1))
            return palabras.join(' ')
        })
    }

    //Guardar DB
    guardarDB() {
        //To do: guardar en la base de datos
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    //Leer DB
    leerDB() {
        //Debe existir la DB
        if (!fs.existsSync(this.dbPath)) {
            return null
        }
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' })
        const data = JSON.parse(info)
        this.historial = data.historial
    }
    //Parametros de la lista de lugares
    get paramMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    //Persistencia en las busquedas
    agregarHistorial(lugar = "") {
        //To do: prevenir duplicados
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return
        }

        this.historial = this.historial.splice(0, 5)//Esto corta el arreglo a solo 6 elementos
        this.historial.unshift(lugar.toLocaleLowerCase())//inserta en la posicion 0 / inicio

        //grabar en BD
        this.guardarDB()
    }

    //Parametros de OpenWeather
    get paramOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    //Metodo para recuperar el clima de un lugar
    async climaLugar(lat, lon) {
        try {
            //instancia de axios
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: { lat, lon, ...this.paramOpenWeather }
            });
            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }

    async ciudad(lugar = "") {
        //To do hacer peticion http
        try {
            //Peticion http
            const instance = axios.create({
                baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
                params: this.paramMapBox
                // params: {
                //     access_token: 'pk.eyJ1IjoiZ2Nnc2F0MzAiLCJhIjoiY205MGNodjZmMG14YTJrb21vMG5ybDdwYSJ9.piuf9t_jx5RJqAFFCXu2jA',
                //     limit: 5,
                //     language: 'es'
                // }
            })
            const resp = await instance.get(`${encodeURIComponent(lugar)}.json`);
            console.log(resp.data);

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
        } catch (error) {
            console.log(error);
            return []
        }
    }
}

module.exports = Busquedas