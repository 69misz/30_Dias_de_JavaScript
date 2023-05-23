// 1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafío = '30 días de JavaScript';

// 2. Imprima la cadena en la consola del navegador usando console.log()
console.log('30 días de JavaScript');

// 3. Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafío.length);

// 4. Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafío.toUpperCase());

// 5. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafío.toLowerCase());

// 6. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafío.substring(3,7));

// 7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafío.slice(3,21));

// 8. Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafío.includes("Script"));

// 9. Divide la cadena en un array usando el método split()
console.log(desafío.split());

// 10. Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafío.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let cadena= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(cadena.split(","));
console.log(cadena.split(", "));

// 12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafío.replace("JavaScript","Python"));

// 13. ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafío.charAt(15));

// 14. ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafío.charCodeAt(11));

// 15. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafío.indexOf("a"));

// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafío.lastIndexOf("a"));

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oración = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oración.indexOf("porque"));

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oración.lastIndexOf("porque"));

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oración.search("porque"));

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(desafío);
console.log(desafío.trim( ""));

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafío.startsWith("30 días de JavaScript"));

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafío.endsWith("30 días de JavaScript"));

// 23. Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafío.match("a"));
console.log(desafío.match(/a/gi));

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let texto = '30 días de'
console.log(texto.concat('JavaScript'));

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafío.repeat(2));