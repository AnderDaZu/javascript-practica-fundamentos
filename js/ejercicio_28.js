class Pelicula {
    constructor({id='', titulo='', director='', anio=undefined, paises=undefined, generos=undefined, calificacion=undefined}) {

        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.paises = paises;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarDatos(id, 'string', 'id', true, false, undefined);
        this.validarFormatoDatos(id, /^[a-z]{2}[0-9]{7}$/ig, 'id');
        this.validarDatos(titulo, 'string', 'titulo', true, false, undefined);
        this.validarLongitudDatos(titulo, 100, 'titulo', '<=');
        this.validarDatos(director, 'string', 'director', true, false, undefined);
        this.validarLongitudDatos(director, 50, 'director', '<=');
        this.validarDatos(anio, 'number', 'anio', true, false, undefined);
        this.validarFormatoDatos(anio, /^(18|19|20)\d{2}$/g, 'anio');
        this.validarDatos(paises, 'string', 'paises', false, true, 'string');
        this.validarDatos(generos, 'array', 'generos', false, true, 'string');
        this.validarElementoEnLista(generos, Pelicula.listaGeneros, 'generos');
        this.validarDatos(calificacion, 'string', 'calificacion', true, false, undefined);
        this.validarFormatoDatos(calificacion, /^[0-9]{1}$/g, 'calificacion');
    }

    validarDatos(dato, tipo, campo, esPrimitivo, validarElementoColeccion = false, tipoDatoElementoColeccion = undefined) {
        if (!dato || dato === undefined) return console.warn(`Falto por ingresar valor para ${campo}`);
        
        if (esPrimitivo) {
            if (typeof dato !== tipo) return console.error(`En ${campo} ingreso un ${typeof dato}, debes ingresar un ${tipo}`);
        } else {
            if (!(dato instanceof Array)) return console.error(`En ${campo} ingreso un ${typeof dato}, debes ingresar una colección`);
        }

        if (validarElementoColeccion && tipoDatoElementoColeccion) {
            for (const element of dato) {
                if (typeof element !== tipoDatoElementoColeccion) return console.error(`En ${campo} ingreso un ${typeof element} (${element}), debes ingresar un ${tipoDatoElementoColeccion}`);
                if (typeof element === tipoDatoElementoColeccion && element.length === 0) return console.error(`Debes ingresar un valor en el elemento ${dato.indexOf(element)+1} de la colección ${campo}`);
            }
        }
    }
    validarLongitudDatos(dato, longitud, campo, operadorComparacion) {
        if (operadorComparacion === '<=') {
            if (dato.length > longitud) return console.error(`Ingreso un dato de ${dato.length} caracteres en ${campo}, debes ingresar un dato de ${longitud} caracteres o menos`);
        }
        if (operadorComparacion === '=') {
            if (dato.length !== longitud) return console.error(`Ingreso un dato de ${dato.length} caracteres en ${campo}, debes ingresar un dato de ${longitud} caracteres`);
        }
    }
    validarFormatoDatos(dato, formato, campo) {
        if (!new RegExp(formato).test(dato)) return console.error(`Ingreso en ${campo} el dato ${dato}, debes ingresar un valor con el formato valido`);
    }
    validarElementoEnLista(dato, lista, campo) {
        for (const element of dato) {
            if (!lista.includes(element)) return console.error(`No encontramos el elemento en ${campo}, debes ingresar un elemento valido`);
        }
    }

    /*
        ✅ static get → Para definir una propiedad calculada de solo lectura en la clase
        Usa static get cuando quieres una propiedad de clase (no de instancia) que se calcula en el 
        momento y no debe modificarse directamente.
        🔹 Caso de uso: Listas predefinidas, constantes dinámicas o valores calculados que dependen 
        de otras propiedades estáticas.
    */
    static get listaGeneros() {
        return [
            'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 
            'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 
            'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'
        ];
    }
    /*
        ✅ static → Para definir una propiedad estática que se pueda modificar
        Usa static cuando necesitas una propiedad compartida por todas las instancias de la clase, y que 
        pueda cambiarse directamente.
        🔹 Caso de uso: Configuraciones globales, valores compartidos o caché de datos.
    */
    static generosAceptados() {
        return `Los generos aceptados son: ${this.listaGeneros.join(', ')}`;
    }
    /*
        ✅ get → Para definir una propiedad calculada en cada instancia
        Usa get cuando necesitas una propiedad de instancia (no de clase) que se calcule en el momento, 
        en lugar de almacenarse en una variable.
        🔹 Caso de uso: Valores derivados de otras propiedades de la instancia.
    */

    fichaTecnica () {
        console.info(`Ficha técnica: \n\tID: ${this.id} \n\tTitulo: ${this.titulo} \n\tDirector: ${this.director} \n\tAño: ${this.anio} \n\tPaíses: ${this.paises} \n\tGeneros: ${this.generos} \n\tCalificación: ${this.calificacion}`);
    }
}

const pelicula1 = new Pelicula({
    id: 'aD1234560', 
    titulo: 'flash', 
    director: 'Director 1', 
    anio: 1899, 
    paises: ['EEUU'], 
    generos: ['Animation'], 
    calificacion: '7'
});
pelicula1.fichaTecnica();

const peliculas3 = [
    {
        id: 'ad1234567', 
        titulo: 'flash', 
        director: 'Director 1', 
        anio: 1998, 
        paises: ['EEUU'], 
        generos: ['Animation'], 
        calificacion: '7',
    },
    {
        id: 'ad1234568', 
        titulo: 'hulk', 
        director: 'Director 2', 
        anio: 2012, 
        paises: ['EEUU'], 
        generos: ['Animation'], 
        calificacion: '6',
    },
    {
        id: 'ad1234569', 
        titulo: 'Aquaman', 
        director: 'Director 3', 
        anio: 2016, 
        paises: ['EEUU', 'Reino Unido'], 
        generos: ['Animation'], 
        calificacion: '8',
    },
];
console.log(peliculas3);
peliculas3.forEach(el => new Pelicula(el).fichaTecnica());