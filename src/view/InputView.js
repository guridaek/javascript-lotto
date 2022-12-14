const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserBudget(callback) {
    Console.readLine(input => {
      this.validateBudget(input);
      callback(input);
    });
  },

  validateBudget(budget) {
    const isNumber = /^[0-9]+$/;
    if (!isNumber(budget)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (+budget < 1000) {
      throw new Error('[ERROR] 구매 금액은 로또 가격보다 적을 수 없습니다.');
    }
    if (+budget % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 로또 가격의 배수여야합니다..');
    }
  },
};
