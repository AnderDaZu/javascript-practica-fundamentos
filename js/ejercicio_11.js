console.log(`Hola en este archivo se ejecutará el ejercicio 9...`);

const factorial = (numero) => {
    if (typeof numero !== 'number') return console.warn('Ingresa un número valido');
    if (Math.sign(numero) === -1) return console.error('Ingresa un número positivo');
    if (numero === 0) return console.error('No puedes ingresar el número 0');

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

factorial({}); // Ingresa un número valido
factorial(); // Ingresa un número valido
factorial(-1); // Ingresa un número positivo
factorial(0); // El factorial de 0 es 1
factorial(1); // El factorial de 1 es 1
factorial(2); // El factorial de 2 es 2
factorial(3); // El factorial de 3 es 6
factorial(4); // El factorial de 4 es 24
factorial(5); // El factorial de 5 es 120