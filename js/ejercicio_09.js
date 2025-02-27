console.log(`Hola en este archivo se ejecutará el ejercicio 9...`);

const numeroAleatorio = () => {
    let bandera = true;
    let numero = 0;

    console.time('Tiempo de ejecución');
    while (bandera) {
        let numeroAleatorio = Math.round(Math.random()*1000);
        if (numeroAleatorio >= 501 && numeroAleatorio <= 600) {
            bandera = false;
            numero = numeroAleatorio;
        }
    }
    console.timeEnd('Tiempo de ejecución');
    console.log(numero);
}
const numeroAleatorio2 = () => console.log(Math.round(Math.random()*100) + 500);

numeroAleatorio(); // 501 - 600
console.log('----------------------');
numeroAleatorio2(); // 501 - 600