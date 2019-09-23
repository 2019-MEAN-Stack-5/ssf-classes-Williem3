export class bankAccount {
    owner: string;
    balance: number;
    transactions: number[] = [];

    constructor (name: string, newBalance: number) {
        this.owner = name;
        this.balance = newBalance;
    }

    getBalance() {
        return this.balance;
    }

    withdrawal(amount: number) {
        let balance = this.balance;
        let remainingBalance = balance - amount;
        this.balance = remainingBalance;
        this.transactions.push(amount);

        return amount;
    }

    deposit(amount: number) {
        let newBalance = this.balance + amount;
        this.balance = newBalance;
        this.transactions.push(amount);

        return newBalance;
    }
}
