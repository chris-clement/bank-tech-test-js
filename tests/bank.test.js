const Bank = require('../bank.js')

describe('Bank class', () => {
  const bank = new Bank()
  it('has a deposit method', () => {
    expect(bank.deposit).toBeTruthy;
  });
});