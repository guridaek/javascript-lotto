const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');

const LOTTO_PRICE = 1000;
const LOTTO_PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

class LottoSimulator {
  #money = 0;
  #profits = 0;
  #lottos = [];
  #winningNumbers;
  #bounsNumber;
  #result;

  start() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      this.validateMoney(answer);
      this.#money = Number(answer);
    });

    this.buyingLotto();
  }

  validateMoney(money) {
    if (Number.isNaN(+money)) {
      throw new Error('[ERROR] 올바르지 않은 금액입니다.');
    }
    if (Number(money) % LOTTO_PRICE !== 0) {
      throw new Error(`[ERROR] ${LOTTO_PRICE}원 단위로 입력해야 합니다.`);
    }
  }

  buyingLotto() {
    for (let money = this.#money; money >= LOTTO_PRICE; money -= LOTTO_PRICE) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    this.printLottos();
  }

  printLottos() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => lotto.print());

    this.setWinningNumber();
  }

  setWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', answer => {
      const numbers = answer.split(',').map(Number);
      this.#winningNumbers = new Lotto(numbers);
    });

    this.setBonusNumber();
  }

  setBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', answer => {
      this.validateBonusNumber(answer);
      this.#bounsNumber = Number(answer);
    });

    this.calculateResult();
  }

  validateBonusNumber(number) {
    if (this.#winningNumbers.getNumbers().includes(+number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
    }
  }

  calculateResult() {
    const result = [0, 0, 0, 0, 0];
    this.#lottos.forEach(lotto => {
      const rank = this.getLottoRanking(lotto.getNumbers());
      if (rank > 0) {
        result[rank - 1] += 1;
      }
    });

    this.#result = result;
    this.calculateProfits();
  }

  getLottoRanking(lotto) {
    let cnt = 0;
    this.#winningNumbers.getNumbers().forEach(num => {
      if (lotto.includes(num)) {
        cnt += 1;
      }
    });

    if (cnt === 6) return 1;
    if (cnt === 5 && lotto.includes(this.#bounsNumber)) return 2;
    if (cnt === 5) return 3;
    if (cnt === 4) return 4;
    if (cnt === 3) return 5;

    return 0;
  }

  calculateProfits() {
    let sum = 0;
    Object.values(LOTTO_PRIZE).forEach((prize, idx) => {
      if (this.#result[idx] > 0) {
        sum += prize * this.#result[idx];
      }
    });

    this.#profits = Math.round((sum / this.#money) * 1000) / 10;
    this.printResult();
  }

  printResult() {
    const str = [
      '당첨 통계\n---',
      `3개 일치 (${LOTTO_PRIZE.FIFTH.toLocaleString('ko-KR')}원) - ${this.#result[4]}개`,
      `4개 일치 (${LOTTO_PRIZE.FOURTH.toLocaleString('ko-KR')}원) - ${this.#result[3]}개`,
      `5개 일치 (${LOTTO_PRIZE.THIRD.toLocaleString('ko-KR')}원) - ${this.#result[2]}개`,
      `5개 일치, 보너스 볼 일치 (${LOTTO_PRIZE.SECOND.toLocaleString('ko-KR')}원) - ${this.#result[1]}개`,
      `6개 일치 (${LOTTO_PRIZE.FIRST.toLocaleString('ko-KR')}원) - ${this.#result[0]}개`,
      `총 수익률은 ${this.#profits}%입니다.`,
    ].join('\n');

    Console.print(str);
    Console.close();
  }
}

module.exports = LottoSimulator;
