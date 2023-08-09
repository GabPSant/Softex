# Aulas Online

## Pensamento Computacional

### Blikstein (2008) afirma que o pensamento computacional é manusear o computador de forma criativa e eficaz para solucionar problemas.  Então, essa forma de pensar é uma competência que está baseada na resolução de problemas de forma criativa e está fundamentada em quatro pilares  

>decomposição;
>reconhecimento de padrões;  
>abstração;  
>pensamento algorítmico ou simplesmente algoritmo.  

#### **Explicação dos pilares**

* Decomposição:  Divisão do problema em porções menores para facilitar a sua resolução.
* Reconhecimento de padrões: É o conjunto de fatos que apontam um problema.
* Abstração: Consiste em pensar no problema de maneira genérica, ignorando detalhes que não são importantes para a sua resolução.
* Algoritmo: Sequência de passos para resolver o problema.

## Lógica Imperativa

### O que é um algoritmo?

* Sequência de **passos finitos** e **ordenados** para resolver um problema.
* Para construir um algoritmo é necessário:

> 1. A **entrada dos dados** que serão utilizados durante o processo e que são as informações iniciais recebidas;
> 2. o **processamento** desses dados, que é formado pelos passos necessários para atingir uma meta;
> 3. a **saída do resultado** do processamento, que mostra se o resultado foi eficaz ou não.

#### *Obs.* É importante lembrar que o algoritmo não é o resultado final, mas sim todo o processamento para chegar ao resultado

## Estruturas Condicionais

* Representam um fluxo de escolhas escritas em linhas de código.
Quando um usuário precisa tomar uma decisão, podemos utilizar as estruturas condicionais para decidir qual linha de comando deve ser executada a partir da escolha feita por ele, diferente da estrutura sequencial.

* São divididas em:

> 1. simples (if)
> 2. composta (if - else)
> 3. encadeada (if - else if - else)
> 4. multipla escolha (switch)

* Obs. Pagina para melhorar a utilização do git [("Use Git like a senior engineer")](https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e)

## Array

* Tipos de Arrays (importantes)

> Array com tamanho fixo (Ex: let tamanhoFixo = Array(5);)  
> Array usando from (Ex: let arrayPorFrom = Array.from('JavaScript');) - Separa cada letra do string  

* Spread(...): permite unir strings ou arrays (Ex: let numeros = [1,2,3];  let maisNumeros = [...numeros,4,5,6];)
* Manipulação de arrays (Inserção)

> push(): adiciona um ou mais elementos ao final do array  
> unshift(): adiciona um ou mais elementos no início do array  
> splice(): adiciona ou altera o elemento em uma posição especifica  
> Ex1: array.splice(2,0,3) {Adiciona o valor 3 na posição 2 do array (aumenta o tamanho do array)}  
> Ex2: array.splice(2,1,3) {Substitui o valor na posição 2 do array para 3 (mantem o tamanho do array)}

* Manipulação de arrays (Remoção)

> pop(): remove e retorna o último elemento do array  
> shift(): remove e retorna o primeiro elemento do array  
> splice(): pode ser usado para remover um elemento em uma posição especifica  
> Ex: array.splice(2,1) {Remove o elemento da posição 2 do array}

* Manipulação de arrays (iteração com loops)  
Loop forEach - é uma função nativa dos arrays em JavaScript que permite executar uma função para cada elemento do array. Esse loop é uma forma mais simplificada de percorrer os elementos, especialmente quando você não precisa de controle direto sobre o índice.

* Matriz bidimensional: array que contem arrays (array == matriz unidimensional)

## Algoritmo e Estrutura de Dados

### 1. Filas [(código exemplo)](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/fila.js)

* Função: é uma estrutura de dados linear que segue o princípio do "primeiro a entrar, primeiro a sair" (FIFO: First-In-First-Out).

* Características:

> Enfileirar (enqueue) - adicionar um elemento no final da fila [implementasse com push()]
> Desenfileirar (denqueue) - remover um elemento do início da fila [implementasse com shift()]
> Frente (front) - consultar o primeiro elemento da fila
> Fundo (rear) - consultar o último elemento da fila
> Tamanho - a quantidade de elementos na fila [implementasse com length(), só precisa de length()]

### 2. Listas [(código exemplo)](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/lista.js)

* Função: permitem **adicionar**, **remover** e **acessar** elementos por meio de seus índices. Elas são muito versáteis e podem ser usadas para várias tarefas de armazenamento e organização de dados.

* Operações básicas:

> Inserção (insertion) - adiciona um novo elemento em uma posição específica ou no final dela. [implementasse com splice()]
> Remoção (deletion) - remove um elemento específico da lista. [implementasse com splice() e indexOf()]
> Busca (search) - procura um elemento específico da lista e retorna a sua posição ou referência. [implementasse com indexOf()]
> Atualização (update) - modifica o valor de um elemento existente na lista. [implementasse com length()]
> Tamanho (size) - conta o número de elementos na lista. [implementasse com length(), só precisa de length()]
> Verificação se está vazia (isEmpty) - Confere se a lista nõa contem elementos. [implementasse com length(), só precisa de length()]

### 3. Pilhas [(código exemplo)](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/pilha.js)

- Função: são fundamentais em programação para realizar gerenciamento de chamadas de funções, desfazer ações ou rastrear estados temporários. Se assemelham a um empilhado de objetos, onde o último item adicionado é o primeiro a ser removido. Essa ordem de operação é conhecida como Last-In-First-Out (LIFO).

- Operações básicas:

> Empilhar (push) -
> Desempilhar (pop) - 
> Topo (top) - 
> Tamanho (size) -
> Verificar se está vázia (isEmpty) - 