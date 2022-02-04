const bankAccountDetails = require('../bankAccountDetails.js')

global.console = {
  log:jest.fn(),
};

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
  describe('#printStatement', () => {
    it('prints a single deposit transaction', () => {
      bankDetails.printStatement([{date: new Date(2023, 1, 10), credit: 1000, debit: 0, balance: 1000}]);
      expect(global.console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance\n");
        expect(global.console.log).toHaveBeenCalledWith(
        "10/01/2023 || 1000.00 || || 1000.00\n");
    });
    it('prints a two deposit transactions', () => {
      bankDetails.printStatement([{date: new Date(2023, 1, 10), credit: 1000, debit: 0, balance: 1000},
        {date: new Date(2023, 1, 13), credit: 2000, debit: 0, balance: 2000}]);
        expect(global.console.log).toHaveBeenCalledWith(
          "date || credit || debit || balance\n");
        expect(global.console.log).toHaveBeenCalledWith(
          "13/01/2023 || 2000.00 || || 3000.00\n");
        expect(global.console.log).toHaveBeenCalledWith(
          "10/01/2023 || 1000.00 || || 1000.00\n");
    });
  });
  // describe('#formatHistoryNumbers', () => {
  //   it('converts credits into 2dp string, debit to blank, balance to 2dp', () => {
  //     expect(bankDetails.formatHistoryNumbers([{credit: 100, debit: 0, balance: 100}])).toEqual([{credit: '100.00', debit: '', balance: '100.00'}]);
  //   });
  //   it('converts credits into blank string if 0, debit to 2dp, balance to 2dp', () => {
  //     expect(bankDetails.formatHistoryNumbers([{credit: 0, debit: 100, balance: -100}])).toEqual([{credit: '', debit: '100.00', balance:'-100.00'}]);
  //   });
  //   it('converts a history with multiple transactions', () => {
  //     expect(bankDetails.formatHistoryNumbers([{credit: 0, debit: 100, balance: -100}, {credit: 0, debit: 100, balance: -200}] )).toEqual([{credit: '', debit: '100.00', balance:'-100.00'}, {credit: '', debit: '100.00', balance:'-200.00'}]);
  //   })
  // });
  describe('#formatHistoryDate', () => {
    it('converts the date into a acceptable format', () => {
      expect(bankDetails.formatHistoryDate([{date: new Date(2022, 1, 1)}])).toEqual([{date: "01/01/2022"}]);
    });
  });
  describe('#sortHistoryOldToNew', () => {
    it('sorts the history from old to new', () => {
      expect(bankDetails.sortHistoryOldToNew([{date: new Date(2022, 1, 2)}, {date: new Date(2022, 1, 1)}])).toEqual([{date: new Date(2022, 1, 1)}, {date: new Date(2022, 1, 2)}]);
    });
  });
  describe('#sortHistoryNewToOld', () => {
    it('sorts the history from new to old', () => {
      expect(bankDetails.sortHistoryNewToOld([{date: new Date(2022, 1, 3)}, {date: new Date(2022, 1, 1)}, {date: new Date(2022, 1, 2)}])).toEqual([{date: new Date(2022, 1, 3)},  {date: new Date(2022, 1, 2)}, {date: new Date(2022, 1, 1)}]);
    });
  });
});
