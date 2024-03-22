export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  activeAccount(): void {
    this.status = true;
  }
  deactiveAccount(): void {
    this.status = false;
  }
  protected verifyStatusAccount(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta não esta ativada!!!");
  }
  deposit(value: number) {
    if (this.verifyStatusAccount()) {
      this.balance += value;
      // console.log(`Voce depositou: ${value},00 R$`);
      this.getBalance();
    }
  }

  withdraw(value: number): string {
    if (this.verifyStatusAccount() && this.verifyBalance(value)) {
      this.balance -= value;
      console.log(`Voce sacou: ${value},00 R$`);
      this.getBalance();
    }
    return "Saldo Insuficiente ou Conta não está ativada!";
  }

  getBalance() {
    console.log(`Seu saldo atual é:${this.balance},00 R$`);
  }

  protected setBalance(value: number): void {
    this.balance += value;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  verifyBalance(value: number): boolean {
    if (this.balance > value) {
      return true;
    }
    throw new Error("Saldo insuficiente para saque!");
  }
}
