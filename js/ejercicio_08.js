console.log(`Hola en este archivo se ejecutará el ejercicio 8...`);

const eliminarPalabra = (texto, palabra) => {
    if (!texto || typeof texto !== 'string') return console.warn('Ingresa un texto valido');
    if (!palabra || typeof palabra !== 'string') return console.warn('Ingresa una palabra valida');
    if (!texto.includes(palabra)) return console.warn('La palabra/patrón no existe en el texto');

    const expReg = new RegExp(palabra, 'ig');
    return console.log(texto.replace(expReg, ''));
}

eliminarPalabra({}, 1); // Ingresa un texto valido
eliminarPalabra('Hola mundo', 1); // Ingresa una palabra valida
eliminarPalabra('Hola mundo', 'world'); // La palabra/patrón no existe en el texto 
eliminarPalabra('Hola mundo', 'mundo'); // Hola
eliminarPalabra('Hola mundo mundo', 'mundo'); // Hola
eliminarPalabra('xyz1 xyz2 xyz3 xyz4', 'xyz'); // 1 2 3 4
