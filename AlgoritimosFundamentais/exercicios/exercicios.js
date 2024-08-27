/*
a)	Crie um programa que receba uma lista de números e retorne o maior e o menor número da lista. 
*/
function findMinMax(numbers) {
    // Verificar se a lista está vazia
    if (numbers.length === 0) {
        return "A lista está vazia.";
    }

    // Inicializar o maior e o menor número com o primeiro número da lista
    let min = numbers[0];
    let max = numbers[0];

    // Percorrer a lista e atualizar o maior e o menor número
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return `O maior número é ${max} e o menor número é ${min}.`;
}

// Teste da função
const numbersList = [5, 3, 8, 1, 9, 4, 2];
console.log(findMinMax(numbersList));

/*
b)	Escrever um programa que leia um texto e conte a quantidade de letra com e sem espaço. 
*/
// Função para contar letras com e sem espaços
function countLetters(inputText) {
    // Contar todas as letras (incluindo espaços)
    let totalChars = inputText.length;

    // Contar somente os espaços
    let spaceCount = 0;
    for (let char of inputText) {
        if (char === ' ') {
            spaceCount++;
        }
    }

    // Subtrair o total de letras pelo total de espaços para obter a quantidade de letras sem espaços
    let lettersWithoutSpaces = totalChars - spaceCount;

    return {
        totalChars: totalChars,
        lettersWithoutSpaces: lettersWithoutSpaces
    };
}

// Testar a função
let text = prompt("Digite um texto:");  // Isto fará com que uma janela pop-up apareça para o usuário inserir o texto
let result = countLetters(text);
alert(`Total de letras (com espaços): ${result.totalChars}\nTotal de letras (sem espaços): ${result.lettersWithoutSpaces}`);

/*
c)	Escreva um programa que crie dois arrays numéricos, de mesmo tamanho, e some, subtraia, mutiplique e divida os elementos de um pelos elementos do outro. (resposta no final)
*/
function operateOnArrays(arr1, arr2) {
    // Verifica se os arrays possuem o mesmo tamanho
    if (arr1.length !== arr2.length) {
        console.error('Os arrays devem ter o mesmo tamanho.');
        return;
    }

    // Inicializa arrays para armazenar os resultados das operações
    let sum = [];
    let subtract = [];
    let multiply = [];
    let divide = [];

    // Percorre os arrays e realiza as operações
    for (let i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i]);
        subtract.push(arr1[i] - arr2[i]);
        multiply.push(arr1[i] * arr2[i]);
        divide.push(arr1[i] / arr2[i]);
    }

    return {
        sum: sum,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
}

// Testar a função
const array1 = [10, 20, 30, 40];
const array2 = [2, 4, 6, 8];

const results = operateOnArrays(array1, array2);

console.log('Soma:', results.sum);
console.log('Subtração:', results.subtract);
console.log('Multiplicação:', results.multiply);
console.log('Divisão:', results.divide);

/*
d)	Crie um programa que liste um arrays de objetos, sendo que os objetos são:  Usuario 
com: Nome, Data de Nascimento, Sexo, Profissão
*/
// Definindo a estrutura do objeto Usuario
function Usuario(nome, dataDeNascimento, sexo, profissao) {
    this.nome = nome;
    this.dataDeNascimento = dataDeNascimento; // formato: 'DD/MM/AAAA'
    this.sexo = sexo;
    this.profissao = profissao;
}

// Criando um array de objetos Usuario
const usuarios = [
    new Usuario('Ana Silva', '15/03/1985', 'Feminino', 'Engenheira'),
    new Usuario('João Oliveira', '10/06/1990', 'Masculino', 'Designer'),
    new Usuario('Maria Ferreira', '20/12/2000', 'Feminino', 'Estudante'),
    new Usuario('Carlos Souza', '05/09/1988', 'Masculino', 'Médico')
];

// Função para listar os usuários
function listarUsuarios() {
    console.log("Lista de Usuários:");
    usuarios.forEach(usuario => {
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Data de Nascimento: ${usuario.dataDeNascimento}`);
        console.log(`Sexo: ${usuario.sexo}`);
        console.log(`Profissão: ${usuario.profissao}`);
        console.log('------------------------');
    });
}

// Chamando a função para listar os usuários
listarUsuarios();

/*
e)	Crie um vetor com 10 números aleatórios entre 1 e 100. Pesquise se o número 50 está presente no vetor e iImprima o índice do número 50 no vetor ou uma mensagem informando que ele não foi encontrado
*/
// Cria um vetor com 10 números aleatórios entre 1 e 100
const vetor = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Pesquisa se o número 50 está presente no vetor
const indice = vetor.indexOf(50);

// Imprime o índice do número 50 no vetor ou uma mensagem informando que ele não foi encontrado
if (indice !== -1) {
    console.log(`O número 50 foi encontrado no índice ${indice}.`);
} else {
    console.log("O número 50 não foi encontrado no vetor.");
}

// Imprimir o vetor para verificação
console.log("Vetor:", vetor);
