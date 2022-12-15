const LOTTO_PRIZE = Object.freeze({
  0: 0,
  1: 2_000_000_000,
  2: 30_000_000,
  3: 1_500_000,
  4: 50_000,
  5: 5_000,
});

const LOTTO_PRICE = 1_000;

const QUERY = Object.freeze({
  USER_BUDGET: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

const ERROR_MSG = Object.freeze({
  LOTTO_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBERS_DUPLICATE: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  LOTTO_NUMBERS_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.',
  BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  NOT_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  BUDGET_MINIMUN: '[ERROR] 구매 금액은 로또 가격보다 적을 수 없습니다.',
  BUDGET_NOT_DIVIDED: '[ERROR] 구매 금액은 로또 가격의 배수여야합니다.',
});

module.exports = { LOTTO_PRIZE, LOTTO_PRICE, QUERY, ERROR_MSG };
