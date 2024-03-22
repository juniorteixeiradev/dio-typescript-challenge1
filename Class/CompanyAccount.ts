import { DioAccount } from "./DioAccountController";
export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(value: number): string {
    if (this.verifyStatusAccount()) {
      console.log(`Você fez um emprestimo de ${value}`);
      this.setBalance(value);
    }
    return "";
  }
}
