2️⃣ Formatear una fecha en un sitio web (Fecha y Strings)
Caso práctico:
En una aplicación de React, necesitas mostrar la fecha de publicación de un post en formato legible (DD de Mes de YYYY).

Instrucciones:
Crea una función formatearFecha(fecha) que reciba una fecha en formato YYYY-MM-DD y la convierta en el formato "DD de Mes de YYYY".

```js
console.log(formatearFecha("2024-03-04"));
// salida esperada -> "4 de Marzo de 2024"
```

---

3️⃣ Encontrar el número más cercano (Math y Números)
Caso práctico:
En un sistema de recomendaciones, se necesita encontrar el número más cercano a un valor de referencia dentro 
de una lista de números.

Instrucciones:
Crea una función numeroMasCercano(lista, referencia) que reciba un array de números y un número de referencia, 
y devuelva el número más cercano en la lista.

```js
console.log(numeroMasCercano([10, 22, 37, 45, 50], 30));
// salida esperada -> 37
```

---

4️⃣ Normalizar nombres de usuario (Strings y Arrays)
Caso práctico:
En un formulario de registro en una aplicación web, los usuarios pueden ingresar su nombre con espacios extras, 
mayúsculas y minúsculas desordenadas. Se necesita estandarizar estos nombres.

Instrucciones:
Crea una función normalizarNombre(nombre) que reciba un string y lo devuelva con la primera letra en mayúscula 
y el resto en minúscula, eliminando espacios extra.

```js
console.log(normalizarNombre("   jUan pÉRez  "));
// salida esperada -> "Juan Pérez"
```

---

5️⃣ Verificar si un usuario es mayor de edad (Fecha y Números)
Caso práctico:
En una aplicación, se necesita validar si un usuario es mayor de edad basado en su fecha de nacimiento.

Instrucciones:
Crea una función esMayorDeEdad(fechaNacimiento) que reciba una fecha de nacimiento en formato YYYY-MM-DD 
y devuelva true si la persona es mayor de 18 años y false en caso contrario.

```js
console.log(esMayorDeEdad("2006-05-10"));
// respuesta esperada -> true // (Si hoy es 2025, ya tiene 18 o más)
```