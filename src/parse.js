export const parseNames = function validateAndParseNameInput(inputNames) {
  const inputNamesArr = removeSpace(inputNames)
    .split(",")
    .map((name) => {
      checkStrLength(name);
      return name;
    });
  checkifDuplicated(inputNamesArr);
  if (inputNamesArr.length < 2) {
    throw new Error(`[ERROR] 참가자는 2명 이상이어야 합니다.`);
  }

  return inputNamesArr;
};

const removeSpace = (input) => {
  return input.replaceAll(" ", "");
};

const checkStrLength = (name) => {
  if (name.length > 5) {
    throw new Error(`[ERROR] 이름은 5글자 이하로 력해주세요. : ${name}`);
    입;
  }
};

const checkifDuplicated = (namesArr) => {
  const set = new Set();
  namesArr.map((name) => {
    if (set.has(name)) {
      throw new Error(`[ERROR] 중복된 이름이 입력되었습니다. : ${name}`);
    }
    set.add(name);
  });
};

export const parseRound = function validateAndParseRoundInput(inputRound) {
  const regex = new RegExp(`[^0-9,]`, "g");
  const trimmed = removeSpace(inputRound);
  if (regex.test(trimmed)) {
    throw new Error(`[ERROR] 시도 횟수에는 숫자만 입력할 수 있습니다.`);
  }
  return Number(trimmed);
};
