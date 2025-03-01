console.log(`Hola en este archivo se ejecutará el ejercicio 21...`);

const fusion = (cadena = '', patron = undefined) => {
    if (!cadena) return console.warn('No ingresaste una cadena');
    if (typeof cadena !== 'string') return console.error(`El valor ${typeof cadena} no es una cadena de texto`);

    if (patron === undefined) return console.warn('No ingresaste un patrón');
    if (!(patron instanceof RegExp)) return console.error(`El valor ${patron} no es una expresión regular`);

    const expReg = patron.test(cadena);

    return expReg
        ? console.info(`${cadena} cumple con el patro ingresado`)
        : console.error(`${cadena} no cumple con el patrón ingresado`);
}

fusion('Luis Garzon, 18', /^[A-Za-zÑñÁáÉéÍíÓóÚu\s]+$/g);
fusion('Anderson Dazu', /^[A-Za-zÑñÁáÉéÍíÓóÚu\s]+$/g);
fusion('email@dominio..com', /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
fusion('usuario123@gmail.com', /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);