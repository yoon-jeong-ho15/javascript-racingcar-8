import { createPlayers, findWinner } from "../../src/race";
import { testPlayers } from "../../src/tests/mocks";

describe("createPlayers unit test", () => {
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

describe("findWinner unit test", () => {
  test.each([
    {
      players: testPlayers[0],
      expected: ["hello", "world"],
      description: "무승부",
    },
    {
      players: testPlayers[1],
      expected: ["is"],
      description: "단독 우승",
    },
    {
      players: testPlayers[2],
      expected: ["yoon", "ho"],
      description: "2명 공동 우승",
    },
  ])("$description", ({ players, expected }) => {
    const winners = findWinner(players);
    expect(winners.map((p) => p.name)).toEqual(expected);
  });
});
