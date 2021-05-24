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

const getPluralOrSingular = (quantity, singular, plural) =>
  quantity === 1 ? singular : plural

const getAvaliableSpacesMessage = (spaces, booksIn) => {
  const avaliableSpaces = spaces - booksIn
  const fitPluralOrSingular =
    getPluralOrSingular(avaliableSpaces, 'cabe', 'cabem')
  const bookPluralOrSingular =
    getPluralOrSingular(avaliableSpaces, 'livro', 'livros')
    return `Só ${fitPluralOrSingular} mais ${avaliableSpaces} ${bookPluralOrSingular}`
}

booksBox.addBooks = booksQuantity => {
  const { spaces } = booksBox
  const isBoxFilled = booksBox.booksIn === spaces
  const boxSpacesAreNotEnough = booksBox.booksIn + booksQuantity > spaces

  if (isBoxFilled) {
    return 'A caixa já está cheia'
  }
  
  if (boxSpacesAreNotEnough) {
    return getAvaliableSpacesMessage(spaces, booksBox.booksIn)
  }

  booksBox.booksIn += booksQuantity

  const bookPluralOrSingular =
    getPluralOrSingular(booksBox.booksIn, 'livro', 'livros')
  return `Já há ${booksBox.booksIn} ${bookPluralOrSingular} na caixa`
}

// console.log(booksBox.addBooks(1))
console.log(booksBox.addBooks(4))
console.log(booksBox.addBooks(3))
console.log(booksBox)