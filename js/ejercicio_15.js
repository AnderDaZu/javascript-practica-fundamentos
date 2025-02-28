console.log(`Hola en este archivo se ejecutará el ejercicio 15...`);

const convertirNumeros = (binario, decimal) => {

    // if (typeof binario !== 'number') return console.warn('Ingresa valor tipo numero para binario');
    if (/[2-9a-zA-Z]/g.test(binario)) return console.warn('Ingrese un numero binario valido');
    
    if (!decimal) return console.warn('Ingresa valor para decimal');
    if (typeof decimal !== 'number') return console.warn('Ingresa valor tipo numero para decimal');
    
    if (Math.sign(decimal) === -1 || Math.sign(binario) === -1) return console.warn('Ingrese valor positivo para binario o decimal');

    let convBinarioDecimal = 0;
    const binarioString = binario.toString().split('');

    binarioString.forEach((e, i) => {
        if (e === '1') {
            convBinarioDecimal += Math.pow(2, binarioString.length - (i + 1));
        }
    });

    console.log(`Numero ${binario} binario = ${convBinarioDecimal} decimal`);
}

const convertir = (numero, base) => {
    if (!base || typeof base !== 'number' || !/(2|10)/g.test(base)) return console.warn('Ingrese un valor de base valido');
    if (base === 2 && /[2-9a-zA-Z]/g.test(numero)) return console.warn('Ingrese un numero binario valido');
    if (base === 10 && (!numero || typeof numero !== 'number')) return console.warn('Ingresa valor tipo numero para numero');

    if (base === 2) {
        console.log(`${numero} base 2 = ${parseInt(numero, base)} base 10`);

    } else {
        console.log(`${numero} base 10 = ${numero.toString(2)} base 2`);
    }
}

convertirNumeros(10);
convertirNumeros(11);
convertirNumeros(12);
convertirNumeros('ab');
convertirNumeros('a12');
convertirNumeros(1010, 8);
console.log(`---------------------------------------`);
convertir(10);
convertir(11, 4);
convertir(12);
convertir('ab');
convertir('a12');
convertir(1010, 2);
convertir(100, 2);
convertir(120, 10);
convertir(10, 10);