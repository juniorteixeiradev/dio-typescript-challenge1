import { DioAccount } from "./DioAccountController";

export class InvestmentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositInvestment(value: number): void {
    console.log(`Você depositou: ${value},00 R$ e ganhou mais 10,00 R$`);
    this.deposit(value + 10);
  }
}
