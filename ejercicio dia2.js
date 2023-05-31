// NIVEL 1
// 1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = '30 días de JavaScript ';

// 2. Imprima la cadena en la consola del navegador usando console.log()
console.log('30 días de JavaScript');

// 3. Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length);

// 4. Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase());

// 5. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());

// 6. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(3,7));

// 7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
let desafio2 = " 30 Days Of JavaScript"
console.log(desafio2.substring(3));

// 8. Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes("Script"));

// 9. Divide la cadena en un array usando el método split()
console.log(desafio.split());

// 10. Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let cadena= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(cadena.split(','));

// 12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace("JavaScript","Python"));

// 13. ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15));

// 14. ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt(11));

// 15. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf("a"));

// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf("a"));

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.indexOf("porque"));

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.lastIndexOf("porque"));

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.search("porque"));

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(desafio.trim( ""));

let desafio3 = "   30 dias de JavaScript   ";
console.log(desafio3.trim(" "));

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith("30"));

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith("t"));

// 23. Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match("a"));
console.log(desafio.match(/a/gi));

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let texto = "30 días de "
console.log(texto.concat("JavaScript"));

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2));



//NIVEL 2
// 1. 
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2.
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof parseInt('10'));
console.log(typeof(10));

// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let parseFloat = '9.81'
let num = 10
console.log(parseFloat == num);
console.log(Math.round(parseFloat));

// 5. Verifique si 'on' se encuentra tanto en Python como en la jerga
let palabra = "Phyton";
let palabra2 = "jerga";
console.log(palabra.includes('on'), palabra2.includes('on'));

// 6. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
let oracion2 = "Espero que este curso no esté lleno de jerga";
console.log(oracion2.includes('jargon'));

// 7. Genere un número aleatorio entre 0 y 100 inclusive.
let numero = Math.random();
let numero1 =numero * 100;
console.log(Math.floor(numero1));

// Genere un número aleatorio entre 50 y 100 inclusive.
let num1= Math.random();
let num2 = num1 * 51;
let num3 = num2 + 50;
console.log(Math.floor(num3));

// Genere un número aleatorio entre 0 y 255 inclusive.
let number= Math.random();
let number1 = number * 251;
console.log(Math.floor(number1));

// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let string = 'JavaScript';
let caracter = string[0]; // J
let caracter1 = string[1]; // a
let caracter2 = string[2]; // v
let caracter3 = string[3]; // a
let caracter4 = string[4]; // S
let caracter5 = string[5]; // c
let caracter6 = string[6]; // r
let caracter7 = string[7]; // i
let caracter8 = string[8]; // p
let caracter9 = string[9]; // t

console.log(caracter4);

/* Use console.log() y caracteres de escape para imprimir el siguiente patrón.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
// 12. Usa substr para separar la frase porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion3 = 'No puedes terminar una oración con porque porque porque es una conjunción';
let oracion4 = oracion3.split(' ');
//console.log(oracion4)
console.log(`${oracion4[6].substr()} ${oracion4[7].substr()}`);



// NIVEL 3
// 1. Cuente el número de palabras amor en esta oración.
let frase = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
console.log(frase.search("amor"));

// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion3.match("porque"));
console.log(oracion3.match(/porque/gi));

// 3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentReg = /\W(?<!1)/g;
let sent = sentence.replace(/ /g, "1");

let finalSent = sent.replace(sentReg, ""), finalfinalSent = finalSent.replace(/1/g, " ");
console.log(finalfinalSent);


let senArr = finalfinalSent.split(" "), wordOccur = [];

for (const x of senArr) {
    var re = new RegExp(x, "g");
    var y = finalfinalSent.match(re);

    wordOccur = wordOccur.concat([y.length]);
};

console.log(senArr);


let texto2 = sentence.replace(/[^\w\s]/g, "")
            .match(/\w+/g)
            .reduce((acc, texto2) => {
                acc[texto2] = (acc[texto2] || 0) + 1;
                if (!(acc[texto2] < acc[acc.$])) acc.$ = texto2;
                return acc;
            }, {}).$;
            
console.log(texto2); // la palabra mas utilizado


// 4. Calcule el ingreso anual total de la persona extrayendo los números del siguiente texto. "Gana 5000 euros de salario por mes, 10000 euros de bonificación anual, 15000 euros cursos en línea por mes".
    let ingresoAnual= 0;

    let salarioMes = 5000;
    let cursoLineaMes = 15000;
    let bonificacionAnual = 10000;
    let mesesAño = 12;
    suma = salarioMes + cursoLineaMes;
    console.log ((suma * mesesAño) + bonificacionAnual);

