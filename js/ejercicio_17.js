console.log(`Hola en este archivo se ejecutará el ejercicio 17...`);

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste fecha');
    if (!(fecha instanceof Date)) return console.error('El valor que ingresaste, no es una fecha valida');

    const difTime = new Date().getTime() - fecha.getTime();
    const anioEnMS = 1000 * 60 * 60 * 24 * 365;
    let anios = (difTime / anioEnMS);
    anios = Math.sign(anios) === -1 
        ? Math.ceil(anios) 
        : Math.floor(anios)

    return (anios > 0)
        ? console.log(`Han pasado ${anios} desde la fecha que ingresaste ${fecha.getFullYear()}`)
        : (anios === 0)
            ? console.log(`No ha pasado 1 año desde la fecha que ingresaste ${fecha.getFullYear()}`)
            : console.log(`Aún falta ${Math.abs(anios)} para llegar a la fecha que ingresaste ${fecha.getFullYear()}`);
}

calcularAnios(new Date(1996,9,20));
calcularAnios(new Date(2025,9,20));
calcularAnios(new Date(2028,9,20));
