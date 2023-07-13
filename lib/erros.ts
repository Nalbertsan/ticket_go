/* LISTA DE CODIGOS DE ERRO E SUAS CAUSA */

/*  ERROR 00 - Significa qu algo nos dados esta incorreto(tipo errado) ou nullo ou... .
    ERROR 01 - Significa que o CPF que tentou ser inserido no BD é duplicado.
    ERROR 02 - Significa que o EMAIL que tentou ser inserido no BD é duplicado.
    ERROR 03 - Significa que o a API não conseguiu encontar um determinado usuario com as informações passadas
*/


export class emailDuplicado extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'emailDuplicado';
    }
  }
  
export class cpfDuplicado extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'cpfDuplicado';
    }
  }

  export class registroNaoEncontrado extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'registroNaoEncontrado';
    }
  }