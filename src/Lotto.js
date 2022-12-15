const { ERROR_MSG } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MSG.LOTTO_NUMBERS_LENGTH);

    if (new Set(numbers).size !== 6) throw new Error(ERROR_MSG.LOTTO_NUMBERS_DUPLICATE);

    numbers.forEach(num => {
      if (num < 1 || num > 45) {
        throw new Error(ERROR_MSG.LOTTO_NUMBERS_RANGE);
      }
    });
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
