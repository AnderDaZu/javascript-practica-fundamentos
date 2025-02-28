console.log(`Hola en este archivo se ejecutará el ejercicio 12...`);

const numeroPrimo = (numero) => {
    if (typeof numero !== 'number') return console.warn('Ingresa un número valido');
    if(numero <= 1) return console.error('Ingresa un número positivo mayor a 1');

    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    return esPrimo
        ? console.log(`El número ${numero} es primo`)
        : console.log(`El número ${numero} no es primo`);
}

numeroPrimo({}); // Ingresa un número valido
numeroPrimo(); // Ingresa un número valido
numeroPrimo(-1); // Ingresa un número positivo mayor a 1
numeroPrimo(0); // Ingresa un número positivo mayor a 1
numeroPrimo(1); // Ingresa un número positivo mayor a 1
numeroPrimo(2); // El número 2 es primo
numeroPrimo(3); // El número 3 es primo
numeroPrimo(4); // El número 4 no es primo
numeroPrimo(5); // El número 5 es primo
numeroPrimo(6); // El número 6 no es primo
numeroPrimo(7); // El número 7 es primo
numeroPrimo(8); // El número 8 no es primo
numeroPrimo(9); // El número 9 no es primo
numeroPrimo(10); // El número 10 no es primo