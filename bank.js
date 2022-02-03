class Bank {
  constructor() {
    this.credit = 0
    this.debit = 0
  }
  deposit(amount) {
    this.debit = 0;
    this.credit = amount;
  }
  withdraw(amount) {
    this.credit = 0;
    this.debit = amount;
  }
}

module.exports = Bank