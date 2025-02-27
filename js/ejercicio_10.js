console.log(`Hola en este archivo se ejecutará el ejercicio 9...`);

const evaluarNumero = (numero) => {
    if (!numero || typeof numero !== 'number') return console.warn('Ingresa un número valido');
    
    numero = numero.toString();
    let nuevoNumero = numero.split('').reverse().join('');

    (numero === nuevoNumero)
        ? console.log(`Sí es un capicúa ${numero} - ${nuevoNumero}`)
        : console.log(`No es un capicúa ${numero} - ${nuevoNumero}`);
}

evaluarNumero({}); // Ingresa un número valido
evaluarNumero(); // Ingresa un número valido
evaluarNumero(123); // No es un palíndromo 123 - 321
evaluarNumero(121); // Sí es un palíndromo 121 - 121
evaluarNumero(12321); // Sí es un palíndromo 12321 - 12321
evaluarNumero(123456); // No es un palíndromo 123456 - 654321
evaluarNumero(2002); // Sí es un palíndromo 2002 - 2002
evaluarNumero(2000); // 
evaluarNumero(121.121); // Sí es un palíndromo 121.121 - 121.121