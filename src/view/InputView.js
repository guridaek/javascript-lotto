const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserBudget(callback) {
    this.getUserInput('구입금액을 입력해 주세요.', callback, this.validateBudget);
  },

  validateBudget(budget) {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(budget)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (+budget < 1000) {
      throw new Error('[ERROR] 구매 금액은 로또 가격보다 적을 수 없습니다.');
    }
    if (+budget % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 로또 가격의 배수여야합니다..');
    }
  },

  readWinningNumbers(callback) {
    this.getUserInput('당첨 번호를 입력해 주세요.', callback, this.validateWinningNumbers);
  },

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.split(',').map(Number).includes(NaN)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  },

  readBonusNumber(callback) {
    this.getUserInput('보너스 번호를 입력해 주세요.', callback, this.validateBonusNumber);
  },

  validateBonusNumber(number) {
    const isNumber = /^[0-9]+$/;
    if (!isNumber.test(number)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
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
