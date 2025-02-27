console.log(`Hola en este archivo se ejecutará el ejercicio 4...`);

// const texto = {};
// const texto = '';
const texto = 'texto de prueba';

const duplicarTexto = (texto, cantidadF) => {
    let cantidad = cantidadF || 1;
    let textoDuplicado = '';

    for (let index = 0; index < cantidad; index++) 
    {    
        if (index === 0) {
            textoDuplicado = texto;
        
        }else {
            textoDuplicado += ', ' + texto;
        }
    }
    return textoDuplicado;
}

if (typeof texto === 'string' && texto.trim().length !== 0) {
    console.log(`El texto duplicado 2 veces:`, duplicarTexto(texto, 2));

} else if (typeof texto === 'string' && texto.trim().length === 0) {
    console.log(`Por favor, ingrese una cadena de texto.`);

} else {
    console.log(`No ingresaste una cadena de texto, ingresaste un ${typeof texto}.`);
}

console.clear();

const repetirTexto = (texto, cantVeces) => 
    (!texto || typeof texto !== 'string')
        ? (typeof texto !== 'string')
            ? console.error('Ingrese un texto valido, ingresaste un %s', typeof texto)
            : console.warn('Ingrese un texto')
        : (typeof cantVeces !== 'number' || cantVeces < 2)
            ? (typeof cantVeces !== 'number')
                ? console.error('Ingrese una cantidad valida, ingresaste un %s', typeof cantVeces)
                : console.error('Ingrese una cantidad mayor a 1')
            : console.info('Texto "%s" duplicado %d veces: %s', texto, cantVeces, texto.repeat(cantVeces));

repetirTexto();
repetirTexto('', 2)
repetirTexto('Hola');
repetirTexto({}, 1);
repetirTexto('Hola', -1);
repetirTexto('Hola', {});
repetirTexto('Hola', 10);