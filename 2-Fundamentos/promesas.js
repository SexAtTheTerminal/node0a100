//promesas
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }

];
// creamos otro arreglo de salarios de solo dos elementos.
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

// const getEmpleado = (id, callback) => {
//     const empleado = empleados.find(e => e.id === id)
//     if (empleado) {
//         callback(null, empleado.nombre);
//     }
//     else {
//         callback(`El empleado con id ${id} no existe`);
//     }

// }

// const getEmpleado = (id) => {
//     const promesa = new Promise((resolve, reject) => {
//         const empleado = empleados.find(e => e.id === id)?.nombre
//         if (empleado) {
//             resolve(empleado)
//         }
//         else {
//             reject(`No existe Empleado co Id ${id}`)
//         }
//     });
//     return promesa;

// }
const id = 2

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err =>console.log(err))


// const getEmpleado = (id) => {
//     return new Promise((resolve, reject) => {
//         const empleado = empleados.find(e => e.id === id)?.nombre
//         if (empleado) {
//             resolve(empleado)
//         }
//         else {
//             reject(`No existe Empleado co Id ${id}`)
//         }
//     })
// }

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe Empleado co Id ${id}`);

    });

}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe Empleado con Salario Id ${id}`);

    });

}


getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))
    
getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))