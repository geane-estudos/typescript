<div align="center">

# TYPESCRIPT
</div>

<div align="center">
Repositório criado com o objetivo de centralizar estudos de Typescript.
</div>

## Índice
- [1. Types](#1-types)
- [2. Type Annotations](#2-type-annotations)
- [3. Annotation e Inference](#3-annotation-e-inference)
- [3.1 Annotation](#31-annotation)
- [3.2 Inference](#32-inference)
- [4. String, number e boolean](#4-string-number-e-boolean)
- [5. Union types](#5-union-types)
- [5.1 Funções](#51-funções)
- [5.2. DOM](#52-dom)
- [6. Types e Interfaces](#6-types-e-interfaces)
- [6.1. Object](#61-object)
- [6.1. Type](#61-type)
- [6.2. Interface](#62-interface)
- [7. Arrays](#7-arrays)
- [7.1. Sintaxe Alternativa](#71-sintaxe-alternativa)
- [8. Any](#8-any)
- [8.1. Any Implícito](#81-any-implicito)
- [8.2. Uso do Any](#82-uso-do-any)
- [9. Null e Undefined](#9-null-e-undefined)
- [9.1 Null](#91-null)
- [9.2 Undefined](#92-undefined)
- [9.3 Propriedades Opcionais](#93-propriedades-opcionais)
- [9.4 strictNullChecks](#94-strictnullchecks)

### 1. Types
O tipo define o que podemos fazer com um dado.

### 2. Type Annotations
No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado. Não é possível prever o argumento que será passado no parâmetro de funções, para isso são necessárias as anotações de tipos.

### 3. Annotation e Inference
#### 3.1. Annotation
Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).
#### 3.2. Inference

### 4. String, number e boolean
String, number e boolean são tipos básicos do TypeScript (primitivos).
Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

### 5. Union types
É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.
#### 5.1. Funções
Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.
#### 5.2. DOM
Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

### 6. Types e Interfaces
#### 6.1. Object
É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
#### 6.1. Type
A palavra-chave type cria um atalho (alias) para um tipo customizado.
#### 6.2. Interface
interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.


### 7. Arrays
Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];
Sintaxe Alternativa
#### 7.1 Sintaxe Alternativa
Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.

### 8. Any
O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
#### 8.1. Any Implicito
Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.
#### 8.2. Uso do Any
Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.

### 9. Null e Undefined
#### 9.1. Null
Null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
#### 9.2. Undefined
Undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
#### 9.3. Propriedades Opcionais
Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.
#### 9.4 strictNullChecks
Sem o strictNullChecks como true no tsconfig.json, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.


