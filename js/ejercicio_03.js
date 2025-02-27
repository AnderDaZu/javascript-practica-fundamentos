console.log(`Hola en este archivo se ejecutará el ejercicio 3...`);

// const texto = {};
// const texto = '';
const texto = 'texto de prueba';

const separarTexto = (texto, separador) => {
    return texto.split(separador);
}

if (typeof texto === 'string' && texto.trim().length !== 0) {
    console.log(`El texto "${texto}" tiene ${texto.length} caracteres.`);
    console.log(`El texto separado por espacios es:`, separarTexto(texto, ' ')); // ['texto', 'de', 'prueba']
    console.log(`El texto separado por letras es:`, separarTexto(texto, '')); // ['t', 'e', 'x', 't', 'o', ' ', 'd', 'e', ' ', 'p', 'r', 'u', 'e', 'b', 'a']

} else if (typeof texto === 'string' && texto.trim().length === 0) {
    console.log(`Por favor, ingrese una cadena de texto.`);

} else {
    console.log(`No ingresaste una cadena de texto, ingresaste un ${typeof texto}.`);
}

const dividirTexto = (texto, separador) =>
    (!texto || typeof texto !== 'string')
        ? (typeof texto !== 'string')
            ? console.warn('No ingresaste texto, ingresaste un %s', typeof texto)
            : console.warn('No ingresaste un texto')
        : (typeof separador !== 'string' || !texto.includes(separador))
            ? (typeof separador !== 'string')
                ? console.warn('Ingrese un separador de tipo texto')
                : console.warn('Ingrese un separador disponible')
            : console.info('Texto "%s" separado por "%s": ', texto, separador, texto.split(separador));

console.clear();

dividirTexto();
dividirTexto('Hola');
dividirTexto({}, 1);
dividirTexto('');
dividirTexto('Hola', {});
dividirTexto('Hola', 5);
dividirTexto('Hola mundo', 'z');
dividirTexto('Hola mundo', ' ');