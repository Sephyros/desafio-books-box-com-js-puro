/*
  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
};

/**
 * Add books to the books box.
 * @param {Integer} numberOfBooksToAdd - The number of book that will be added to the book box.
 */
function addBooks(numberOfBooksToAdd) {
  try {
    if (numberOfBooksToAdd > booksBox.spaces) {
      if (booksBox.spaces === 0) {
        throw "A caixa já está cheia";
      }
      throw `Só cabem mais ${booksBox.spaces} livro${
        booksBox.booksIn === 1 ? "" : "s"
      }`;
    }
    booksBox.booksIn += numberOfBooksToAdd;
    booksBox.spaces -= numberOfBooksToAdd;
    console.log(`${numberOfBooksToAdd} livro adicionado`);
    return console.log(
      `Já há ${booksBox.booksIn} ${
        booksBox.booksIn === 1 ? "livro" : "livros"
      } na caixa`
    );
  } catch (error) {
    console.log(error);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

addBooks(getRandomIntInclusive(1, 5));
addBooks(getRandomIntInclusive(1, 5));
addBooks(getRandomIntInclusive(1, 5));
addBooks(getRandomIntInclusive(1, 5));
