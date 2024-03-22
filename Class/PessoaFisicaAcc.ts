import { DioAccount } from "./DioAccountController";
export class PessoaFisicaAcc extends DioAccount {
  doc_id: number;

  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
