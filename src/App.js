import { Console } from "@woowacourse/mission-utils";
import { parseNames, parseRound } from "./parse.js";
import { startGame } from "./race.js";

class App {
  async run() {
    const inputNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const namesArr = parseNames(inputNames);

    const inputRound = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const round = parseRound(inputRound);

    Console.print("\n실행 결과\n");
    const winner = startGame(namesArr, round);

    Console.print(`\n최종 우승자 : ${winner.join(", ")}\n`);
  }
}

export default App;
