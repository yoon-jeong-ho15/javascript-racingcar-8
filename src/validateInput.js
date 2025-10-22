export const validateNames = function validateInputNames(inputNames) {
  const inputNamesArr = removeSpace(inputNames)
    .split(",")
    .map((name) => {
      checkStrLength(name);
      return name;
    });
  checkifDuplicated(inputNamesArr);

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

export const validateCounts = function validateInputTrialCounts(inputCounts) {};
