import { parseNames, validateCounts } from "../src/parse";

describe("parseNames 테스트", () => {
  test("5글자 이하 여부 확인 - 정상", () => {
    const input = "hello, world, my,name,is, yoon";
    const result = parseNames(input);
    expect(result).toEqual(["hello", "world", "my", "name", "is", "yoon"]);
  });
  test("5글자 이하 여부 확인 - 에러", () => {
    const input = "hello, world, mynameis, yoon";
    expect(() => parseNames(input)).toThrow(
      `[ERROR] 이름은 5글자 이하로 력해주세요. : mynameis`
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
