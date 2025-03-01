console.log(`Hola en este archivo se ejecutará el ejercicio 22...`);

const numerosAlCuadrado = (arrayNumeros = undefined) => {
    if (!arrayNumeros) return console.warn('Ingrese un array con numeros M1')
    if (!(arrayNumeros instanceof Array)) return console.error(`El ${typeof arrayNumeros} ingresado no es un array de numeros`);
    if (arrayNumeros.length === 0) return console.warn('Ingrese un array con numeros M2');

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (typeof arrayNumeros[i] !==  'number') return console.error(`El valor ${arrayNumeros[i]} del array no es numero`);
    }

    // opción 1
    let nuevoArray = [];
    arrayNumeros.forEach(el => {
        nuevoArray.push(Math.pow(el, 2));
    });

    // opción 2
    const nuevoArrayAlt = arrayNumeros.map(el => el * el);

    return console.info('1. Array numeros ingresado\n\t', arrayNumeros, '\n\tArray numeros al cuadrado\n\t', nuevoArray,
        '\n2. Array numeros ingresado\n\t', arrayNumeros, '\n\tArray numeros al cuadrado\n\t', nuevoArrayAlt
    );
}

numerosAlCuadrado();
numerosAlCuadrado([]);
numerosAlCuadrado({});
numerosAlCuadrado([1, 2, 'a']);
numerosAlCuadrado([1, 2, 3]);
numerosAlCuadrado([7, 8, true]);
numerosAlCuadrado([4, 5, 6]);
