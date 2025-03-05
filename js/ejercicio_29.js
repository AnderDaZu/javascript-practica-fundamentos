console.log(`Hola en este archivo se ejecutará el ejercicio 29...`);

/*
    1️⃣ Filtrar y agrupar productos por categoría (Objetos y Arreglos)
    Caso práctico:
        En una tienda en línea, los productos tienen una categoría. Se necesita una función que agrupe los 
        productos por categoría.

    Instrucciones:
        Crea una función agruparPorCategoria(productos) que reciba un array de productos y devuelva un objeto donde 
        las claves sean las categorías y los valores sean arrays con los productos de esa categoría.
*/
const propiedades = ['id', 'nombre', 'categoria'];

const productos = [
    { id: 1, nombre: "Laptop", categoria: "Tecnología" },
    { id: 2, nombre: "Celular", categoria: "Tecnología" },
    { id: 3, nombre: "Mesa", categoria: "Muebles" },
    { id: 4, nombre: "Silla", categoria: "Muebles" },
];
const productos2 = [
    { id: 1, nombre: "Laptop", categoria: "Tecnología" },
    { id: 2, nombre: "Celular", categoria: "Tecnología" },
    { id: 3, nombre: "Mesa", categoria2: "Muebles" },
    { id: 4, nombre: "Silla", categoria: "Muebles" },
];

const agruparPorCategoria = (productos) => {
    if (!(productos instanceof Array)) return console.error(`Ingresaste un valor de tipo ${typeof productos}, debes ingresar una colección de productos`);

    const filtrarPropiedades = (propiedades, element) => {
        return propiedades.filter(el => Object.keys(element).includes(el));
    }

    for (const element of productos) {

        const product = Object.entries(element);

        if (filtrarPropiedades(propiedades, element).length !== 3) console.error(`El producto ${element.nombre} tiene estas propiedades: ${Object.keys(element).join(', ')} \ny cada producto debe contar con las propiedades: ${propiedades.join(', ')}`);
        
        product.forEach((el) => {
            if (el[0] === 'id') {
                if (typeof el[1] !== 'number') return console.error(`Ingresaste un id de tipo ${typeof el}, debes ingresar un numero`);
            } else {
                if (typeof el[1] !== 'string') return console.error(`Ingresaste un valor de tipo ${typeof el}, debes ingresar un string`);
            }
        });
    }

    let categorias = new Set();

    for (const element of productos) {
        if (filtrarPropiedades(propiedades, element).length !== 3) continue;
        categorias.add(element.categoria);
    }

    const agruparProductos = {};

    for (const element of [...categorias]) {
        agruparProductos[element] = [];
    }

    for (const element of productos) {
        if (filtrarPropiedades(propiedades, element).length !== 3) continue;
        agruparProductos[element.categoria].push(element);
    }

    console.log('categorías:\n', [...categorias]);
    console.log('Productos Agrupados:\n', agruparProductos);
}

console.log(`--------------------------------------------`);
agruparPorCategoria(productos);
console.log(`--------------------------------------------`);
agruparPorCategoria(productos2);
console.log(`--------------------------------------------`);

const agruparPorCategoriaAlt = (productos) => {
    return productos.reduce((resultado, producto) => {
        
        const categoria = producto.categoria;

        if (categoria !== undefined) {

            if (!resultado[categoria]) resultado[categoria] = [];
            
            resultado[categoria].push(producto);
        }

        return resultado;
    }, {});
}

console.log(`--------------------------------------------`);
console.log('agrupar alt2: \n', agruparPorCategoriaAlt(productos));
console.log(`--------------------------------------------`);
console.log('agrupar alt2: \n', agruparPorCategoriaAlt(productos2));
console.log(`--------------------------------------------`);