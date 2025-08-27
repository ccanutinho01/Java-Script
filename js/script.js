//1- Number

console.log(1234); //interger
console.log(typeof 1234); // integer
console.log(12.34); // float
console.log(typeof 12.34); // float
console.log(1.2e3); // 1.2 * 10^3
console.log(typeof 1.2e3); // 1.2 * 10^3
console.log(-43); // 1.2 * 10^-3
console.log(typeof -43); // 1.2 * 10^-3

// 9 - Operador Infinity

//10- Strings
console.log('Isso é uma string'); //string com aspas simples
console.log("Isso é uma string"); //string com aspas duplas
console.log(`Isso é uma string`); // string com crase
console.log(typeof 'Isso é string'); // string
console.log(typeof "Isso é uma string"); //string
console.log(typeof `Isso é uma string`); //string

//11- Concatenação de String
console.log(`Isso é`+`uma string`); //concatenação com o operador +
console.log('Isso é'+ 123); // concatenação com o operdor +, numero convertido para string
console.log('1'+ 1); // concatenação com o operador +, número convertido para string
console.log('1'+1 +1);// concatenação com o operador +, numero convertido para string


// 14- Boolean
console.log(true); //boolean true
console.log(false); //boolean false
console.log(typeof true); //boolean
console.log(typeof false); //boolean

//15 - Operadores de Comparação
console.log(2 > 3); // false - maior que
console.log(2 < 3); // true - menor que 
console.log(2 >= 3); // false - maior ou igual que 
console.log(2 <= 3); // true - menor ou igual que 

//19 - Mudança de Tipo (Coerção)
console.log('5'+ 5); // '55'- concatenação, número convertido para string
console.log('5'- 5); // 0 - subtração. string convertida para número
console.log('5'* 5); // 25- multiplicação, string convertida para número
console.log('10'/ 2); // 5 - divisão, string convertidas para número
console.log('10' / '2'); // 5 - divisão, string convertidas
console.log('10' / 'a'); //Nan- divisão, string convertida 

let idade = 12;
if(idade >= 18) {
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

let nota = 7;
if(nota >= 9) {
    console.log("Excelente");
} else if( nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}