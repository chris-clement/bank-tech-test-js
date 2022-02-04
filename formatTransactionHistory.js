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
  formatHistoryDate(history) {
    history.forEach((transaction) => {
      var dd = String(transaction['date'].getDate()).padStart(2, '0');
      var mm = String(transaction['date'].getMonth()).padStart(2, '0');
      var yyyy = String(transaction['date'].getFullYear());
      transaction['date'] = dd + '/' + mm + '/' + yyyy
    });
    return history
  };
};


module.exports = formatTransactionHistory;