class Bank {
  constructor() {
    this.credit = 0
    this.debit = 0
    this.date = 0
  }
  deposit(amount, date = new Date()) {
    this.debit = 0;
    this.credit = amount;
    this.date = date;
  }
  withdraw(amount) {
    this.credit = 0;
    this.debit = amount;
  }
}

module.exports = Bank