console.log(`Hola en este archivo se ejecutará el ejercicio 20...`);

const validarCorreo = (correo = '') => {
    if (!correo) return console.warn('No ingresaste un correo');
    if (typeof correo !== 'string') return console.error(`El valor ${typeof correo} ingresado no es una cadena de texto`);

    const expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

    return expReg
        ? console.info(`El correo ${correo} si es valido`)
        : console.warn(`El correo ${correo} no es valido`);
}

validarCorreo();
validarCorreo('');
validarCorreo({});
validarCorreo('usuario123@gmail.com');
validarCorreo('email@dominio..com');
validarCorreo('nombre.apellido@empresa.org');
validarCorreo('usuario@.com');
validarCorreo('contacto@sub.dominio.com');


/*
1. [a-z0-9]+
    - Indica que el correo debe comenzar con al menos un carácter alfanumérico en minúsculas (a-z) o un número (0-9).

2. (\.[_a-z0-9]+)*
    - Permite que después de la primera parte del correo haya más fragmentos que comiencen con un punto (.) seguido de 
    letras minúsculas (a-z), números (0-9) o guiones bajos (_).
    - El * indica que esto puede repetirse 0 o más veces.

3. @
    - Representa el símbolo obligatorio que separa el nombre de usuario del dominio.

4. [a-z0-9-]+
    - Define la parte del dominio antes del primer punto (.), permitiendo letras minúsculas (a-z), números (0-9) y guiones (-).
    - Debe contener al menos un carácter.

5. (\.[a-z0-9-]+)*
    - Permite que el dominio tenga subdominios opcionales, es decir, partes adicionales separadas por puntos (.) y formadas 
    por letras minúsculas (a-z), números (0-9) y guiones (-).
    - Puede repetirse 0 o más veces (*).

6. (\.[a-z]{2,15})
    - Indica la extensión del dominio (TLD, como .com, .org, .co.uk, etc.).
    - Debe comenzar con un punto (.) seguido de entre 2 y 15 letras (a-z).

7. /i
    - Hace que la validación sea insensible a mayúsculas y minúsculas. Así, no importa si el correo tiene letras en 
    mayúsculas (A-Z) o minúsculas (a-z).
*/