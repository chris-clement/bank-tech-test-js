const bankAccountDetails = require('../bankAccountDetails.js')

describe('bankAccountDetails class', () => {
  beforeEach(() => {
    bankDetails = new bankAccountDetails();
  });
  describe('#addBalanceToHistory', () => {
    it('calculates the correct balance for a history with a single transaction', () => {
      expect(bankDetails.addBalanceToHistory([{date: new Date(2022, 1, 1), debit: 100, credit: 0}])).toEqual([{date: new Date(2022, 1, 1), debit: 100, credit: 0, balance: -100}]);
    });
  });
});
