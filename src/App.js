import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const namesArr = parseNames(inputNames);

    const inputRound = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const roundCount = parseRound(inputRound);
  }
}

export default App;
