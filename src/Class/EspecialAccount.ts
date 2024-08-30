import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  deposit(newDeposit: number): void {
    if (this.validateStatus()) {
      this.setNewBalance(newDeposit + 10);
      console.log("Depostio realizado com sucesso!");
    } else {
      console.log("Conta inválida!");
    }
  }
}
