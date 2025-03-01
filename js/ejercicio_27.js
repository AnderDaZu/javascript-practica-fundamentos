console.log(`Hola en este archivo se ejecutará el ejercicio 27...`);

const calcularPromedio = (numeros = undefined) => {
    if (numeros === undefined) return console.warn('Debes ingresar una colección de numeros');
    if (!(numeros instanceof Array)) return console.error(`Ingreso un ${typeof numeros}, debes ingresar una colección de numeros`);
    if (numeros.length === 0) return console.warn('Debes ingresar numeros en la colección');

    for (const element of numeros) {
        if (typeof element !== 'number') return console.error(`Ingresaste un ${typeof element} (${element}), debes ingresar un numero`);
    }

    let total = 0;

    for (const element of numeros) {
        total += element;
    }

    return console.info({
        numeros,
        prom1: (total/numeros.length).toFixed(2),
        prom2: numeros.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length-1) {
                return (total / arr.length);
            } else {
                return total;
            }
        }),
        prom3: numeros.reduce((acumulador, num) => acumulador + num, 0)/numeros.length,
    })
    // return console.info(`El promedio de sumar: ${numeros} = ${(total/numeros.length).toFixed(2)}`);
}

calcularPromedio();
calcularPromedio({});
calcularPromedio([]);
calcularPromedio([1]);
calcularPromedio([1, 2, 'a']);
calcularPromedio([1, 2, 3]);
calcularPromedio([1, 2, 10, 3, 6, 35, 12]);
calcularPromedio([1, 2, -10, 3, 6, -35, 12]);

/*
El método .reduce() en JavaScript recorre un array y reduce sus elementos a un único valor, aplicando una función acumuladora.

📌 Ejemplo rápido: Sumar todos los números de un array

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 15

🔹 Usos comunes:

Sumar valores (reduce como calculadora).
Convertir un array en un objeto o estructura diferente.
Contar elementos repetidos en un array.

🚀 Básicamente, reduce un array a un solo resultado!
*/