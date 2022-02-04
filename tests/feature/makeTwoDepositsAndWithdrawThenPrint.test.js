const Bank = require('../../bank.js')
// const bankAccountDetails = require('../bankAccountDetails.js')

global.console = {
  log:jest.fn(),
};

describe('Making 2 deposits and 1 withdraw and then print the statement', () => {
  it('Should return a printed statement in the accepted format', () => {
    bank = new Bank();
    bank.deposit(1000, new Date(2023, 1, 10));
    bank.deposit(2000, new Date(2023, 1, 13));
    bank.withdraw(500, new Date(2023, 1, 14));
    bank.printStatement();
    expect(global.console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance\n");
    expect(global.console.log).toHaveBeenCalledWith(
      "14/01/2023 || || 500.00 || 2500.00\n");
    expect(global.console.log).toHaveBeenCalledWith(
      "13/01/2023 || 2000.00 || || 3000.00\n");
    expect(global.console.log).toHaveBeenCalledWith(
      "10/01/2023 || 1000.00 || || 1000.00\n");
  })
})