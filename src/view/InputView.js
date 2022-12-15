const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MSG, QUERY, LOTTO_PRICE } = require('../Constants');
const InputValidator = require('../InputValidator');

const InputView = {
  readUserBudget(callback) {
    this.getUserInput(QUERY.USER_BUDGET, callback, InputValidator.validateBudget);
  },

  readWinningNumbers(callback) {
    this.getUserInput(QUERY.WINNING_NUMBERS, callback, InputValidator.validateWinningNumbers);
  },

  readBonusNumber(callback) {
    this.getUserInput(QUERY.BONUS_NUMBER, callback, InputValidator.validateBonusNumber);
  },

  getUserInput(query, callback, validator) {
    Console.readLine(query, input => {
      validator(input);
      callback(input);
    });
  },
};

module.exports = InputView;
