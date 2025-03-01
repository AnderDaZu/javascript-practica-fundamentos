console.log(`Hola en este archivo se ejecutará el ejercicio 18...`);

const contarLetras = (texto = '') => {
    if (!texto) return console.warn('No ingresaste un texto');
    if (typeof texto !== 'string') return console.error('Ingrese un texto valido');
    
    texto = texto.toLowerCase();
    let vocales = 0; 
    let letras = 0;

    for (const letra of texto) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) letras++;
    }

    console.log('texto "%s", cantidad vocales: %d, cantidad letras: %d', texto, vocales, letras);
}

contarLetras();
contarLetras({});
contarLetras('');
contarLetras('Hola mundo');
contarLetras('Hola mundo'.repeat(10));