const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un Numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false

    })

    .argv;
module.exports = argv;
