console.log(`Hola en este archivo se ejecutará el ejercicio 1...`);

const contarCaracteres = (cadena) => {
    return cadena.trim().length;
}

// const texto = prompt('Ingrese un texto: ');
// const texto = false;
// const texto = 'Hola mundo!';
// const texto = '   ';

if ( typeof texto === 'string' && texto.trim() !== '') {
    console.log(`El texto ingresado "${texto.trim()}" tiene ${contarCaracteres(texto)} caracteres.`);

} else if (typeof texto === 'string' && texto.trim() === '') {
    console.log(`Por favor, ingrese un texto.`);

} else {
    console.log(`No ingresaste un texto, ingresaste un ${typeof texto}.`);
}

console.clear();

const contarLongitudTexto = (texto) => 
    (!texto || typeof texto !== 'string')
        ? (typeof texto !== 'string')
            ? console.warn('No ingresaste texto, ingresaste un %s', typeof texto)
            : console.warn('No ingresaste un texto')
        : console.log('La "longitud" de %s es de: %d', texto, texto.length);

contarLongitudTexto();
contarLongitudTexto({});
contarLongitudTexto('');
contarLongitudTexto(10);
contarLongitudTexto('Hola mundo');