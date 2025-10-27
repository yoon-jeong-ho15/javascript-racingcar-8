import { createPlayers, processMove } from "../src/race";

test("createPlayer", () => {
  const input = ["hello", "world"];
  const result = createPlayers(input);
  expect(result).toEqual([
    { name: "hello", distance: 0 },
    { name: "world", distance: 0 },
  ]);
});

test("processMove", () => {
  const player = { name: "hello", distance: 1 };
  const random = 6;
  const result = processMove(player, random);
  expect(result).toEqual({ name: "hello", distance: 2 });
});

test("processMove", () => {
  const player = { name: "hello", distance: 1 };
  const random = 3;
  const result = processMove(player, random);
  expect(result).toEqual({ name: "hello", distance: 1 });
});
