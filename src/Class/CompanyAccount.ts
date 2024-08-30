import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  // Empréstimo
  getLoan(newLoan: number): void {
    this.setNewBalance(newLoan);
    console.log("Empréstimo realizado com sucesso!");
  }
}
