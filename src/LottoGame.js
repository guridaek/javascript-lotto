const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');
const { LOTTO_PRIZE } = require('./Constants');

class LottoGame {
  #lottos;
  #winningLotto;

  constructor() {
    this.#lottos = [];
  }

  purchaseLottos(budget) {
    for (let i = 0; i < budget / 1000; i += 1) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  getLottos() {
    return this.#lottos;
  }

  setWinningLotto(numbers, bonusNumber) {
    this.#winningLotto = new WinningLotto(numbers, bonusNumber);
  }

  getResult() {
    const result = [0, 0, 0, 0, 0, 0];
    this.#lottos.forEach(lotto => {
      let [cnt, isBonusNumberMatched] = [0, false];
      lotto.getNumbers().forEach(number => {
        if (this.#winningLotto.includes(number)) cnt += 1;
        if (this.#winningLotto.isCorrectBonusNumber(number)) isBonusNumberMatched = true;
      });
      result[this.getRank(cnt, isBonusNumberMatched)] += 1;
    });
    return result;
  }

  getRank(matchingCount, isBonusNumberMatched) {
    switch (matchingCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return isBonusNumberMatched ? 2 : 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  getProfit(result) {
    let [budget, prize] = [0, 0];
    result.forEach((cnt, rank) => {
      budget += cnt * 1000;
      prize += cnt * LOTTO_PRIZE[rank];
    });
    return (prize / budget) * 100;
  }
}

module.exports = LottoGame;
