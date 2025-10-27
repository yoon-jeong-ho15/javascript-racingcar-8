import { getLogSpy, mockRandoms, testPlayers } from "../../src/tests/mocks";
import { processRound } from "../../src/race";

describe("processRound integration test", () => {
  test.each([
    {
      players: testPlayers[0],
      randoms: [8, 7],
      logs: ["hello : -", "world : -"],
      description: "모두 이동",
    },
    {
      players: testPlayers[1],
      randoms: [1, 2, 3],
      logs: ["my : -", "name : ", "is : --"],
      description: "일부 이동",
    },
    {
      players: testPlayers[2],
      randoms: [1, 2, 3],
      logs: ["yoon : ---", "jeong : -", "ho : ---"],
      description: "모두 제자리",
    },
  ])("$description", ({ players, randoms, logs }) => {
    const logSpy = getLogSpy();
    mockRandoms(randoms);
    processRound(players);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
