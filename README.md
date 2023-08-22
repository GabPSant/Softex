# [Softex](https://softex.br/)

## Indíce

- [1º Matéria (lógica de programação e JavaScript)](#1º-matéria-lógica-de-programação-e-javascript)
  - [1º Aula (Conceitos básicos - Parte 1)](#1º-aula)
  - [2º Aula (Conceitos básicos - Parte 2)](#2º-aula)
  - [3º Aula (Conceitos básicos - Parte 3)](#3º-aula)
  - [4º Aula (Entrada e manipulação de dados)](#4º-aula)
  - [5º Aula (Condicionais e controle de fluxo)](#5º-aula)
  - [6º Aula (Estruturas de repetição - Parte 1)](#6º-aula)
  - [7º Aula (Estruturas de repetição - Parte 2)](#7º-aula)
  - [8º Aula (Funções)](#8º-aula)
- [2º Matéria (HTML/CSS)](#2º-matéria-htmlcss)
  - [9º Aula (HTML - Parte 1)](#9º-aula)
  - [10º Aula (HTML - Parte 2)](#10º-aula)

## 1º Matéria (lógica de programação e JavaScript)

### 1º Aula

#### Algoritmos, lógica de programação

- Fases e descrições de algoritmos:

> Entrada -> Processamento -> Saida  
> Entrada: valores recebidos pelo sistema  
> Processamento: aplicação do algoritmo utilizando os valores recebidos  
> Saida: resultado do algoritmo esperado

- Formas de representar o algoritmos:

> Narrativa: descrição literal do algoritmo (sequencias de passos)  
> Fluxograma: descrição através de um gráfico mostrando o fluxo do algoritmo (Inicio -> Fim)  
> Pséudocódigo: Criar a ideia de um código (usa somente a lógica para demonstrar o código)

- Pensamento sub-algoritmo (principil de facilitar o entendimento do código ao dividir o algoritmo total em sub-partes)

#### JavaScript

- Linguagem de programação voltada para aplicações **web** e **mobile**
- **Fácil execução** e pode ser executada no navegador da internet
- Uma das **mais populares** no mundo. **Fundamental** para os **programadores**
- Executando JavaScript (locais onde pode ser executado)

> 1. Pelo navegador
> 2. Pela plataforma [CodePen](https://codepen.io/)
> 3. Pelo Visual Studio Code (VS Code)

##### **Tipos de dados e variáveis**

- Criando Arquivos base

> 1. ctrl + N (atalho para criar um arquivo novo)
> 2. (nome do arquivo).(tipo de arquivo [html, js, py, css etc])

- Tipos de dados básicos:

> 1. String (valores com texto)
> 2. Integer (números sem vírgula)
> 3. Float (números com vírgula)
> 4. Boolean (valores binários [1,0 / sim ou não])
> 5. Objeto (conjunto de valores)

- Tipos de dados avançados:

> 1. Infinity (um numero extremamente pequeno)
> 2. NaN (um valor não possível [exemplo: ])
> 3. Null (diferente de zero, não é valor vazio [ocupa espaço na memoria]) - lógica: pense em um voto nulo nas eleições
> 4. Undefined (espaço de memória ainda não preenchido, não está definido)

- Tipos de variáveis:

> const - variáveis de valores constantes, não podem ter seus valores alterados (devem ser inicializados no começo)  
> let - são variáveis que podem ter seus valores alterados **quantas vezes quiser**. Só pode ser vista dentro de um escopo (se estiver no escopo global, pode ser vista globalmente. Se estiver em um local, só sera vista no local)  
> var - são variáveis que podem ter seus valores alterados **quantas vezes quiser**. Podem ser vista em qualquer escopo(não recomendado o uso pois pode causar confusão no sistema).  
> let (nome da variável) = [...] - serve para manter vários valores em uma mesma variável.

- typeof("tipo de", serve para apresentar o tipo de uma variável)(Exemplo: console.log(typeof nome))

##### **Operadores Lógicos**

- Operadores matemáticos básicos (+, -, \*, /, %, ==, !=, >, <)

### 2º Aula

- Prática de algoritmo - utilizando os tipos de descrição (narrativa, fluxograma, pseudocódigo)

### 3º Aula

- Prática com Javascript
- Site que ensina Back-end ([Boot.dev](https://boot.dev/)), Python e Go (encontrei durante os estudos, o site está em inglês).

### 4º Aula

#### Entrada e Manipulação de dados

##### 1. Entrada de Dados

- O objetivo do JavaScript é deixar o site dinâmico (uso do comando prompt, para mandar uma mensagem para o console)

##### 2. Conversão de Dados (Cast)

- Formas de altetar:

> Number("variável") - converte a variável para o tipo Number (número)
> String("variável") - converte a variável para o tipo String (caractere)

##### 3. Manipulação de Dados

- Concatenação de Dados [Ex: (variável1 + variável2)] {é possivel fazer com diferentes tipos de dados}
- para poder usar printf em JavaScript se deve usar duas crases (`) ao inves de aspas ("").  Ex: let macaco = "coisa de macaco"
console.log(`${macaco} usar crase ao inves de aspas duplas``)
- Math.random() - retorna um valor entre 0 e 1 (use multiplos para aumentar a variação)
- Math.round() - retorna o valor inteiro arredondado de um valor decimal

### 5º Aula

#### Condicionais e controle de fluxo

##### 1. Condicionais simples

- Condicional unica (if e else): define o fluxo de dados atraves de uma condicional booleana. Tem um caminho caso a posibilidade seja verdadeira e outro se for falsa.
- Condicional encadeada (if, else if e else): define o fluxo de dados através de uma ou mais condições booleanas. Tem diversos caminhos, dependendo do proposito específico.

> Obs. Combinação de condicionais (&& e ||): permite juntar condições diferentes em um mesmo condicional.
> && (E): representa que ambas as condições devem ser verdadeiras para a condicional ser true.
> || (OU): representa que pelo menos uma das condições é verdadeira, a condicional será verddadeira.

##### 2. Condicionais predefinidas

- Condicional interruptor (switch/case): permite criar condicionais pré-definidas (cases) em um interruptor (switch) conectado a um valor (condicional.)

> Obs. default: representa um 'case' especial que só vai rodar caso todos os outros cases não forem usados.
> break: serve para quebrar o fluxo de dados, importante no switch para que as outras condições não ocorram quando se busca uma em específico.

##### 3. Condicionais de erro

- try/catch (tentar/pegar): vai testar parte do código, se funcionar continua rodando, se não funcionar o sistema avisa que deu um erro no sistema.
- Obs. se uma string for altera usando o construtor 'Number' ou 'parseInt' o resultado é NaN (vazio)

### 6º Aula

#### Estruturas de repetição (Parte 1)

- Representa um bloco que deve ser repetido um certo número de vezes até certa condição seja alcançada (serve para evitar reescrita de código).

##### For

- Ex: **for**(let i = 0; i < x; i++){...}

> i - representa uma variável mutável (iterador)
> i<x - representa uma condição que continua a repetição, enquanto verdadeira
> i++ - incremento da variável

- break: interrompe totalmente o processo de repetição.
- continue: pula uma repetição do processo de repetição.
- É possível fazer iterações de listas ([código explicando o conceito](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/testeFor.js))

### 7º Aula

#### Estruturas de repetição (Parte 2)

##### While

- Ex: **while**(i<x){... i++}

> i - representa uma variável mutável (iterador)
> i<x - representa uma condição que continua a repetição, enquanto verdadeira
> i++ - atualização da variável iteradora

- Importância:

> Usado quando o número de iterações não é conhecida
> Não precisa definir um contador na estrutura
> Repete infinitamente enquanto a condição não é atendida
> Não itera sobre listas (não é ideal, preferrível usar o _for_)

##### Do... While

- Ex: **do**{...}**while**(i<x)
- É como o while, mas ele primeiro executa o comando (do) e depois avalia a condição (while). Tem início pré-definido.

### 8º Aula

#### Funções

- São usadas para **agrupar blocos de código** e **evitar a repetição deles**.
- Uma função pode **recebe parametros de entrada** e **emite uma saída**

## 2º Matéria (HTML/CSS)

### 9º Aula

- revisão geral e fim do 1º módulo;

#### HTML (HyperText Markup Language) - Parte 1

##### Tags

- Função: são usadas para **envolver elementos** e definir sua função
- html -> tag que contem todo o arquivo/estrutura html
- head -> contem a metadata do seu arquivo

> Obs. (meta charset = "UTF-8) contem o arquivo de dados do HTML

###### 1. Tags de texto

- Títulos e subtítulos (h1 a h6): permite criar títulos (h1) e subtítulos (h2 a h6) na página
- Parágrafo (p): permite criar textos parágrafos padrão (cada um quebra a linha)
- Outros tipos:

> strong -> negrito  
> em -> texto em itálico  
> span -> tag génerica de texto  
> br -> quebra de linha (precisa de uma para quebrar)

###### 2. Tágs de lista

- Listas ordenadas (ol -> ordeneted list): cria listas ordenadas
- Listas aninhadas (ul -> unordeneted list): cria listas não ordenadas

> Obs. li (list item) -> defini o elemento especifico da lista

###### 3. Links e navegação

- links básicos:
  > a (anchor/âncora) -> tag que contem o link
  > href = "link url ou arquivo local" -> defini o destino do link

### 10º aula

#### HTML (HyperText Markup Language) - Parte 2

##### Tags

###### 4. Imagens e mídia

- Imagem (img):
  > src -> para buscar um arquivo de imagem  
  > alt -> descrição alternativa da imagem

- Vídeo (video):
  > src -> para buscar um arquivo de vídeo  
  > controls -> adiciona controles de repetição do vídeo

- Áudio (audio):
  > src -> para buscar um arquivo de áudio  
  > controls -> adiciona controles de reprodução de áudio

###### 5. Tabelas

- table: tag de **contêiner** principal para a tabela
- tr: define uma **linha** na tabela
- th: é usado para **cabeçalhos** de coluna
- td: define as **células** dos dados
- thead : define o cabeçalho da tabela (isso ajuda a diferenciar visualmente o cabeçalho do restante da tabela)
- tbody : define o corpo da tabela
- tfoot : define o rodapé da tabela (é comumente usado para <ins>informações adicionais</ins> sobre a tabela)

###### 6. Formulários

- form: usado para criar formulários em HTML
- Tipos de entrada
  > input:  
  > --> Texto  
  > --> Senha  
  > --> Múltipla escolha  
  > --> Caixa de seleção  
  > select: uso do comando option (serve para definir opções para o usuário)

- button: envio do formulário
- Rótulos (label)
  - label - é usado para <ins>associar</ins> um rótulo a um elemento de formulário.  
  - for - é usado em label **para corresponder ao atributo** id **do elemento de formulário**

- Agrupamentos de elementos de formulário
  - fieldset - define o bloco de agrupamento  
  - legend - fornece uma legenda descritiva para o grupo

###### 7. Estruturação avançada

- tag div: usada para criar uma divisão lógica ou seção de contéudo (é uma tag genérica que pode seu usada para <ins>agrupar elementos</ins> e <ins>aplicar estilos</ins> ou comportamentos a eles)
- Seções
  - Cabeçalho (header): usada para representar uma **seção de navegação** em um documento. Ela é usada para incluir o **logotipo**, o **título do site**, **menus denavegação** e outros elementos introdutórios.  
  - Navegação (nav): usado para representar uma **seção de navegação** em um documento. Ela é usada para **agrupar links que levam a outras páginas do site** ou a diferentes seções da mesma página.  
  - Conteúdo principal (main): é usada para **envolver o conteúdo principal** de um documento. Geralmente, **só deve háver um main** por página, e ele deve conter o contéudo central do documento.  
  - Seções (section): é usada para **divider o conteúdo de uma página** em seções temáticas distintas. Ela é usada para **agrupar e estruturar semanticamente** o contéudo relacionado.  
  - Composição (article): é usada para **representar uma composição autônome** e independendte dentro de uma página. Ela é adequada para contéudo que pode  ser distribuído e **reutilizado** de forma independente , como **postagens de blog**, **notícias**, etc.
  - Conteúdo relacionado (aside): é usada para **representar conteúdo relacionado** ou suplementar que está separado do conteúdo principal. Ela pode conter informações adicionais, como **barras laterais**, **anúncios**, **contéudo relacionado**, entre outros.
  - Rodapé (footer): é usada para **representar o rodapé de um documento** ou seção. Geralmente, é usada para incluir **informações de direitos autorais**, **links para páginas relacionais**, **informações de contato**, entre outros.

- Visão geral:
  - Essas tags fornecem **uma melhor semântica e estruturação** do conteúdo.  
  - **Não são obrigátorias**, e o seu emprego deve ser feito **de acordo com a finalidade e estrutura do seu site**.