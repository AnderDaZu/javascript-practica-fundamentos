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