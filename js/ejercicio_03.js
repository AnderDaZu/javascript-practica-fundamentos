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