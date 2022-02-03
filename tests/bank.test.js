const Bank = require('../bank.js')

describe('Bank class', () => {
  beforeEach(() => {
    bank = new Bank();
  });

  describe('#deposit', () => {
    it('changes credit by the amount passed as an argument', () => {
      bank.deposit(100);
      expect(bank.credit).toBe(100);
    });
    it('only changes credit by the most recent deposit amount', () => {
      bank.deposit(100);
      bank.deposit(50);
      expect(bank.credit).toBe(50);
    });
  });
  describe('#withdraw', () => {
    it('changes debit by the amount passed as an argument', () => {
      bank.withdraw(100);
      expect(bank.debit).toBe(100);
    });
    it('only changes debit by the most recent withdraw amount', () => {
      bank.withdraw(100);
      bank.withdraw(50);
      expect(bank.debit).toBe(50);
    });
  })
 
});