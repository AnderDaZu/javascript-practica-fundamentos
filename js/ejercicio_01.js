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