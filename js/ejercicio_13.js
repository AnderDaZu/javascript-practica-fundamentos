console.log(`Hola en este archivo se ejecutará el ejercicio 13...`);

const parImpar = numero => 
    (typeof numero !== 'number' || numero <= 0)
        ? (typeof numero !== 'number')
            ? console.warn('Ingresa un número valido')
            : console.error('Ingresa un número positivo mayor a 0')
        : (numero % 2 === 0)
            ? console.info('El número "%d" es par', numero)
            : console.info('El número "%d" es impar', numero);

parImpar({}); // Ingresa un número valido
parImpar(); // Ingresa un número valido
parImpar(-1); // Ingresa un número positivo mayor a 0
parImpar(0); // Ingresa un número positivo mayor a 0
parImpar(1); // El número "1" es impar
parImpar(2); // El número "2" es par
parImpar(3); // El número "3" es impar
parImpar(4); // El número "4" es par
parImpar(5); // El número "5" es impar