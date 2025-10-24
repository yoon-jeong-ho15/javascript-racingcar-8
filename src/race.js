import { Random, Console } from "@woowacourse/mission-utils";

export const startGame = (namesArr, round) => {
  const players = createPlayer(namesArr);

  for (let i = 0; i < round; i++) {
    processRound(players);
  }

  const winner = findWinner(players);
  return winner.map((player) => player.name);
};

export const createPlayer = (namesArr) => {
  const players = namesArr.map((name) => {
    return { name, step: 0 };
  });
  return players;
};

const processRound = (players) => {
  for (let i = 0; i < players.length; i++) {
    const random = Random.pickNumberInRange(0, 9);
    players[i] = processMove(players[i], random);
  }
  printEachRound(players);
};

export const processMove = (player, random) => {
  if (random >= 4) {
    player.step = player.step + 1;
  }
  return player;
};

const printEachRound = (players) => {
  for (const player of players) {
    Console.print(`${player.name} : ${"-".repeat(player.step)}`);
  }
};

const findWinner = (players) => {
  const steps = players.map((player) => player.step);
  const max = Math.max(...steps);
  return players.filter((player) => player.step === max);
};
