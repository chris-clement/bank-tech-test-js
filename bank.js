class Bank {
  constructor() {
    this.credit = 0
    this.debit = 0
  }
  deposit(amount) {
    this.credit = amount
  }
  withdraw(amount) {
    this.debit = amount
  }
}

module.exports = Bank