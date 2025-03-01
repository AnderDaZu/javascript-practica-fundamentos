console.log(`Hola en este archivo se ejecutará el ejercicio 26...`);

const eliminarDuplicados = (elementos = undefined) => {
    if (elementos === undefined) return console.warn('Debes ingresar una colección de elementos');
    if (!(elementos instanceof Array)) return console.error(`Ingresaste un "${typeof elementos}", debes ingresar una colección (array)`);
    if (elementos.length < 2) return console.warn('Debes ingresar al menos 2 elementos en la colección');

    const nuevosElementos = [];
    
    for (const element of elementos) {
        if (!nuevosElementos.includes(element)) nuevosElementos.push(element);
    }

    console.log(new Set([1, 2, 2, 3, 4, 4, 5])); // prototipo = Set | Set(5) {1, 2, 3, 4, 5}
    console.log([...new Set(elementos)]); // prototipo = Array | (5) [1, 2, 3, 'a', '1']

    return console.info({
        elementos,
        nuevosElementos,
        nuevosElementosAlt1: elementos.filter((value, index, self) => (self.indexOf(value) === index)),
        nuevosElementosAlt2: [...new Set(elementos)],
    })
}

eliminarDuplicados();
eliminarDuplicados({});
eliminarDuplicados([]);
eliminarDuplicados([1]);
eliminarDuplicados([1, 2, 3, 3, 1, 'a', '1', 'a', 2]);

/*
new Set() -> en JavaScript se usa para crear un conjunto (Set), que es una 
estructura de datos que almacena valores únicos y no permite duplicados.

const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(numeros); // Set { 1, 2, 3, 4, 5 } (elimina duplicados)
*/