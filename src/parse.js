export const parseNames = function validateAndParseNameInput(inputNames) {
  const inputNamesArr = removeAllSpaces(inputNames).split(",");

  inputNamesArr.forEach(checkStrLength);
  checkIfDuplicated(inputNamesArr);
  checkMinimumParticipants(inputNamesArr);

  return inputNamesArr;
};

const removeAllSpaces = (input) => {
  return input.replaceAll(" ", "");
};

const checkStrLength = (name) => {
  if (name.length < 1) {
    throw new Error(`[ERROR] 이름은 1글자 이상으로 입력해주세요.`);
  }
  if (name.length > 5) {
    throw new Error(`[ERROR] 이름은 5글자 이하로 입력해주세요. : ${name}`);
    입;
  }
};

const checkIfDuplicated = (namesArr) => {
  const set = new Set();
  namesArr.map((name) => {
    if (set.has(name)) {
      throw new Error(`[ERROR] 중복된 이름이 입력되었습니다. : ${name}`);
    }
    set.add(name);
  });
};

const checkMinimumParticipants = (namesArr) => {
  if (namesArr.length < 2) {
    throw new Error(`[ERROR] 참가자는 2명 이상이어야 합니다.`);
  }
};

export const parseRound = function validateAndParseRoundInput(inputRound) {
  const hasNonNumeric = new RegExp(`[^0-9,]`, "g");
  const trimmedInput = removeAllSpaces(inputRound);

  if (hasNonNumeric.test(trimmedInput)) {
    throw new Error(`[ERROR] 시도 횟수에는 숫자만 입력할 수 있습니다.`);
  }
  const round = Number(trimmedInput);

  if (round < 1) {
    throw new Error(`[EROOR] 시도 횟수는 0 보다 큰 자연수여야 합니다.`);
  }
  return round;
};
