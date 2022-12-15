const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MSG, QUERY, LOTTO_PRICE } = require('../Constants');

const InputView = {
  readUserBudget(callback) {
    this.getUserInput(QUERY.USER_BUDGET, callback, this.validateBudget);
  },

  validateBudget(budget) {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(budget)) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
    if (+budget < LOTTO_PRICE) {
      throw new Error(ERROR_MSG.BUDGET_MINIMUN);
    }
    if (+budget % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MSG.BUDGET_NOT_DIVIDED);
    }
  },

  readWinningNumbers(callback) {
    this.getUserInput(QUERY.WINNING_NUMBERS, callback, this.validateWinningNumbers);
  },

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.split(',').map(Number).includes(NaN)) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
  },

  readBonusNumber(callback) {
    this.getUserInput(QUERY.BONUS_NUMBER, callback, this.validateBonusNumber);
  },

  validateBonusNumber(number) {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(number)) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
  },

  getUserInput(query, callback, validator) {
    Console.readLine(query, input => {
      validator(input);
      callback(input);
    });
  },
};

module.exports = InputView;
