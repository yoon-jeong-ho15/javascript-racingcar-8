import { createPlayer, processMove } from "../src/race";

test("createPlayer", () => {
  const input = ["hello", "world"];
  const result = createPlayer(input);
  expect(result).toEqual([
    { name: "hello", step: 0 },
    { name: "world", step: 0 },
  ]);
});

test("processMove", () => {
  const player = { name: "hello", step: 1 };
  const random = 6;
  const result = processMove(player, random);
  expect(result).toEqual({ name: "hello", step: 2 });
});

test("processMove", () => {
  const player = { name: "hello", step: 1 };
  const random = 3;
  const result = processMove(player, random);
  expect(result).toEqual({ name: "hello", step: 1 });
});
