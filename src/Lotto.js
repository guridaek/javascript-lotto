class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    if (new Set(numbers).size !== 6) throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');

    numbers.forEach(num => {
      if (num < 1 || num > 45) {
        throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.');
      }
    });
  }

  includes(number) {
    return this.#numbers.inclueds(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
