import { CompanyAccount } from "./Class/CompanyAccount";
import { InvestmentAccount } from "./Class/InvestmentAccount";
import { PessoaFisicaAcc } from "./Class/PessoaFisicaAcc";

console.log("==== CONTA DE PESSOA FISICA ====");
const contaPF = new PessoaFisicaAcc("Valmir", 1, 98);
console.log(contaPF);
contaPF.activeAccount();
contaPF.deposit(150);
contaPF.withdraw(50);
console.log("====================");

console.log("==== CONTA DE PJ ====");
const contaCompany = new CompanyAccount("Junior", 1);
console.log(contaCompany);
contaCompany.activeAccount();
contaCompany.deposit(300);
contaCompany.withdraw(50);
contaCompany.getLoan(20000);
console.log("====================");

console.log("==== CONTA DE INVESTIMENTO ====");
const contaInvestimento = new InvestmentAccount("Luiz", 2);
console.log(contaInvestimento);
contaInvestimento.activeAccount();
contaInvestimento.depositInvestment(1000);
contaInvestimento.withdraw(50);
console.log("====================");
