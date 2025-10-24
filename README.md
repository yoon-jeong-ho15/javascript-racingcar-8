# javascript-racingcar-precourse

# 주의 사항

- **들여쓰기 indent의 depth가 3** 이상이 되지 않도록 한다.
- 3항 연산자를 사용하지 않는다.
- 함수는 한 가지 일만 하도록 만든다.
- Jest를 이용해 **정리한 기능 목록**이 정상적으로 작동하는지 테스트 코드로 확인한다.

## 공통 피드백 내용

- 요구 사항을 정확하게 준수한다.
- 커밋 메시지를 의미 있게 작성한다. [7가지 약속](https://meetup.nhncloud.com/posts/106)
- 풀 리퀘스트를 만든 후에는 닫지 않는다.
- 디버거를 적극 활용한다. [VSCode 디버깅](https://code.visualstudio.com/docs/debugtest/debugging)
- 변수, 함수 등의 이름을 짓는데 시간을 투자해 의도를 드러내는 이름을 사용한다.
  - 힘든 경우 주석을 추가
- 공백을 의미 있게 사용한다.
- JS 내부 API를 적극 활용한다.

# 기능 구현 목록

## 입력값 검증

### 이름 검증

- [x] 공백 제거.
- [x] 5글자 이하인지 확인.
- [x] 중복되는지 확인.
- [x] 참가자가 2명 이상인지 확인.

### 시도 횟수 검증

- [x] 공백 제거.
- [x] 숫자만 입력되었는지 확인.

## 게임 로직

- [x] 시도 횟수만큼 반복.
- [x] `player` 객체
  - [x] name : 이름
  - [x] step : 자동차가 이동한 거리
- [x] `Random.pickNumberInRange(0, 9);`의 결과가 4 이상인 경우 전진. (3항 연산자 x)
- [x] 전진하는 자동차는 `step + 1`.
- [x] 게임 종료 후에 `step`가 가장 높은 자동차를 우승자 배열에 추가.
- [x] 우승자 배열을 출력한다.

## 에러 처리

- [x] 5글자 제한
- [x] 중복된 이름
- [x] 참여자 2명 이상
- [x] 시도 횟수에 숫자 외 다른 문자 입력

# 결정 사항

## 게임 로직 `processRound()`

사용자가 입력한 '시도 횟수' 만큼 모든 자동차가 전진을 하거나 하지 않는다.

반복문의 중첩으로 구현해야 하는데 두 방법이 있다 :

- (1)모든 자동차가 (2)모든 턴마다 전진 혹은 멈춤을 한다.
- (1)모든 턴마다 (2)모든 자동차가 전진 혹은 멈춤을 한다.

과제는 매 차수마다 진행상황을 출력하기를 요구하고 있기 때문에 밑의 방법을 선택했다.

만약에 최종 결과물인 우승자만 출력해도 됐다면 위의 방법을 택할 수도 있겠다.

- 자동차들이 전진하지 못하고 멈춘 수를 `minStop`과 비교해 이것보다 많아지는 순간 반복문을 종료.
- 더 낮은 수로 주행한 자동차가 있으면 `minStop`변수와 우승자 배열 초기화.
- 같은 수로 주행한 자동차가 있으면 우승자 배열에 추가.

이렇게 하면 참가한 자동차가 많은 경우에 더 유리할 수 있다.

# 궁금했던 것들

## 기명 함수 표현식

Airbnb 자바스크립트 스타일 가이드의 [함수 정의 부분](https://github.com/airbnb/javascript?tab=readme-ov-file#functions--declarations)을 보면
`function funcA()` 과 같은 함수 정의식이 아닌 함수 표현식, 특히 이름을 가지는 함수 표현식으로 정의하기를 추천하고있다.
`const funcA = function longDescriptiveNameOfFuncA()`

이유는 이렇다.

1. 함수 선언식은 호이스팅되기 때문에 가독성과 유지보수성을 저하시킨다.

> Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability.

그래서 함수 표현식을 사용해야 한다. 그런데 왜 화살표 함수로 정의하면 안되고 named(기명) 함수표현식으로 정의해야 할까?

1. 에러 콜스택 표기될 이름이 필요하기 때문에.

> Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack.

요즘 컴파일러들은 알아서 변수명을 함수명으로 추론한다고 하지만, 혹시모를 경우에 대비해 명시적으로 이름을 작성하는게 좋다고 한다.[관련 디스커션](https://github.com/airbnb/javascript/issues/794)

관련해서 작년 우테코 참가자분들이 나눈 대화도 있다.[링크](https://github.com/woowacourse-precourse/javascript-racingcar-7/pull/404#issuecomment-2444166034)

## 커밋 메시지

위에도 첨부한 링크 [7가지 약속](https://meetup.nhncloud.com/posts/106)를 보면 "(3번) 제목 첫글자를 대문자로" 하기를 권장하고 있다.

그런데 정작 원본 리포의 메인 브랜치의 커밋메시지를 보면 제목 앞글자를 소문자로 한 것을 볼 수 있다.

```
build: update dependencies and node engine version
feat: setup project
```

3번이 7가지 규칙중에 상대적으로 **덜 중요한 규칙**이라는 것은 알겠다. 그런데 다른 규칙들은 어떨까? 다른 규칙들중에도 덜 중요하거나 혹은 최근들어 변경된 것이 있는지 확인해보기 위해 [Angular 규칙](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)과 비교 대조를 해봤다.

다른 규칙은 대동소이한데, 특이한점은 [여기서는](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#subject-text) **"don't capitalize first letter"** 라고 명시적으로 대문자를 사용하지 말기를 권장하고 있다.
