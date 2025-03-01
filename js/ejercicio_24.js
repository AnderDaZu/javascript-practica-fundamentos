console.log(`Hola en este archivo se ejecutará el ejercicio 24...`);

const objetoParesImpares = (numeros = undefined) => {
    if (numeros === undefined) return console.warn('Ingrese una colección de numeros');
    if (!(numeros instanceof Array)) return console.error('El %s ingresado no es una colección de numeros', typeof numeros);
    if (numeros.length < 1) return console.warn('Ingresa al menos 1 numero en la colección');

    const paresImpares = {
        pares: [],
        impares: []
    }

    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== 'number') return console.error('El valor "%s" ingresado no es un numero', numeros[i]);

        if (numeros[i] % 2 === 0) {
            paresImpares.pares.push(numeros[i]);
        } else {
            paresImpares.impares.push(numeros[i]);
        }
    }

    return console.info('Numeros ingresados\n', numeros, '\nObjeto con numeros pares e impares\n', paresImpares, '\n--------------------------------');
}

const separarParesImpares = (numeros = undefined) => {
    if (numeros === undefined) return console.warn('Ingrese una colección de numeros');
    if (!(numeros instanceof Array)) return console.error('El %s ingresado no es una colección de numeros', typeof numeros);
    if (numeros.length < 1) return console.warn('Ingresa al menos 1 numero en la colección');

    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== 'number') return console.error('El valor "%s" ingresado no es un numero', numeros[i]);
    }
    
    return console.info({
        pares: numeros.filter(el => (el % 2 === 0)),
        impares: numeros.filter(el => (el % 2 !== 0)),
    })
}

objetoParesImpares();
objetoParesImpares({});
objetoParesImpares([]);
objetoParesImpares([1]);
objetoParesImpares([1, 2, 'a']);
objetoParesImpares([1, 2, 3]);
objetoParesImpares([1, 2, 10, 3, 6, 35, 12]);
objetoParesImpares([1, 2, -10, 3, 6, -35, 12]);

separarParesImpares();
separarParesImpares({});
separarParesImpares([]);
separarParesImpares([1]);
separarParesImpares([1, 2, 'a']);
separarParesImpares([1, 2, 3]);
separarParesImpares([1, 2, 10, 3, 6, 35, 12]);
separarParesImpares([1, 2, -10, 3, 6, -35, 12]);