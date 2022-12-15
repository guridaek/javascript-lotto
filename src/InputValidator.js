const { LOTTO_PRICE, ERROR_MSG } = require('./Constants');

const isNumber = /^[0-9]+$/;

const InputValidator = {
  validateBudget(budget) {
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

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.split(',').map(Number).includes(NaN)) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
  },

  validateBonusNumber(number) {
    if (!isNumber.test(number)) {
      throw new Error(ERROR_MSG.NOT_NUMBER);
    }
  },
};

module.exports = InputValidator;
