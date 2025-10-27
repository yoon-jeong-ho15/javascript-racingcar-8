import { createPlayers, processRound, findWinner } from "../src/race";
import { getLogSpy, mockRandoms } from "../src/mocks";

describe("createPlayers 테스트", () => {
  test.each([
    [
      ["hello", "world"],
      [
        { name: "hello", distance: 0 },
        { name: "world", distance: 0 },
      ],
    ],
    [
      ["yoon", "jeong", "ho"],
      [
        { name: "yoon", distance: 0 },
        { name: "jeong", distance: 0 },
        { name: "ho", distance: 0 },
      ],
    ],
  ])("%s", (namesArr, players) => {
    const result = createPlayers(namesArr);
    expect(result).toEqual(players);
  });
});

describe("processRound 테스트", () => {
  const case1 = {
    players: [
      { name: "hello", distance: 0 },
      { name: "world", distance: 0 },
    ],
    randoms: [8, 7],
    logs: ["hello : -", "world : -"],
    description: "모두 이동",
  };
  const case2 = {
    players: [
      { name: "yoon", distance: 1 },
      { name: "jeong", distance: 1 },
      { name: "ho", distance: 1 },
    ],
    randoms: [1, 2, 3],
    logs: ["yoon : -", "jeong : -", "ho : -"],
    description: "모두 제자리",
  };
  const case3 = {
    players: [
      { name: "my", distance: 1 },
      { name: "name", distance: 1 },
      { name: "is", distance: 1 },
    ],
    randoms: [1, 2, 3],
    logs: ["my : -", "name : -", "is : -"],
    description: "모두 제자리",
  };

  test.each([case1, case2, case3])(
    "$description",
    ({ players, randoms, logs }) => {
      const logSpy = getLogSpy();
      mockRandoms(randoms);
      processRound(players);
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  );
});
