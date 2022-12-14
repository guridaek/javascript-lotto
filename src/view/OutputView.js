const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      numbers = lotto.getNumbers();
      Console.print(`[${numbers.sort((a, b) => a - b).join(', ')}]`);
    });
  },
};

module.exports = OutputView;
