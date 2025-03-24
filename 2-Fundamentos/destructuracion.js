//DEFINIMOS UN OBJETO

const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// console.log(deadpool.getNombre())

function imprimeHeroe({apellido,nombre,poder,edad =20}) {
    console.log(nombre,apellido,poder,edad)
}

// function imprimeHeroe(heroe) {
//     const { apellido, nombre, poder, edad = 20 } = heroe   
//     console.log(nombre, apellido, poder, edad)
// }

imprimeHeroe(deadpool)