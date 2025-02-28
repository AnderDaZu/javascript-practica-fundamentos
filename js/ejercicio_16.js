console.log(`Hola en este archivo se ejecutará el ejercicio 16...`);

const calcularTotal = (monto, descuento) => 
    (!monto || typeof monto !== 'number')
        ? console.warn('Ingrese un monto valido')
        : (!descuento || typeof descuento !== 'number' || Math.sign(descuento) === -1) 
            ? console.warn('Ingrese un descuento valido')
            : console.log(`Monto ${monto} con descuento de ${descuento}% = ${monto - (monto*(descuento/100))}`);

calcularTotal({}, 10);
calcularTotal('100', 10);
calcularTotal(100, -10);
calcularTotal(100, '10');
calcularTotal(100, 10);
calcularTotal(120000, 19);
