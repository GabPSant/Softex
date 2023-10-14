const nomes = ['Jose', 'Paulo', 'Ricardo', 'Rodrigo'];

for (const posicao in nomes) {// in retorna a posição do elemento no array
    console.log(posicao);
}

for (const nome of nomes) {// of retorna o elemento contido no array
    console.log(nome);
}