// TIPOS (TYPES)
// O tipo define o que podemos fazer com um dado

const frase = 'Front End'
const total = 100
const empresas = ['apple', 'Microsoft'];
const body = document.body;
const button = document.querySelector('button');

console.log(frase.toLowerCase());
console.log(total * 2)
console.log(empresas.map((empresa) => empresa.toLowerCase()))

//ts-check@ = faz o editor indicar erros de TS

// TYPE ANOTATION
// No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado.
// Não é possível prever o argumento que será passado no parâmetro de funções, para isso 
// são necessárias as anotações de tipos.

const produtos = [
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
]

function filtrarLivros(dados: any) {
    return dados.filter((item: any) => item.tipo === 'livro')
}
console.log(filtrarLivros(produtos));


// INSTALAÇÃO DO TYPESCRIPT
// npm install -g typescript
// testar se está instalado: tsc 

//SCRIPT E TSC
// um arquivo em ts não consegue ser executado no browser. Para compilar em js: tsc typescript.ts

function somar(a: number, b: number) {
    return a + b
}
console.log(somar(5, 10)); //o arquivo compilado em js remove tudo o que tem de ts e mantém só ts

// para não precisar ficar compilando o tempo todo: npm install -g typescript + tsc --init + tsc -w

// ANOTATION (ANOTAÇÃO):
// COM O TRYPESCRIPT PODEMOS INDICAR QUAL SERÁ O DADO DE UMA VARIÁVEL ATRAVÉS DE ANOTAÇÕES

const produto: string = "Livro";
const preço: number = 200;

const carro: {
    marca: string;
    portas: number;
} = {
    marca: "Audi",
    portas: 4
}

console.log(carro)


// INFERENCE (INFERÊNCIA)
// O TS consegue inferir o tipo de dado de expressões em JS. Sempre que ele conseguir inferir, 
// não é necessário fazer a anotação do dado.

const product = "Livro";
const price = 200;

const car: {
    marca: string;
    portas: number;
} = {
    marca: "Audi",
    portas: 4
}

console.log(car)

// FUNÇÕES
// As anotações são necessárias quando lidamos com funções.

function sum(a: number, b: number) {
    return a + b
}
sum(4, 10)
console.log(sum)

const nintendo = {
    nome: "nintendo",
    preço: "2000",
};
function transformarPreço(produto: { nome: string; preço: string; }) {
    produto.preço = 'R$' + produto.preço;
    return produto;
}
const produtoNovo = transformarPreço(nintendo);
console.log(produtoNovo);


//exercício
function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("FrOnt-ENd"))


//STRING, NUMBER E BOOLEAN
//  são tipos básicos do TypeScript (primitivos).
//  Não confundir string, number e boolean com String, Number e Boolean. 
//  Os últimos são as funções construtoras desses tipos de dados, responsáveis 
//  pela herança das propriedades e métodos dos mesmos.
const preco = 500;
const condi = preco > 100;

if (typeof frase === 'string') {
    console.log('frase é string');
}
if (typeof preco === 'number') {
    console.log('preco é number');
}
if (typeof condi === 'boolean') {
    console.log('condi é boolean');
}

//UNION TYPES
// É comum termos funções que podem retornar ou receber tipos diferentes. 
//Para isso usamos a barra vertical string | number | boolean.

//Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.

function isNumber(value: string | number) {
    if (typeof value === 'number') {
        return true;
    } else {
        return 'Não é número';
    }
}
console.log(isNumber(300))
console.log(isNumber('oi'))

//DOM
// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, 
// pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

// Retorna HTMLButtonElement | null
const btn = document.querySelector('btn');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();

//exercício
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
    if (typeof value === 'number') {
        return value;
    } else if (typeof value === 'string') {
        return Number(value);
    } else {
        throw "value deve ser um number | string"
    }
}
console.log(toNumber(200))
console.log(toNumber('200'))


//TYPES E INTERFACES
//OBJECT
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

function preencherDados(dados: {
    nome: string;
    preço: number;
    teclado: boolean;
}) {
    document.body.innerHTML += `
    <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preço}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    `;
}
preencherDados({
    nome: 'Computador',
    preço: 2000,
    teclado: false,
});

