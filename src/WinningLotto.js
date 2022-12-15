const { ERROR_MSG } = require('./Constants');
const Lotto = require('./Lotto');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.validate(numbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  validate(numbers, bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MSG.LOTTO_NUMBERS_RANGE);
    }
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MSG.BONUS_NUMBER_DUPLICATE);
    }
  }

  isCorrectBonusNumber(number) {
    return this.#bonusNumber === number;
  }
}

module.exports = WinningLotto;
