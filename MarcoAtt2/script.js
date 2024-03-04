function saudacao(nome) {
    return "Olá " + nome + ", bem vindo(a)!"
}
console.log(saudacao("Joao"))

console.log(" ")

function somaQuadrado(x, y) {
    let soma = x + y
    let quadradoSoma = soma * soma
    return quadradoSoma

}
console.log(somaQuadrado(5,10))

console.log(" ")

function concatenaPalavras (nome1,nome2){
    return "Meu nome é " + nome1 + nome2
}
console.log(concatenaPalavras ("Joao", " Silva")) 

console.log(" ")
 
function primeiroUltimoCaractere (caractere){

    let primeiroC = caractere.charAt(0)
    let ultimoC = caractere.charAt(caractere.length -1)

    return "O primeiro caractere é: " + primeiroC  + " E o ultimo caractere é: " + ultimoC
    
}
console.log(primeiroUltimoCaractere("Jose"))  

console.log(" ")

function comparacaoNumeros(num1, num2) {
    if (num1 > num2) {
        return  num1 + " é maior que o " + num2 ;
    } else if (num2 > num1) {
        return num2 + " é maior que o "  + num1;
    } else {
        return num1 + num2 + " Os números são iguais.";
    }
}

console.log(comparacaoNumeros(5,8))

console.log(" ")

let variavelForaDaFuncao = "Variável fora da função";

function minhaFuncao() {
    let variavelDentroDaFuncao = "Variável dentro da função";
    console.log(variavelForaDaFuncao);
    console.log(variavelDentroDaFuncao);
}
    minhaFuncao();
    //console.log(variavelDentroDaFuncao) da erro
    console.log(variavelForaDaFuncao);

console.log(" ")

function calcularMedia(numeros){
    var soma = 0;

    for(var i = 0; i< numeros.length;i++){
       soma += numeros[i] 
    }

    var media = soma / numeros.length;
    
    return media;
}
let arrayNumeros = [3, 9, 7, 4, 6, 5]
console.log(calcularMedia(arrayNumeros))

console.log(" ")

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(10))

console.log(" ")

function meuCallback() {
    console.log("Teste!");
}

function executaCallback(callback) {
    callback();
}

executaCallback(meuCallback);

console.log(" ")

function aguardarSegundos(segundos, mensagem) {
    setTimeout(function() { 
    console.log(mensagem)}, segundos * 1000)
}

aguardarSegundos(3, "Ola");

console.log(" ")

function apllyECall() {
    console.log("Olá, " + this.nome + "!");
  }
  
  let pessoa1 = {
    nome: 'João'
  };
  
  let pessoa2 = {
    nome: 'Maria'
  };
  
  apllyECall.call(pessoa1); 
  

  apllyECall.apply(pessoa2); 
  
  console.log(" ")

  function somaDinamica() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  console.log("Soma Dinamica: " + somaDinamica(2, 4, 6, 8, 10));
  
  console.log(" ");

  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  let pessoa = new Pessoa('Maria', 25);

  console.log(pessoa);

  console.log(" ")

  function ehNumero(parametro){
    if(typeof parametro === 'number'){
        return 'Verdadeiro'
    } else {
        return 'Falso'
    }
}

console.log(ehNumero(1))
  
console.log(" ")

const imprimirThis = () => {
    console.log("Valor de 'this' fora de qualquer contexto:", this);
  
    const objeto = {
      nome: "Objeto",
      imprimirThis: () => {
        console.log("Valor de 'this' dentro de um método de objeto:", this);
      }
    };
  
    objeto.imprimirThis();
  
    const outraFuncao = () => {
      console.log("Valor de 'this' dentro de outra função arrow:", this);
    };
  
    outraFuncao();
  };
  

  imprimirThis();