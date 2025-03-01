console.log(`Hola en este archivo se ejecutará el ejercicio 19...`);

const validarNombre = (nombre = '') => {
    if (!nombre) return console.warn('No ingresaste un nombre');
    if (typeof nombre !== 'string') return console.error('EL valor %s ingresado no es una cadena de texto', typeof nombre);

    const expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚu\s]+$/g.test(nombre);

    return (expReg)
        ? console.info('%s es un nombre valido', nombre)
        : console.warn(`${nombre} no es un nombre valido`);
}

validarNombre();
validarNombre('');
validarNombre({});
validarNombre('Hola mundo123 ');
validarNombre('Brayan Gonzales, 18');
validarNombre('Anderson Dazu');