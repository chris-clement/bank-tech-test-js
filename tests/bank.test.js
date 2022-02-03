const Bank = require('../bank.js')

describe('Bank class', () => {
  beforeEach(() => {
    bank = new Bank();
  });

  describe('#deposit', () => {
    it('is a method within Bank', () => {
      expect(bank.deposit).toBeTruthy;
    });
    it('changes credit by the amount passed as an argument', () => {
      bank.deposit(100)
      expect(bank.credit).toBe(100);
    });
    it('only changes credit by the most recent deposit amount', () => {
      bank.deposit(100)
      bank.deposit(50)
      expect(bank.credit).toBe(50);
    });
  });
 
});