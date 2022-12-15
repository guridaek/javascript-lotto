const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      numbers = lotto.getNumbers();
      Console.print(`[${numbers.sort((a, b) => a - b).join(', ')}]`);
    });
  },

  printResult(result) {
    Console.print('당첨 통계\n---');
    Console.print(
      [
        `3개 일치 (5,000원) - ${result[5]}개`,
        `4개 일치 (50,000원) - ${result[4]}개`,
        `5개 일치 (1,500,000원) - ${result[3]}개`,
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`,
        `6개 일치 (2,000,000,000원) - ${result[1]}개`,
      ].join('\n'),
    );
  },

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit.toFixed(1).toLocaleString('ko-KR')}%입니다.`);
  },
};

module.exports = OutputView;
