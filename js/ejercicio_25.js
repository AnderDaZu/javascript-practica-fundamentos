console.log(`Hola en este archivo se ejecutará el ejercicio 25...`);

const ordenarNumeros = (numeros = undefined) => {
    if (numeros === undefined) return console.warn('Ingrese una colección de numeros');
    if (!(numeros instanceof Array)) return console.error('Ingrese una colección de numeros valida');
    if (numeros.length < 2) return console.warn('Debes ingresar al menos 2 numeros en la colección');

    for (const el of numeros) {
        if (typeof el !== 'number') return console.error(`ingreso "${el}", y debes ingresar un numero`);
    }

    return console.info({
        numeros,
        // ascOpt1: [...numeros.sort((a, b) => a - b)], // altera el array inicial
        // descOpt1: [...numeros.sort((a, b) => b - a)], // altera el array inicial
        ascOpt2: numeros.map(el => el).sort(), // ideal ya que .map crea otro array a partir del indicado
        descOpt2: numeros.map(el => el).sort().reverse(), // ideal ya que .map crea otro array a partir del indicado
    });
}

ordenarNumeros();
ordenarNumeros({});
ordenarNumeros([]);
ordenarNumeros([1]);
ordenarNumeros([1, 2, 'a']);
ordenarNumeros([1, 2, 3]);
ordenarNumeros([1, 2, 10, 3, 6, 35, 12]);
ordenarNumeros([1, 2, -10, 3, 6, -35, 12]);