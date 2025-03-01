console.log(`Hola en este archivo se ejecutará el ejercicio 23...`);

const numeroMayorMenor = (arrayNumeros = undefined) => {
    if (!arrayNumeros) return console.warn('Ingrese un array con numeros');
    if (!(arrayNumeros instanceof Array)) return console.error('El %s ingresado no es un array', typeof arrayNumeros);
    if (arrayNumeros.length <= 1) return console.error('Ingrese el array con al menos 2 numeros');

    let mayor, menor;

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (typeof arrayNumeros[i] !== 'number') return console.error('EL valor %s ingresado no es un numero', arrayNumeros[i]);
        
        if (i === 0) menor = arrayNumeros[i];
        
        if (i > 0) {
            if (arrayNumeros[i] < menor) {
                if (!mayor) mayor = menor;
                menor = arrayNumeros[i]
            }
            if (arrayNumeros[i] > menor) {
                if (!mayor) mayor = arrayNumeros[i];
            }

            if (mayor && arrayNumeros[i] > mayor) mayor = arrayNumeros[i];
        }
    }

    return console.info(`1. Numeros: ${arrayNumeros} \n\n\tOp1 Numero mayor: ${mayor} \n\tOp1 Numero menor: ${menor} \n\n\tOp2 Numero mayor: ${Math.max(...arrayNumeros)} \n\tOp2 Numero menor: ${Math.min(...arrayNumeros)}`);
}

numeroMayorMenor();
numeroMayorMenor({});
numeroMayorMenor([]);
numeroMayorMenor([1]);
numeroMayorMenor([1, 2, 'a']);
numeroMayorMenor([1, 7, 3, -1, 6, 2, 8, -5, 10, 8]);
numeroMayorMenor([100, 70, -30, -1, 600, 2000, 800, -50, 10, -8]);