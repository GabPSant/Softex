# Aulas Online (Indice)

- [Pensamento Computacional (JavaScript básico)](#pensamento-computacional)
- [HTML e CSS](#htmlcss)

## Pensamento Computacional

### Blikstein (2008) afirma que o pensamento computacional é manusear o computador de forma criativa e eficaz para solucionar problemas. Então, essa forma de pensar é uma competência que está baseada na resolução de problemas de forma criativa e está fundamentada em quatro pilares

> decomposição;
> reconhecimento de padrões;  
> abstração;  
> pensamento algorítmico ou simplesmente algoritmo.

#### **Explicação dos pilares**

- Decomposição: Divisão do problema em porções menores para facilitar a sua resolução.
- Reconhecimento de padrões: É o conjunto de fatos que apontam um problema.
- Abstração: Consiste em pensar no problema de maneira genérica, ignorando detalhes que não são importantes para a sua resolução.
- Algoritmo: Sequência de passos para resolver o problema.

## Lógica Imperativa

### O que é um algoritmo?

- Sequência de **passos finitos** e **ordenados** para resolver um problema.
- Para construir um algoritmo é necessário:

> 1. A **entrada dos dados** que serão utilizados durante o processo e que são as informações iniciais recebidas;
> 2. o **processamento** desses dados, que é formado pelos passos necessários para atingir uma meta;
> 3. a **saída do resultado** do processamento, que mostra se o resultado foi eficaz ou não.

#### _Obs._ É importante lembrar que o algoritmo não é o resultado final, mas sim todo o processamento para chegar ao resultado

## Estruturas Condicionais

- Representam um fluxo de escolhas escritas em linhas de código.
  Quando um usuário precisa tomar uma decisão, podemos utilizar as estruturas condicionais para decidir qual linha de comando deve ser executada a partir da escolha feita por ele, diferente da estrutura sequencial.

- São divididas em:

> 1. simples (if)
> 2. composta (if - else)
> 3. encadeada (if - else if - else)
> 4. multipla escolha (switch)

- Obs. Pagina para melhorar a utilização do git [("Use Git like a senior engineer")](https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e)

## Array

- Tipos de Arrays (importantes)

> Array com tamanho fixo (Ex: let tamanhoFixo = Array(5);)  
> Array usando from (Ex: let arrayPorFrom = Array.from('JavaScript');) - Separa cada letra do string

- Spread(...): permite unir strings ou arrays (Ex: let numeros = [1,2,3]; let maisNumeros = [...numeros,4,5,6];)
- Manipulação de arrays (Inserção)

> push(): adiciona um ou mais elementos ao final do array  
> unshift(): adiciona um ou mais elementos no início do array  
> splice(): adiciona ou altera o elemento em uma posição especifica  
> Ex1: array.splice(2,0,3) {Adiciona o valor 3 na posição 2 do array (aumenta o tamanho do array)}  
> Ex2: array.splice(2,1,3) {Substitui o valor na posição 2 do array para 3 (mantem o tamanho do array)}

- Manipulação de arrays (Remoção)

> pop(): remove e retorna o último elemento do array  
> shift(): remove e retorna o primeiro elemento do array  
> splice(): pode ser usado para remover um elemento em uma posição especifica  
> Ex: array.splice(2,1) {Remove o elemento da posição 2 do array}

- Manipulação de arrays (iteração com loops)  
  Loop forEach - é uma função nativa dos arrays em JavaScript que permite executar uma função para cada elemento do array. Esse loop é uma forma mais simplificada de percorrer os elementos, especialmente quando você não precisa de controle direto sobre o índice.

- Matriz bidimensional: array que contem arrays (array == matriz unidimensional)

## [Algoritmo e Estrutura de Dados](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados)

### 1. [Filas](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/fila.mjs)

- Função: é uma estrutura de dados linear que segue o princípio do "primeiro a entrar, primeiro a sair" (FIFO: First-In-First-Out).

- Características:

> Enfileirar (enqueue) - adicionar um elemento no final da fila  
> Desenfileirar (denqueue) - remover um elemento do início da fila  
> Frente (front) - consultar o primeiro elemento da fila  
> Fundo (rear) - consultar o último elemento da fila  
> Tamanho (size) - a quantidade de elementos na fila

### 2. [Listas](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/lista.mjs)

- Função: permitem **adicionar**, **remover** e **acessar** elementos por meio de seus índices. Elas são muito versáteis e podem ser usadas para várias tarefas de armazenamento e organização de dados.

- Operações básicas:

> Inserção (insertion) - adiciona um novo elemento em uma posição específica ou no final dela.  
> Remoção (deletion) - remove um elemento específico da lista.  
> Busca (search) - procura um elemento específico da lista e retorna a sua posição ou referência.  
> Atualização (update) - modifica o valor de um elemento existente na lista.  
> Tamanho (size) - conta o número de elementos na lista.  
> Verificação se está vazia (isEmpty) - Confere se a lista nõa contem elementos.

### 3. [Pilhas](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados/pilha.mjs)

- Função: são fundamentais em programação para realizar gerenciamento de chamadas de funções, desfazer ações ou rastrear estados temporários. Se assemelham a um empilhado de objetos, onde o último item adicionado é o primeiro a ser removido. Essa ordem de operação é conhecida como Last-In-First-Out (LIFO).

- Operações básicas:

> Empilhar (push) - recebe um parâmetro, que é o elemento que você deseja adicionar à pilha.  
> Desempilhar (pop) - não recebe parâmetro, pois ela vai desempilhar o elemento do topo da pilha.  
> Topo (top) - função não recebe parâmetro, pois ela apenas retorna o elemento que está no topo da pilha, sem modificá-lo  
> Tamanho (size) - não recebe parâmetro, pois ela apenas retorna o elemento que está no topo da pilha, sem modificá-lo.  
> Verificar se está vázia (isEmpty) - não recebe parâmetro, pois ela apenas verifica se a pilha está vazia.

#### **Obs**. Com Node.js em versão 14 ou superior é possivel usar a extensão 'mjs' (module javascript) para exportar e importar arquivos javascript (importante lembrar que tanto o arquivo que importa quanto o que exporta deve ter essa extensão)

## [Estruturas de Dados Dinamicas](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/estruturas_de_dados_dinamicos)

### Arvores

- é uma das estruturas de dados mais versáteis, sendo amplamente utilizada na ciência da computação. Ela é composta por nós conectados pelas arestas, formando uma estrutura hierárquica semelhante a uma árvore. Na programação, cada árvore tem um nó raiz (root), que é o ponto de partida para percorrê-la. Além disso, cada nó pode ter zero ou mais nós filhos, mas apenas um nó pai
- Assim como o mapa de navegação, as árvores ligadas são uma estrutura de dados que organiza informações de forma hierárquica, interligada e eficiente

- Operações fundamentais:

> 1. Nó (node): É um elemento individual em uma árvore. Cada nó contém um valor (dados) e uma referência para seus nós filhos.
> 2. Raiz (root): É o nó inicial da árvore, ou seja, o ponto de partida para percorrer toda a estrutura.
> 3. Nó filho (child): É o nó que está diretamente abaixo de outro na hierarquia.
> 4. Nó pai (parent): É o nó que está diretamente acima de outro na hierarquia.
> 5. Nó folha (leaf): É o nó que não possui nós filhos, ou seja, está na extremidade da árvore.
> 6. Nível (level): É o número de arestas entre o nó e a raiz. O nível da raiz é 0 e a aresta é a ligação de um nó com outro.
> 7. Altura (higth): É o número de níveis em uma árvore. Caso uma árvore tenha apenas um nó, ou seja, o nó raiz, sua altura é zero (altura = nivel até chegar na folha).

- Função: As árvores são utilizadas para resolver diversos problemas na ciência da computação e engenharia de software

> 1. _Estruturas de dados avançadas_: as árvores são a base para muitas estruturas de dados importantes, como árvores de busca binária, árvores de segmentos, árvores AVL, árvores B, entre outras.
> 2. _Pesquisas eficientes_: as árvores de busca binária são, especialmente, úteis para pesquisas em grandes conjuntos de dados ordenados.
> 3. _Jogos e inteligência artificial_: as árvores de jogos são usadas para analisar as várias opções e determinar a melhor jogada possível.

- Beneficíos: Árvores na programação são estruturas hierárquicas que nos possibilitam organizar dados de forma inteligente e eficiente, trazendo elegância e agilidade para nossos algoritmos.

### Listas Encadeadas

- As listas ligadas ou encadeadas são estruturas de dados fundamentais. Elas consistem em uma sequência de elementos chamados de "nós", onde cada um aponta para o próximo.
- Diferentemente dos arrays, as listas ligadas não precisam alocar memória contínua para armazenar os elementos, sendo dinâmicas e flexíveis.
- Conceitos básicos:

> 1. Nó (node): É a unidade básica de uma lista ligada. Contém o dado a ser armazenado e um ponteiro (referência) para o próximo nó da lista.
> 2. Cabeça (head): É o primeiro nó da lista. Serve como ponto de partida para percorrer toda a estrutura.
> 3. Cauda (tail): É o último nó da lista. Seu ponteiro aponta para null, indicando o fim da lista.
> 4. Ponteiro (pointer): É a referência de um nó para o próximo da lista, mantendo a conexão entre eles.

- Função: As listas ligadas podem ser aplicadas em diversos cenários. Por exemplo, quando não sabemos a quantidade exata de elementos que precisamos armazenar ou quando as operações de inserção e remoção de elementos são frequentes.

> 1. _Gerenciamento de memórias_: As listas ligadas são comumente usadas em sistemas operacionais para gerenciar a memória livre e a ocupada.
> 2. _Implementação de filas e pilhas_: Essas estruturas podem ser facilmente implementadas por meio das listas ligadas. A inserção e remoção ocorrem sempre no início (pilhas) ou no final (filas) da lista.
> 3. _Listas encadeadas duplamente encadeadas_: Nesta variação, cada nó possui um ponteiro para o próximo e outro para o nó anterior, permitindo percorrer a lista em ambas as direções.

- Operações básicas:

> Inserção no início (push) - Adiciona um novo elemento no início da lista, tornando-o o novo nó cabeça (head).  
> Inserção no fim (shift) - Adiciona um novo elemento no final da lista, tornando-o o novo nó cauda (tail).  
> Inserção no meio (splice) - Adiciona um novo elemento em uma posição específica da lista.  
> Remoção no início (pop) - Remove o primeiro elemento da lista. O segundo será a nova cabeça.  
> Remoção no fim - Remove o último elemento da lista. O penúltimo será o novo nó cauda.
> Remoção no meio - Remove um elemento de uma posição específica da lista.
> Busca (search) - Essa operação procura por um elemento específico na lista e, caso seja encontrado, retorna o nó correspondente (a busca geralmente começa pela cabeça).
> Tamanho da lista - Essa operação conta o número de elementos presentes na lista (se avalia começando da cabreça até a cauda).

- Classe Nó: Define a menor estrutura de uma lista ligada, que é o nó. Ela possui um construtor e dois atributos (Nome e próximo). Nome pode ser passado no construtor do nó durante a instância e deve receber uma string contendo o nome. Já o atributo próximo deve receber um outro objeto do tipo nó.
- Classe ListaLigada: Essa classe define a estrutura ligada com vários nós e as operações necessárias para a manipulação da lista ligada. Ela possui um construtor que recebe o nó cabeça da lista, além de ter os métodos referentes às operações que vimos anteriormente.
- Métodos da classe ListaLigada:

> 1. addFirst: Esse método instancia um novo nó com um nome que será adicionado. O novo nó recebe a cabeça da lista ligada como o próximo. Assim, a nova cabeça passa a ser o nó que foi adicionado.
> 2. addLast: Esse método instancia um novo nó com um nome que será adicionado. Se esse nó for o primeiro da lista, ele se tornará a nova cabeça. Caso contrário, a operação fica sendo executada até que o próximo de algum nó esteja vazio. Quando isso acontecer, o novo nó será encadeado na lista ligada.
> 3. removeFirst: Esse método sempre remove o primeiro elemento de uma lista ligada, o qual sempre será o primeiro e, por isso, sempre será a cabeça da lista ligada. Dessa forma, a nova cabeça será o próximo nó da cabeça que será removida.
> 4. removeLast: Esse método sempre remove o último elemento de uma lista ligada. Para isso, deve-se sempre começar da cabeça da lista, verificando se o próximo é vazio. Se o próximo de um nó for vazio, esse é o nó que será removido.
> 5. search: Verifica se o elemento do nó é igual ao que está sendo pesquisado. Se sim, retorna o nó encontrado. Caso contrário, vai para o próximo do nó e continua pesquisando. Se chegar ao fim da lista e ainda não ter encontrado o nó, o valor retornado é nulo.

## [Algoritmos de Busca](https://github.com/GabPSant/Softex/tree/main/codigos-testes/javascript/algoritmos_de_busca)

- Essas ferramentas nos permitem localizar elementos em listas, vetores ou estruturas de dados de forma rápida e inteligente.
- São técnicas fundamentais na ciência da computação e têm aplicação em diversas áreas, como pesquisa em bancos de dados e resolução de problemas em inteligência artificial.
- Eles permitem que você encontre um elemento específico em uma estrutura de dados, como lista, array ou árvore, de forma eficiente.
- Existem diferentes tipos de algoritmos de busca, sendo os principais a **busca linear** e a **busca binária**. Ambos possuem as suas particularidades e são os mais adequados para determinados cenários.

### Busca linear ou sequencial

- É o método mais simples de busca, no qual os elementos são percorridos sequencialmente até que o valor procurado seja encontrado ou a busca termine. Ele é útil quando a coleção de dados não está ordenada ou quando não se sabe a posição exata do elemento procurado. No pior caso, a busca linear tem uma complexidade de tempo _O(n)_, sendo "n" o número de elementos na coleção.
- Essa abordagem é útil quando os elementos estão desordenados ou quando a lista é **pequena o suficiente** para ser percorrida facilmente.
- Conceitos:

> 1. _Coleção de dados_: Essa estrutura contém os elementos que serão pesquisados. Pode ser um array, uma lista ou qualquer outra que possibilita o acesso sequencial aos elementos.
> 2. _Elemento de busca_: É o valor que desejamos encontrar na coleção de dados.
> 3. _Percorrer a coleção_: Significa analisar cada elemento da coleção até que o buscado seja encontrado.
> 4. _Complexidade de tempo_: No pior caso, a busca linear precisa percorrer todos os elementos da coleção. Portanto, a sua complexidade de tempo é O(n), sendo "n" o número de elementos na coleção.

- Obs. Não muito eficiênte para grandes conjuntos de dados.

### Busca binária

- É o método mais eficiente para aplicar em coleções ordenadas. A sua estratégia consiste em dividir, repetidamente, a coleção ao meio, descartando metade dos elementos a cada passo até que o valor seja encontrado.
- A busca binária tem uma complexidade de tempo O(log n), que é consideravelmente mais rápida do que a busca linear, especialmente em coleções grandes.
- A busca binária é uma estratégia inteligente, pois **reduz significativamente** o espaço de busca a cada tentativa.
- Conceitos:

> 1. _Coleção ordenada de dados_: A busca binária exige que a coleção de dados esteja ordenada, seja em ordem crescente ou decrescente. Caso contrário, não será possível aplicar a estratégia de descarte da metade da coleção.
> 2. _Divisão recursiva_: O algoritmo divide, repetidamente, a coleção ao meio, comparando o valor buscado com o do meio da coleção. Dependendo da comparação, o algoritmo prossegue com a busca na metade esquerda ou direita da coleção.
> 3. _Complexidade de tempo_: A complexidade de tempo da busca binária é O(log n), sendo "n" o número de elementos na coleção. Isso significa que a busca binária é muito mais rápida em coleções grandes do que a busca linear O(n), tornando-a uma opção muito eficiente.

- Obs. Só funciona em coleções ordenadas, muito eficiente para grandes conjuntos de dados.

## HTML/CSS

### HTML (HyperText Markup Language)

- Linguagem de Marcação de [Hipertexto](https://tableless.com.br/sobre-hipertextos/), em português, é um conjunto de sinais e códigos aplicados a um texto, que contribui para definir exibições na tela e estruturas de dados em um sistema.
- Serve para o navegador interpretar os elementos de uma página. É ela que dá a estrutura da página, ou seja, dá significado e organiza as informações de uma página na web. Sem a HTML, o navegador não conseguiria exibir textos, elementos ou carregar imagens.
- Surgiu a partir da necessidade de criar, editar e compartilhar hipertextos pela internet.

#### Tags/Hipertexto

- DOM (Document Object Model ou Módelo de Objeto de Documentos): é um modelo de documento carregado pelo navegador. Este documento é representado através de uma árvore de nós, onde cada um destes nós representa uma parte do documento (por ex. um elemento, texto ou comentário).
- Função: as tags são estruturas de linguagem de marcação. Elas contêm instruções que servem para informar a estrutura do site ao navegador e construir elementos da HTML. Quando são utilizadas corretamente, elas contribuem bastante para o [SEO](https://rockcontent.com/br/blog/o-que-e-seo/) de um site.

##### Atributos

1. **class**: Atribui uma classe CSS para uma tag. Isso faz com que a CSS e a linguagem Javascript selecionem e acessem elementos específicos do código HTML;
2. **id**: Atribui um id CSS para uma tag. Seu objetivo é identificar o elemento quando utilizar scripts ou estilizar com CSS;
3. **href**: Referenciar um URL externo, seja um link ou um arquivo;
4. **src**: Atribui um URL para um conteúdo. Por exemplo, uma imagem ou um arquivo;
5. **type**: Atribui o tipo do elemento;
6. **value**: Atribui o valor padrão de um elemento.

##### Classificação/Tipos de tags

- É possível categorizar as tags em dois tipos: o block-level (nível de bloco) e o inline (em linha). O primeiro ocupa todo o espaço do seu elemento pai e o segundo ocupa apenas o espaço do seu conteúdo.
- Tags básicas (servem para definir a estrutura fundamental da página):
  - DOCTYPE - Responsável pela versão HTML usada na página e a tag HTML.  
  - HTML - estrutura a página web  
- Tags metadados (responsáveis para guardar informações da página como estilos, scripts e dados. Ajuda na renderização da página pelo navegador)
  - head ->  contem os dados metas
    > link: representa o link que sera usado no arquivo html  
    > meta: representa informações que não podem ser lidas em outras formatos  
    > style: representa informações de estilo usadas no arquivo html  
    > title: contem o título da página
- Tags de separação de contéudo (responsáveis pela organização lógica da página):
  - address -> Contêm as informações de contato do autor
  - h1 a h6 -> Definem o tamanho do título
  - article -> representa uma região independente que pode conter certo conteúdo
  - aside -> representa a região lateral da página (tem uma relação paralela com o conteúdo príncipal/main)
  - footer -> representa o ródape da página, geralmente contêm as informações do autor, direitos autorais ou links relacionados
  - header -> representa o cabeçalho, contêm a introdução da página e contêm apoio para navegar pela página
- Tags de texto (responsáveis por todos os tipos de texto que serão impressos na página):
  - p -> elemento paragrafo, é usado para criar linhas de texto
  - hr -> é usado para separar os paragrafos do html
  - div -> é um container genérico, pode ser usado para agrupar items para estilizar a página
  - ol -> ordeneted list (lista ordenada), serve para criar listas ordenadas
  - ul -> unordeneted list (lista não ordenada), serve para criar listas não ordenadas
  - li -> list item (item de lista), é necessário para definir um item da lista
- Tags para semântica textual inline (utilizada para definir a estrutura, linha ou significado de qualquer outro tipo de texto):
  - a -> elemento âncora, é usado para criar uma hiperligação entre páginas web, arquivos, endereçõs de e-mail etc.
  - b -> Usado para separar certos elementos semânticos do texto. (não são de grande importância semântica, só tem uma semântica diferente do texto no qual estão contidos).
  - br -> Serve para quebrar a linha dos textos.
  - q -> é usado para citações ([explicação](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/q))
  - strong -> coloca o texto em negrito (usado para textos com muita importância).
- Tags de multimídia (Manipulam imagens e vídeos):
  - img -> representa a inserção de imagem no documento
  - iframe -> é uma tag que permite a exibição de um elemento dentro de outro elemento ([explicação](https://www.hostinger.com.br/tutoriais/o-que-e-iframe))
  - picture -> contem as tags 'img' e 'source' ([explicação](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture))
  - source -> é usado para contem as fontes/hiperlinks de imagens, audios e vídeos
- Tags de tabelas (são usadas, hoje em dia, na criação de templates de e-mail):
  - table -> cria a tabela no html (contém todas as outras tags)
  - tbody -> define o corpo da tabela
  - td -> define as celulas da tabela
  - tr -> define uma linha na tabela
- Tags de formulário (usadas para criar formatação e input):
  - form -> usada para criar formulários (contém todas as outras tags)
  - input -> tag usada para definir imput do usuário
  - label -> tag usada para definir uma legenda para um item em uma interface de usuário
  - button -> representa um botão clicável
  - fieldset -> agrupa os elementos do formulário de forma organizada
  - legend -> representa um rótulo para o conteúdo do 'fieldset'
  - option -> representa uma opção dentro do campo 'select', 'datalist' ou 'optground'
  - textarea -> conseguir receber input do usuário em formato livre, como um comentário ou formulário de retorno
- Tags de Script (permitem a ligação direta da linguagem JavaScript para objetos dinâmicos):
  - canvas -> pode ser usado para criar gráficos usando scripts ([explicação](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/canvas))
  - noscript -> quando é necessário usar um script não suportado pelo navegador da página
  - script -> serve para executar código dentro do html.
- Forms
  - Servem para criar formulários (contem as tags input)