const Bank = require('../bank.js')

describe('Bank class', () => {
  const bank = new Bank()
  describe('#deposit', () => {
    it('is a method within Bank', () => {
      expect(bank.deposit).toBeTruthy;
    });
    it('changes credit by the amount passed as an argument', () => {
      bank.deposit(100)
      expect(bank.credit).toBe(100);
    });
  });
 
});