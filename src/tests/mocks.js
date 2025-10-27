import { Random, Console } from "@woowacourse/mission-utils";

export const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

export const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

export const testPlayers = [
  [
    { name: "hello", distance: 1 },
    { name: "world", distance: 1 },
  ],
  [
    { name: "my", distance: 1 },
    { name: "name", distance: 0 },
    { name: "is", distance: 2 },
  ],
  [
    { name: "yoon", distance: 3 },
    { name: "jeong", distance: 1 },
    { name: "ho", distance: 3 },
  ],
];
