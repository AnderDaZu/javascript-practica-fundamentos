(() => {
    console.log(`Ejercicio 30 formatear fecha ingresada`);

    const MESES = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ];

    const validarFormatoFecha = fecha => {
        // validar fecha con formato 'yyyy-mm-dd';
        // if (/^(1(8|9)|20)\d{2}-([1-9]|0[1-9]|1[1-2])-([1-9]|(0|1|2)[1-9]|3[0|1])$/g.test('2085-12-30')) console.log('bien 1');
        if (/^(1(8|9)|20)\d{2}-(0?[1-9]|1[1-2])-(0?[1-9]|(1|2)\d|3[0-1])$/g.test(fecha)) return true;
        return false;
    }

    const validarValorFecha = fecha => {
        const [anio, mes, dia] = fecha.split('-').map(Number);
        const fechaNueva = new Date(anio, mes - 1, dia);

        return (fechaNueva.getFullYear() === anio && fechaNueva.getMonth() + 1 === mes && fechaNueva.getDate() === dia);
    }

    const formatearFecha = (fecha, meses) => {
        const [anio, mes, dia] = fecha.split('-');
        return console.log(`${dia} de ${meses[mes-1]} de ${anio}`);
    }

    const fecha = '2024-12-29';

    if (!validarFormatoFecha(fecha)) return console.error('Ingrese una fecha con el formato yyyy-mm-dd');
    if (!validarValorFecha(fecha)) return console.error('Ingrese una fecha valida');

    formatearFecha(fecha, MESES);
})();