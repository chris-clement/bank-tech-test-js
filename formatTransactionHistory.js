class formatTransactionHistory{
  constructor() { 
  };
  formatHistoryNumbers(history) {
    history.forEach((transaction) => {
      ['credit', 'debit', 'balance'].forEach((number) => {
        if (transaction[number] == 0) {
          transaction[number] = '';
        } else {
          transaction[number] = transaction[number].toFixed(2);
        };
      });
    });
    return history
  };
};


module.exports = formatTransactionHistory;