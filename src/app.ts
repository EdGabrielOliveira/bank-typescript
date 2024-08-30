import { PeopleAccount } from "./Class/PeopleAccount";
import { CompanyAccount } from "./Class/CompanyAccount";
import { EspecialAccount } from "./Class/EspecialAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1021, "User", 2246);
const companyAccount: CompanyAccount = new CompanyAccount("Dio", 2024);
const especialAccount: EspecialAccount = new EspecialAccount("Vip", 2352);

// CONTA PEOPLE --------------------------------------------
console.log("======================================================");
console.log("PEOPLE");
console.log("======================================================");
peopleAccount.getBalance(); // Exibe o saldo atual
// Set valor
peopleAccount.setNewBalance(200); // Define um saldo a conta
peopleAccount.getBalance(); // Exibe o saldo atual
// Depósito
peopleAccount.deposit(10); // Deposita um valor a conta
peopleAccount.getBalance(); // Exibe o saldo atual
// Saque
peopleAccount.withdraw(60); // Saca um valor da conta
peopleAccount.getBalance(); // Exibe o saldo atual

// CONTA COMPANY -------------------------------------------
console.log("======================================================");
console.log("COMPANY");
console.log("======================================================");
companyAccount.getBalance(); // Exibe o saldo atual
// Set valor
companyAccount.setNewBalance(300); // Define um saldo a conta
companyAccount.getBalance(); // Exibe o saldo atual
// Depósito
companyAccount.deposit(10); // Deposita um valor a conta
companyAccount.getBalance(); // Exibe o saldo atual
// Saque
companyAccount.withdraw(40); // Saca um valor da conta
companyAccount.getBalance(); // Exibe o saldo atual
// Empréstimo
companyAccount.getLoan(100); // Realiza um empréstimo
companyAccount.getBalance(); // Exibe o saldo atual

// CONTA ESPECIAL --------------------------------------------
console.log("======================================================");
console.log("ESPECIAL");
console.log("======================================================");
especialAccount.getBalance(); // Exibe o saldo atual
// Set valor
especialAccount.setNewBalance(140); // Define um saldo a conta
especialAccount.getBalance(); // Exibe o saldo atual
// Depósito
especialAccount.deposit(60); // Deposita um valor a conta
especialAccount.getBalance(); // Exibe o saldo atual
// Saque
especialAccount.withdraw(50); // Saca um valor da conta
especialAccount.getBalance(); // Exibe o saldo atual
