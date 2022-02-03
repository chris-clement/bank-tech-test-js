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
    it('sets debit variable to 0', () => {
      bank.withdraw(50);
      bank.deposit(100);
      expect(bank.debit).toBe(0);
    });
    it('has an associated date, assumed to be today if no date given', () => {
      bank.deposit(100);
      expect(bank.date.getDate()).toEqual(new Date().getDate());
      expect(bank.date.getMonth()).toEqual(new Date().getMonth());
      expect(bank.date.getFullYear()).toEqual(new Date().getFullYear());
    });
    it('if certain date is entered, this is stored in the date variable', () => {
      bank.deposit(100, new Date(2022, 1, 1));
      expect(bank.date.getDate()).toEqual(1);
      expect(bank.date.getMonth()).toEqual(1);
      expect(bank.date.getFullYear()).toEqual(2022);
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
    it('sets credit variable to 0', () => {
      bank.deposit(100);
      bank.withdraw(50);
      expect(bank.credit).toBe(0);
    });
    it('has an associated date, assumed to be today if no date given', () => {
      bank.withdraw(100);
      expect(bank.date).toEqual(new Date());
    });
    it('if certain date is entered, this is stored in the date variable', () => {
      bank.withdraw(100, new Date(2022, 1, 1));
      expect(bank.date.getDate()).toEqual(1);
      expect(bank.date.getMonth()).toEqual(1);
      expect(bank.date.getFullYear()).toEqual(2022);
    });
  });
  describe('#add_to_transaction_history', () => {
    it('updates the transaction_history for a single deposit', () => {
      bank.deposit(100, new Date(2022, 1, 1));
      bank.add_to_transaction_history();
      expect(bank.transaction_history).toEqual([{date: new Date(2022, 1, 1), debit: 0, credit: 100}]);
    });
    it('updates the transaction_history for a single withdrawal', () => {
      bank.withdraw(100, new Date(2022, 1, 1));
      bank.add_to_transaction_history();
      expect(bank.transaction_history).toEqual([{date: new Date(2022, 1, 1), debit: 100, credit: 0}]);
    });
  });
});