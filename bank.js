class Bank {
  constructor() {
    this.credit = 0;
    this.debit = 0;
    this.date = 0;
    this.transaction_history = [];
  }
  deposit(amount, date = new Date()) {
    this.debit = 0;
    this.credit = amount;
    this.date = date;
  }
  withdraw(amount, date = new Date()) {
    this.credit = 0;
    this.debit = amount;
    this.date = date;
  }
  add_to_transaction_history() {
    this.transaction_history.push({ date: this.date, debit: this.debit, credit: this.credit})
  }
}

module.exports = Bank