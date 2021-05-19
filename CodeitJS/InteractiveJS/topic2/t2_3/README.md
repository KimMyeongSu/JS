## 함수 선언
이렇게 작성하는 방식을 함수 선언(function declaration) 
```javascript 
// 함수 선언
function sayHi() {
  console.log('Hi!');
}
```

## 함수 표현식
자바스크립트에서 함수는 값으로 취급될 수도 있기 때문에 변수에 할당해서 함수를 선언할 수도 있음<br/>
이렇게 함수를 값으로 다루는 방식을 함수 표현식 (function expression)
```javascript 
// 함수 표현식
const sayHi = function () {
  console.log('Hi!');
};
```
## 다양한 함수의 형태
```javascript
// 변수에 할당해서 활용
const printJS = function () {
  console.log('JavaScript');
};

// 객체의 메소드로 활용
const codeit = {
  printTitle: function () {
    console.log('Codeit');
  }
}

// 콜백 함수로 활용
myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});

// 고차 함수로 활용
function myFunction() {
  return function () {
    console.log('Hi!?');
  };
};
```

## 파라미터의 기본값
기본값이 있는 파라미터는 함수를 호출할 때 아규먼트를 전달하지 않으면, 함수 내부의 동작은 이 파라미터의 기본값을 가지고 동작
```javascript
function sayHi(name = 'Codeit') {
  console.log(`Hi! ${name}`);
}

sayHi('JavaScript'); // Hi! JavaScript
sayHi(); // Hi! Codeit
```

## arguments 객체
 arguments라는 독특한 객체가 존재<br/>
 arguments 객체는 함수를 호출할 때 전달한 아규먼트들을 배열의 형태로 모아둔 유사 배열 객체 특히, 함수를 호출할 때 전달되는 아규먼트의 개수가 불규칙적일 때 유용하게 활용
 ```javascript
 function printArguments() {
  // arguments 객체의 요소들을 하나씩 출력
  for (const arg of arguments) {
    console.log(arg); 
  }
}

printArguments('Young', 'Mark', 'Koby');
 ```

## Rest Parameter 
arguments 객체를 이용하는 것 말고도 불규칙적으로 전달되는 아규먼트를 다루는 파라미터 앞에 마침표 세 개를 붙여주면, 여러 개로 전달되는 아규먼트들을 <b>배열</b>로 다룰 수가 있게 된다 그리고 arguments객체는 유사 배열이기 때문에 배열의 메소드를 활용할 수 없는 반면, rest parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다는 장점이 있다.
```javascript
function printArguments(...args) {
  // args 객체의 요소들을 하나씩 출력
  for (const arg of args) {
    console.log(arg); 
  }
}
printArguments('Young', 'Mark', 'Koby');

//rest parameter는 다른 일반 파라미터들과 함께 사용될 수도 있음
function printRankingList(first, second, ...others) {
  console.log('레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
```

## Arrow Function
arrow function은 익명 함수를 좀 더 간결하게 표현할 수 있도록 ES2015에서 새롭게 등장한 함수 선언 방식
```javascript 
// 화살표 함수 정의
const getTwice = (number) => {
  return number * 2;
};

// 콜백 함수로 활용
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});

// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
};

// 파라미터를 감싸는 소괄호 생략 가능
const getTwice = number => {
  return number * 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
  return a + b;
};

// return문과 중괄호 생략 가능
const sum = (a, b) => a + b;
```

Arrow function이 일반 함수와 몇 가지 차이점이 있다.
가장 대표적인 차이점은 arguments 객체가 없고, this가 가리키는 값이 일반 함수와 다르다는 점

## this 
(현재 객체의) 라고 생각하면 조금 편하게 이해 가능
```javascript 
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
```