console.log(`Hola en este archivo se ejecutará el ejercicio 6...`);

let tex = `hola mundo`;


const contarRepeticiones = (texto, palabra) => {
    if (!texto || typeof texto !== 'string') return console.warn('Ingresa un texto valido');
    
    if(!palabra || typeof palabra !== 'string') return console.warn('Ingresa una palabra de busqueda valida');

    const expReg = new RegExp(palabra, 'ig');
    const contar = texto.matchAll(expReg);
    let bandera = true;
    let contador = 0;

    while (bandera) {
        if (contar.next().done === true) {
            bandera = false;
            continue;
        }
        contador++;
    }
    console.log(texto);
    console.log('La palabra "%s" esta %d veces', palabra, contador);
}

const contarRepeticionesAlt = (texto, palabra) => {
    if (!texto || typeof texto !== 'string') return console.warn('Ingresa un texto valido');
    
    if(!palabra || typeof palabra !== 'string') return console.warn('Ingresa una palabra de busqueda valida');

    let contador = 0;
    let posicion = 0;
    while(posicion !== -1) {
        posicion = texto.indexOf(palabra, posicion);
        if (posicion !== -1) {
            posicion++;
            contador++;
        }
    }
    console.log(texto);
    console.log('La palabra "%s" esta %d veces', palabra, contador);
}

contarRepeticiones('');
contarRepeticiones({});
contarRepeticiones('hola');
contarRepeticiones('hola', '');
contarRepeticiones('hola hola', 'hola');
contarRepeticiones(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta deserunt sint dolorum 
excepturi minima perspiciatis! Voluptatem similique dignissimos praesentium amet facilis, distinctio hic nulla 
cumque ratione. Dolores, maiores expedita.`, 'si')

console.log(`============================================`);
contarRepeticionesAlt('');
contarRepeticionesAlt({});
contarRepeticionesAlt('hola');
contarRepeticionesAlt('hola', '');
contarRepeticionesAlt('hola hola', 'hola');
contarRepeticionesAlt(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta deserunt sint dolorum 
excepturi minima perspiciatis! Voluptatem similique dignissimos praesentium amet facilis, distinctio hic nulla 
cumque ratione. Dolores, maiores expedita.`, 'si')