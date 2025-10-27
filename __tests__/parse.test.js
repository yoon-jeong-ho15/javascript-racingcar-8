import { parseNames, parseRound } from "../src/parse";

describe("parseNames 테스트", () => {
  test("5글자 이하 여부 확인 - 정상", () => {
    const input = "hello, world, my,name,is, yoon";
    const result = parseNames(input);
    expect(result).toEqual(["hello", "world", "my", "name", "is", "yoon"]);
  });
  test("5글자 이하 여부 확인 - 에러", () => {
    const input = "hello, world, mynameis, yoon";
    expect(() => parseNames(input)).toThrow(
      `[ERROR] 이름은 5글자 이하로 입력해주세요. : mynameis`
    );
  });

  test("1글자 이상 여부 확인 - 에러", () => {
    const input = "hello, world, ";
    expect(() => parseNames(input)).toThrow(
      `[ERROR] 이름은 1글자 이상으로 입력해주세요.`
    );
  });

  test("중복 여부 확인 - 정상", () => {
    const input = "hello , world, helo";
    const result = parseNames(input);
    expect(result).toEqual(["hello", "world", "helo"]);
  });
  test("중복 여부 확인 - 에러", () => {
    const input = "hello , world, hello";
    expect(() => parseNames(input)).toThrow(
      `[ERROR] 중복된 이름이 입력되었습니다. : hello`
    );
  });

  test("참가자 2명 이상 확인 - 에러", () => {
    const input = "hello";
    expect(() => parseNames(input)).toThrow(
      `[ERROR] 참가자는 2명 이상이어야 합니다.`
    );
  });
});

describe("parseRound 테스트", () => {
  test("123", () => {
    const input = "123";
    const result = parseRound(input);
    expect(result).toBe(123);
  });
  test("12 3(공백)", () => {
    const input = "12 3";
    const result = parseRound(input);
    expect(result).toBe(123);
  });

  test("에러 - 숫자 외 문자 입력", () => {
    const input = "-6";
    expect(() => parseRound(input)).toThrow(
      `[ERROR] 시도 횟수에는 숫자만 입력할 수 있습니다.`
    );
  });

  test("에러 - 0 입력", () => {
    const input = "0";
    expect(() => parseRound(input)).toThrow(
      `[EROOR] 시도 횟수는 0 보다 큰 자연수여야 합니다.`
    );
  });
});
