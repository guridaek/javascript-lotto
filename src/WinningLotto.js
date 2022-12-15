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
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.');
    }
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  isCorrectBonusNumber(number) {
    return this.#bonusNumber === number;
  }
}

module.exports = WinningLotto;
