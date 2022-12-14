const LottoGameController = require('./controller/LottoGameController');
const LottoGame = require('./LottoGame');

class App {
  #lottoGameController = new LottoGameController();

  play() {
    this.#lottoGameController.start();
  }
}

module.exports = App;
