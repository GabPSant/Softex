# Softex

## 1º Mês

### 1º Aula

#### Algoritmos, lógica de programação

* Fases e descrições de algoritmos:

> Entrada -> Processamento -> Saida  
> Entrada: valores recebidos pelo sistema  
> Processamento: aplicação do algoritmo utilizando os valores recebidos  
> Saida: resultado do algoritmo esperado

* Formas de representar o algoritmos:

> Narrativa: descrição literal do algoritmo (sequencias de passos)  
> Fluxograma: descrição através de um gráfico mostrando o fluxo do algoritmo (Inicio -> Fim)  
> Pséudocódigo: Criar a ideia de um código (usa somente a lógica para demonstrar o código)

* Pensamento sub-algoritmo (principil de facilitar o entendimento do código ao dividir o algoritmo total em sub-partes)

#### JavaScript

* Linguagem de programação voltada para aplicações **web** e **mobile**
* **Fácil execução** e pode ser executada no navegador da internet
* Uma das **mais populares** no mundo. **Fundamental** para os **programadores**
* Executando JavaScript (locais onde pode ser executado)

> 1. Pelo navegador
> 2. Pela plataforma [CodePen](https://codepen.io/)
> 3. Pelo Visual Studio Code (VS Code)

##### **--> Tipos de dados e variáveis**

* Criando Arquivos base

> 1. ctrl + N (atalho para criar um arquivo novo)
> 2. (nome do arquivo).(tipo de arquivo [html, js, py, css etc])

* Tipos de  dados básicos:

> 1. String (valores com texto)
> 2. Integer (números sem vírgula)
> 3. Float (númweros com vírgula)
> 4. Boolean (valores binários [1,0 / sim ou não])
> 5. Objeto (conjunto de valores)

* Tipos de dados avançados:
  
> 1. Infinity (um numero extremamente pequeno)
> 2. NaN (um valor não possível [exemplo: ])
> 3. Null (diferente de zero, não é valor vazio [ocupa espaço na memoria]) - lógica: pense em um voto nulo nas eleições
> 4. Undefined (espaço de memória ainda não preenchido, não está definido)

* Tipos de variáveis:

> const - variáveis de valores constantes, não podem ter seus valores alterados (devem ser inicializados no começo)  
> let - são variáveis que podem ter seus valores alterados **quantas vezes quiser**.  Só pode ser vista dentro de um escopo (se estiver no escopo global, pode ser vista globalmente. Se estiver em um local, só sera vista no local)  
> var - são variáveis que podem ter seus valores alterados **quantas vezes quiser**.  Podem ser vista em qualquer escopo(não recomendado o uso pois pode causar confusão no sistema).  
> let (nome da variável) = [...] - serve para manter vários valores em uma mesma variável.

* typeof("tipo de", serve para apresentar o tipo de uma variável)(Exemplo: console.log(typeof nome))

##### **--> Operadores Lógicos**

* Operadores matemáticos básicos (+, -, *, /, %, ==, !=, >, <)

### 2º Aula

* Prática de algoritmo - utilizando os tipos de descrição (narrativa, fluxograma, pseudocódigo)

### 3º Aula

* Prática com Javascript
* Site que ensina Back-end ([Boot.dev](https://boot.dev/)), Python e Go (encontrei durante os estudos, o site está em inglês).

### 4º Aula

#### Entrada e Manipulação de dados

##### 1. Entrada de Dados

* O objetivo do JavaScript é deixar o site dinâmico (uso do comando prompt, para mandar uma mensagem para o console)

##### 2. Conversão de Dados (Cast)

* Formas de altetar:

> Number("variável") - converte a variável para o tipo Number (número)
> String("variável") - converte a variável para o tipo String (caractere)

##### 3. Manipulação de Dados

* Concatenação de Dados [Ex: (variável1 + variável2)] {é possivel fazer com diferentes tipos de dados}
* para poder usar printf em JavaScript se deve usar duas crases (``) ao inves de aspas ("").Ex: let macaco = "coisa de macaco"
console.log(`${macaco} usar crase ao inves de aspas duplas`)
* Math.random() - retorna um valor entre 0 e 1 (use multiplos para aumentar a variação)
* Math.round() - retorna o valor inteiro arredondado de um valor decimal
