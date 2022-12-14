const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

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
}

module.exports = LottoGame;
