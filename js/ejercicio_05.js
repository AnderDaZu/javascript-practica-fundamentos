console.log(`Hola en este archivo se ejecutará el ejercicio 5...`);

const invertirTexto = (texto) => {
    if (!texto) return console.warn('Ingresa un texto');

    if (typeof texto !== 'string') return console.error('Ingresa un texto, ingresaste %s', typeof texto);
    
    let nuevoTextoAlt = texto.split('').reverse().join(''); // opción 1

    let nuevoTexto = ''; // opción 2
    for (let i = texto.length-1; i >= 0; i--) {
        nuevoTexto += texto[i];
    }

    console.log('texto "%s" invertido: %s', texto, nuevoTexto);
    console.log('texto "%s" invertido: %s', texto, nuevoTextoAlt);
}

invertirTexto('Hola mundo...');
invertirTexto('');
invertirTexto({});
invertirTexto();