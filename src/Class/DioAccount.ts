export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Nome
  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };
  getName(): string {
    return this.name;
  }

  // Saldo
  getBalance(): void {
    console.log("Saldo atual:", this.balance);
  }
  setNewBalance(amaut: number): void {
    this.balance += amaut;
  }

  // Deposito
  deposit(newDeposit: number): void {
    if (this.validateStatus()) {
      this.setNewBalance(newDeposit);
      console.log("Depostio realizado com sucesso!");
    } else {
      console.log("Conta inválida!");
    }
  }

  // Saque
  withdraw(newWithdraw: number): void {
    if (newWithdraw <= this.balance && this.validateStatus()) {
      this.setNewBalance(-newWithdraw);
      console.log("Saque realizado com sucesso!");
    } else {
      console.log("Saldo Insuficiente");
    }
  }

  // Validar conta
  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta invalida");
  }
}
