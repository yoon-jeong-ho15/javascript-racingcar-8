import { Random, Console } from "@woowacourse/mission-utils";
import { MOVE_CONDITION } from "./constant.js";

export const startGame = (namesArr, round) => {
  const players = createPlayers(namesArr);

  for (let i = 0; i < round; i++) {
    processRound(players);
  }

  const winner = findWinner(players);
  return winner.map((player) => player.name);
};

export const createPlayers = (namesArr) => {
  const players = namesArr.map((name) => {
    return { name, distance: 0 };
  });
  return players;
};

export const processRound = (players) => {
  players.forEach((player) => {
    const random = Random.pickNumberInRange(0, 9);
    processMove(player, random);
  });
  printEachRound(players);
};

const processMove = (player, random) => {
  if (random > MOVE_CONDITION) {
    player.distance = player.distance + 1;
  }
  return player;
};

export const printEachRound = (players) => {
  players.forEach((player) =>
    Console.print(`${player.name} : ${"-".repeat(player.distance)}`)
  );
};

export const findWinner = (players) => {
  const distances = players.map((player) => player.distance);
  const max = Math.max(...distances);
  return players.filter((player) => player.distance === max);
};
