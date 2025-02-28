console.log(`Hola en este archivo se ejecutará el ejercicio 14...`);

const convertirGrados = (grados, unidad) => {
    parseInt(grados);
    if (typeof grados !== 'number') return console.warn('Ingresa un valor valido para grados');
    if (typeof unidad !== 'string') return console.warn('Ingresa un valor valido para unidad');

    // if (unidad !== 'c' && unidad !== 'f') return console.error('Ingresa un valor valido para unidad');
    if (unidad.length !== 1 || !/(c|f)/.test(unidad)) return console.error('Ingresa un valor valido para unidad');

    return (unidad === 'c')
        ? console.log('%d° Farenheit a Celcius: %d', grados, Math.round((grados - 32) * 5/9))
        : console.log('%d° Celcius a Ferenheit: %d', grados, Math.round((grados * (9/5)) + 32));
}

convertirGrados('1a', 'c');
convertirGrados('1', 'c');
convertirGrados(1, 'c');
convertirGrados(0, 'c');
convertirGrados(10, 'c');
convertirGrados(0, 'f');
convertirGrados(10, 'f');
