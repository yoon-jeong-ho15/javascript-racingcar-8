import { createPlayers, processRound, findWinner } from "../src/race";
import { getLogSpy, mockRandoms } from "../src/mocks";

const testPlayers1 = [
  { name: "hello", distance: 1 },
  { name: "world", distance: 1 },
];

const testPlayers2 = [
  { name: "my", distance: 1 },
  { name: "name", distance: 0 },
  { name: "is", distance: 2 },
];

const testPlayers3 = [
  { name: "yoon", distance: 3 },
  { name: "jeong", distance: 1 },
  { name: "ho", distance: 3 },
];

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
  test.each([
    {
      players: testPlayers1,
      randoms: [8, 7],
      logs: ["hello : -", "world : -"],
      description: "모두 이동",
    },
    {
      players: testPlayers2,
      randoms: [1, 2, 3],
      logs: ["my : -", "name : ", "is : --"],
      description: "일부 이동",
    },
    {
      players: testPlayers3,
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
