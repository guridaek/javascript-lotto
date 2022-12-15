const LottoGame = require('../LottoGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  start() {
    InputView.readUserBudget(budget => {
      this.#lottoGame.purchaseLottos(budget);
    });

    this.printPurchaseDetails();
  }

  printPurchaseDetails() {
    OutputView.printLottos(this.#lottoGame.getLottos());
    this.inputWinningLotto();
  }

  inputWinningLotto() {
    let numbers;
    InputView.readWinningNumbers(winningNumbers => {
      numbers = winningNumbers.split(',').map(Number);
    });
    InputView.readBonusNumber(bonusNumber => {
      this.#lottoGame.setWinningLotto(numbers, +bonusNumber);
    });
  }
}

module.exports = LottoGameController;
