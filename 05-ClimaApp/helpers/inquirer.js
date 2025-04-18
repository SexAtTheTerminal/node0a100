const inquirer = require('inquirer');
require('colors');
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green}Buscar Ciudad`
            },
            {
                value: '2',
                name: `${'2.'.green}Historial`
            },
            {
                value: '0',
                name: `${'0.'.green}Salir`
            }
        ]
    }
];

const pausas = [
    {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'Enter'.blue} para continuar \n`
    }
];

const pausa = async () => {
    console.log('\n');
    const { enter } = await inquirer.prompt(pausas);
    return enter;
}

const inquirerMenu = async () => {
    console.clear();
    console.log('======================'.green);
    console.log(' Seleccione una opcion'.green);
    console.log('======================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,

            validate(value) {
                if (value.length === 0) {
                    return 'Por Favor ingrese un valor'
                }

                return true;
            }

        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async (lugares = []) => {
    const choices = lugares.map((lugar, i) => {
        const idx = `${i + 1}`.green
        return {
            value: lugar.id,
            name: `${idx}. ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione el lugar:',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas)
    return id;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question)
    return ok;
}

const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta)

    tareas.forEach(tarea => {
        if (ids.includes(tarea.id)) {
            tarea.completadoEn = tarea.completadoEn || new Date().toISOString
        } else {
            tarea.completadoEn = null
        }
    })

    return ids
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}

