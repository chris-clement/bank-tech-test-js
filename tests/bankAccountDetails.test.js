const bankAccountDetails = require('../bankAccountDetails.js')

describe('bankAccountDetails class', () => {
  beforeEach(() => {
    bankDetails = new bankAccountDetails();
  });
  describe('#addBalanceToHistory', () => {
    it('calculates the correct balance for a history with a single debit', () => {
      expect(bankDetails.addBalanceToHistory([{date: new Date(2022, 1, 1), debit: 100, credit: 0}])).toEqual([{date: new Date(2022, 1, 1), debit: 100, credit: 0, balance: -100}]);
    });
    it('calculates the correct balance for a history with a single credit', () => {
      expect(bankDetails.addBalanceToHistory([{date: new Date(2022, 1, 1), debit: 0, credit: 100}])).toEqual([{date: new Date(2022, 1, 1), debit: 0, credit: 100, balance: 100}]);
    });
    it('calculates the correct balances for a history with 2 debits', () => {
      expect(bankDetails.addBalanceToHistory([
        {date: new Date(2022, 1, 1), debit: 100, credit: 0}, 
        {date: new Date(2022, 1, 2), debit: 100, credit: 0}
      ])).toEqual(
        [
          {date: new Date(2022, 1, 1), debit: 100, credit: 0, balance: -100}, 
          {date: new Date(2022, 1, 2), debit: 100, credit: 0, balance: -200}
        ]);
    });
    it('calculates the correct balances for a history not in date order', () => {
      expect(bankDetails.addBalanceToHistory([
        {date: new Date(2022, 1, 2), debit: 100, credit: 0}, 
        {date: new Date(2022, 1, 1), debit: 100, credit: 0}
      ])).toEqual(
        [
          {date: new Date(2022, 1, 1), debit: 100, credit: 0, balance: -100},
          {date: new Date(2022, 1, 2), debit: 100, credit: 0, balance: -200} 
          
        ]);
    });
  });
});
