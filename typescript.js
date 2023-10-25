// TIPOS (TYPES)
// O tipo define o que podemos fazer com um dado
var frase = 'Front End';
var total = 100;
var empresas = ['apple', 'Microsoft'];
var body = document.body;
var button = document.querySelector('button');
console.log(frase.toLowerCase());
console.log(total * 2);
console.log(empresas.map(function (empresa) { return empresa.toLowerCase(); }));
//ts-check@ = faz o editor indicar erros de TS
// TYPE ANOTATION
// No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado.
// Não é possível prever o argumento que será passado no parâmetro de funções, para isso 
// são necessárias as anotações de tipos.
var produtos = [
    {
        nome: 'O Senhor dos anéis',
        tipo: 'livro',
    },
    {
        nome: 'A Guerra dos Tronos',
        tipo: 'livro',
    },
    {
        nome: 'Dark Souls',
        tipo: 'Jogo',
    }
];
function filtrarLivros(dados) {
    return dados.filter(function (item) { return item.tipo === 'livro'; });
}
console.log(filtrarLivros(produtos));
// INSTALAÇÃO DO TYPESCRIPT
// npm install -g typescript
// testar se está instalado: tsc 
// um arquivo em ts não consegue ser executado no browser. Para compilar em js: tsc typescript.ts
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 10)); //o arquivo compilado em js remove tudo o que tem de ts e mantém só ts
// para não precisar ficar compilando o tempo todo: tsc --init + npm install -g typescript
// ANOTATION (ANOTAÇÃO):
// COM O TRYPESCRIPT PODEMOS INDICAR QUAL SERÁ O DADO DE UMA VARIÁVEL ATRAVÉS DE ANOTAÇÕES
var produto = "Livro";
var preço = 200;
var carro = {
    marca: "Audi",
    portas: 4
};
console.log(carro);
// INFERENCE (INFERÊNCIA)
// O TS consegue inferir o tipo de dado de expressões em JSON. Sempre que ele conseguir inferir, 
// não é necessário fazer a anotação do dado.
var product = "Livro";
var price = 200;
var car = {
    marca: "Audi",
    portas: 4
};
console.log(car);
// FUNÇÕES
// As anotações são necessárias quando lidamos com funções.
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 10));
// 9 min

