class Bank {
  constructor() {
    this.credit = 0
  }
  deposit(amount) {
    this.credit = amount
  }
}

module.exports = Bank