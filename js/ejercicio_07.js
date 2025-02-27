console.log(`Hola en este archivo se ejecutará el ejercicio 7...`);

const texto = 'hola aloh';
console.log(texto.length);

const funcionPalindromo = (texto) => {
    if (!texto || typeof texto !== 'string') return console.warn('Ingresa un texto valido');

    if (texto.length % 2 === 0) return console.info(false, texto);
    
    const finParteA = Math.ceil(texto.length / 2); // 5 -> 2.5 -> 2
    const inicioParteB = Math.floor(texto.length / 2); // 5 -> 2.5 -> 3
    
    const parteA = texto.toLocaleLowerCase().slice(0, finParteA);
    const parteB = texto.toLocaleLowerCase().slice(inicioParteB);
    let nuevoTexto = '';

    for (let i = parteB.length - 1; i >= 0; i--) {
        nuevoTexto += parteB[i];
    }

    if (parteA === nuevoTexto) return console.log(true, texto, parteA, parteB);
    
    return console.log(false, texto);
}

const funcionPalindromoAlt = (texto) => {
    if (!texto || typeof texto !== 'string') return console.warn('Ingresa un texto valido');

    const nuevoTexto = texto.toLocaleLowerCase().split('').reverse().join('');

    return (nuevoTexto === texto.toLocaleLowerCase())
        ? console.log(true, texto.toLocaleLowerCase(), nuevoTexto)
        : console.log(false, texto.toLocaleLowerCase(), nuevoTexto);
}

funcionPalindromo('hola'); // false, hola
funcionPalindromo('hola aloh'); // true, hola aloh, hola, aloh
funcionPalindromo('hola mundo'); // false, hola mundo
funcionPalindromo('hola mundo aloh'); // false, hola mundo aloh
funcionPalindromo('Salas'); // true, salas, sa, as

console.log('=================================================');
funcionPalindromoAlt('hola');
funcionPalindromoAlt('hola aloh'); // true, hola aloh, hola, aloh
funcionPalindromoAlt('hola mundo'); // false, hola mundo
funcionPalindromoAlt('hola mundo aloh'); // false, hola mundo aloh
funcionPalindromoAlt('Salas'); // true, salas, sa, as