//TYPE
//A palavra-chave type cria um atalho para um tipo customizado:

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    } else if (categoria === 'codigo') {
        console.log('Pintar verde');
    } else if (categoria === 'descod') {
        console.log('Pintar roxo');
    }
}

pintarCategoria('codigo');


// INTERFACE
// Interface funciona na maioria dos casos da mesma forma que type, porém possui uma sintaxe diferente.
// As interfaces são geralmente utilizadas para definirmos objetos.

interface InterfaceProduto {
    nome: string,
    preço: number;
    teclado: boolean;
}

type TypeProduto = {
    nome: string,
    preço: number;
    teclado: boolean;
}

//exercício
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}

fetchProduct();
interface Empresa {
    fundacao: number;
    nome: string;
    pais: string
}

interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa
}

function showProduct(data: Product) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>${data.preco}</p>
        <p>${data.descricao}</p>
        <p>${data.garantia}</p>
        <p>${data.seguroAcidentes}</p>
        <p>Fabricante:${data.empresaFabricante.nome}</p>
        <p>Montadora:${data.empresaMontadora.nome}</p>
      </div>
    `;
}

//ARRAYS
//Um array é definidO com o tipo de dado(s) que ele possui, seguidO por []:

const numeros = [10, 20, 30, 40, 50];
const valores = [10, 'taxas', 30, 'produto', 50];

function maiorQue10(data:number[]) {
    return data.filter(n => n > 10)
}

function filtrarValores(data: (number | string)[]) {
return data.filter((item) => typeof item === "number");
}

console.log(maiorQue10(numeros))
console.log(filtrarValores(valores))

//Sintaxe Alternativa
//Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.
const nros = [10, 30, 40, 5, 3, 30];

function maiorQue20(data: Array<number>) {
  return data.filter((n) => n > 10);
}
console.log(maiorQue20(nros))

//exercício
//Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). 
//Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface Curso {
    nome: string;
    horas: number;
    aulas: string;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
  }
  
  async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
  }
  
  fetchCursos();
  
  function mostrarCursos(cursos: Curso[]) {
    cursos.forEach((curso) => {
      let color;
      if (curso.nivel === 'iniciante') {
        color = 'blue';
      } else if (curso.nivel === 'avancado') {
        color = 'red';
      }
      document.body.innerHTML += `
        <div>
          <h2 style="color: ${color};">${curso.nome}</h2>
          <p>Horas: ${curso.horas}</p>
          <p>Aulas: ${curso.aulas}</p>
          <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
          <p>Tags: ${curso.tags.join(', ')}</p>
          <p>Aulas: ${curso.idAulas.join(' | ')}</p>
        </div>
      `;
    });
  }

  //ANY
  //O any indica que o dado pode conter qualquer tipo de dado do TypeScript. 
  //Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.

  function normalizar(texto: any) {
    return texto.trim().toLowerCase();
  }
  
  normalizar(' DeSIGN');

  // Any Implicito
//Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. 
//Esses parâmetros terão o tipo implícito de any.

//Uso do Any
//Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, 
//dependendo da API que acessarmos.


//NULL E UNDEFINED
// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, 
// retornarem null quando não são bem sucedidas.

const bt = document.querySelector('button');
const config = localStorage.getItem('config');

if (bt !== null) {
  bt.click();
}
if (bt) {
  bt.click();
}
if (bt) bt.click();
bt?.click();

console.log(typeof null); //vai dar object no console, é um bug do js

// undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

// Propriedades Opcionais
// Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar 
// como o valor definido ou undefined.

interface Livros {
    nome?: string;
  }
  
  const livro: Livros = {};
  const jogo: Livros = {
    nome: 'Ragnarok',
  };
  
  console.log(jogo.nome?.toLowerCase());
  console.log(livro.nome?.toLowerCase());
  

//   strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e
// consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.

// tsconfig.json

// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }

// OBJETOS E INTERFACES
// INSTANCEOF
//CLASS
//Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, 
//o TypeScript gera a interface do objeto produzido pela mesma.

class Produto {
    // nomenclatura:string;
    constructor(nome:string) { //constructor é responsável pela definição dos parâmetros que a classe terá
        // this.nomenclatura = nome;
    }
}

const trilogias = new Produto('A Guerra dos Tronos')
console.log(trilogias)