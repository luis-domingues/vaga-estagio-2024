/* QUESTÃO 01 
  No código fornecido, é feito um loop enquanto a variável k < valor da variável indice. No loop, k está incrementado em 1 a cada iteração e o valor de k é somado à variável soma. Ao final do loop, o valor da variável soma será a soma de todos os números de 1 até indice.
  Meu pensamento para essa questão: 
  int INDICE = 13, SOMA = 0, K = 0;
  enquanto K < INDICE faça
  {
   k é incrementado em 1
   suma é atualizado com o valor de k
  }
  imprime o valor final de SOMA
*/
let indice = 13;
let sum = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  sum = sum + k;
}
console.log(sum);

/* QUESTÃO 02 
  A inicialização das variáveis (x y) vão começar em 0 e 1 respectivamente. O loop while continuará enquanto y for menor ou igual ao número fornecido. Se sim, retornamos true, indicando que o número pertence a sequência de Fibonacci.
  Calculei o próximo termo da sequência somando x e y e tualizei os valores de x e y para os próximos termos.
  Se o loop terminar sem encontrar o número na sequência, retornará false, indicando que o número não pertence a sequência de Fibonacci.
  Quando o usuário digitar o algum número no alert do navagador, O programa verificará se este número está na sequência de Fibonacci.
  */
function fibonacciNumber(number) {
  let x = 0;
  let y = 1;
  while (y <= number) {
    if (y === number) {
      return true;
    }
    const nextTerm = x + y;
    x = y;
    y = nextTerm;
  }
  return false;
}

const reportedNumber = parseInt(prompt("Digite um número: "));
if (fibonacciNumber(reportedNumber)) {
  console.log(`${reportedNumber} pertence a sequência de Fibonacci.`);
} else {
  console.log(`${reportedNumber} NÃO pertence à sequência de Fibonacci.`);
}

/* QUESTÃO 03 
  A) a lógica aqui é adicionar 2 ao número anterior. Portanto, o próximo número será 7 + 2 = 9.

  B) a lógica é multiplicar o número anterior por 2. Portanto, o próximo número será 64 * 2 = 128.

  C) Essa sequência representa os quadrados dos números naturais. Portanto, o próximo número será 6^2 = 36.

  D) Esta sequência consiste em números ímpares ao quadrado. Portanto, o próximo número será 6^2 = 36.

  E) Nesta sequência, cada número é a soma dos dois anteriores. Portanto, o próximo número será 8 + 5 = 13.

  F) A lógica aqui não é imediatamente óbvia, mas parece que os números estão se aproximando do próximo número primo. Portanto, o próximo número primo após 19 é 23.
*/

//A) 1, 3, 5, 7, ___
const nextA = 7 + 2;
console.log("a) Próximo número:", nextA);
//B) 2, 4, 8, 16, 32, 64, ____
const nextB = 64 * 2;
console.log("b) Próximo número:", nextB);
//C)  0, 1, 4, 9, 16, 25, 36, ____
const nextC = Math.pow(6, 2);
console.log("c) Próximo número:", nextC);
//D) 4, 16, 36, 64, ____
const nextD = Math.pow(6, 2);
console.log("d) Próximo número:", nextD);
//E) 1, 1, 2, 3, 5, 8, ____
const nextE = 8 + 5;
console.log("e) Próximo número:", nextE);
//F) 2, 10, 12, 16, 17, 18, 19, ____
const nextF = 23;
console.log("f) Próximo número:", nextF);

/* QUESTÃO 04 
  Neste problema, Pensei em usar uma estratégia que envolve a manipulação dos interruptores de maneira específica para deduzir qual interruptor está associado a qual lâmpada.
*/

function toggleSwitch(switches, index) {
  switches[index] = !switches[index];
}

function determinaLampadas(switches) {
  // Inicialmente, todas as lâmpadas estão desligadas
  let lampadas = [false, false, false];
  // Primeira ida: liga o primeiro interruptor
  toggleSwitch(switches, 0);
  // Segunda ida: liga o segundo interruptor
  toggleSwitch(switches, 1);
  // Se após a segunda ida a lâmpada 2 estiver acesa, o terceiro interruptor controla essa lâmpada
  if (switches[1]) {
    lampadas[1] = true;
  }
  // Se após a segunda ida a lâmpada 1 estiver acesa, o primeiro interruptor controla essa lâmpada
  if (switches[0]) {
    lampadas[0] = true;
  }
  // Se após a segunda ida a lâmpada 3 estiver acesa, o primeiro interruptor controla essa lâmpada
  if (switches[2]) {
    lampadas[2] = true;
  }
  return lampadas;
}
let switches = [false, false, false];
let lampadas = determinaLampadas(switches);

console.log("O interruptor 1 controla a lâmpada 1:", lampadas[0]);
console.log("O interruptor 2 controla a lâmpada 2:", lampadas[1]);
console.log("O interruptor 3 controla a lâmpada 3:", lampadas[2]);

/* QUESTÃO 05 
  Neste código, a função chamada invertedString que recebe uma string como argumento e retorna a mesma string invertida.
*/
function invertedString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const myString = "Hello, world!";
const invertedStringResult = invertedString(myString);
console.log("String original:", myString);
console.log("String invertida:", invertedStringResult);
