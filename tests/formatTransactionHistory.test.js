const formatTransactionHistory = require('../formatTransactionHistory.js')

describe('formatTransactionHistory class', () => {
  beforeEach(() => {
    formatData = new formatTransactionHistory();
  });
  describe('#formatHistoryNumbers', () => {
    it('converts credits into 2dp string, debit to blank, balance to 2dp', () => {
      expect(formatData.formatHistoryNumbers([{credit: 100, debit: 0, balance: 100}])).toEqual([{credit: '100.00', debit: '', balance: '100.00'}]);
    });
    it('converts credits into blank string if 0, debit to 2dp, balance to 2dp', () => {
      expect(formatData.formatHistoryNumbers([{credit: 0, debit: 100, balance: -100}])).toEqual([{credit: '', debit: '100.00', balance:'-100.00'}]);
    });
    it('converts a history with multiple transactions', () => {
      expect(formatData.formatHistoryNumbers([{credit: 0, debit: 100, balance: -100}, {credit: 0, debit: 100, balance: -200}] )).toEqual([{credit: '', debit: '100.00', balance:'-100.00'}, {credit: '', debit: '100.00', balance:'-200.00'}]);
    })
  });
  describe('#formatHistoryDate', () => {
    it('converts the date into a acceptable format', () => {
      expect(formatData.formatHistoryDate([{date: new Date(2022, 1, 1)}])).toEqual([{date: "01/01/2022"}]);
    });
  });
})