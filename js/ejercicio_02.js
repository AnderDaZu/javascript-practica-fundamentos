console.log(`Hola en este archivo se ejecutará el ejercicio 2...`);

// const cadena = {};
const cadena = 'texto de prueba';

const recortarCadenaRango = (cadena, inicio = 0, fin = 0) => {
    // si fin es menor que inicio, se intercambian los valores para que substring funcione correctamente
    return cadena.substring(inicio, fin);
}
const recortarCadena = (cadena, fin) => {
    return cadena.slice(0, fin || 1);
}

if (typeof cadena === 'string' && cadena.trim().length !== 0) {
    console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
    console.log(`Opt1: la cadena recortada es: "${recortarCadenaRango(cadena, 2, 0)}".`);
    console.log(`Opt2: la cadena recortada es: "${recortarCadena(cadena)}".`);

} else if (typeof cadena === 'string' && cadena.trim().length === 0) {
    console.log(`Por favor, ingrese una cadena de texto.`);

} else {
    console.log(`No ingresaste una cadena de texto, ingresaste un ${typeof cadena}.`);
}