## 데이터 타입의 특징과 종류 
<ul>
    <li>데이터 타입이 유연하다</li>
    <li>데이터 타입이 상황에따라 변할 수 있다.</li>
</ul>

자바스크립트를 유연하게 다루기 위해서는 데이터 타입의 이해가 중요


### 기본형
<ul>
    <li><code>Number</code></li>
    <li><code>String</code></li>
    <li><code>Boolean</code></li>
    <li><code>Null</code></li>
    <li><code>Undefined</code></li>
    <li><code>Symbol</code> (ES2015) : 유일한 값을 만들때</li>
    <li><code>BigInt</code> (ES2020) : 엄청 큰 숫자를 다룰 때</li>
</ul>

Symbol , BigInt 새롭게 추가된 타입인만큼 활용사례가 많지 않다.

### 참조형 
<ul>
    <li><code>object</code></li>
</ul>

### Symbol
```javascript
const user = Symbol();
```
심볼(symbol)은 기본형 데이터 타입(primitive data type) 중 하나<br/>
심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용

Symbol이라는 함수를 통해서 심볼 값을 만들어 낼 수 있다.
Symbol 값을 담게 된 user라는 이름의 변수는 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수
```javascript
const user = Symbol('this is a user');
user === 'this is user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false
...

const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');

console.log(symbolA === symbolB); // false
```


### BigInt

BigInt는 자바스크립트에서 아주 큰 정수(Integer)를 표현하기 위해 등장한 데이터 타입

(아직은 크게 사용할 필요가 없어보여서 정리 x)


## typeof 연산자
```javascript
typeof 'Codeit'; // string
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof true; // boolean
typeof(false); // boolean
typeof(123); // number
typeof(NaN); // number
typeof(456n); // bigint
typeof(undefined); // undefined
```
한 가지 주의해야 할 점은 typeof 연산자의 결과가 모든 타입과 1:1로 매칭되지 않는다는 점

<code>typeof null</code>을 하면 문자열 <code>null</code>이 리턴되는 게 아니라 문자열 <code>object</code>가 리턴
```javascript
typeof null; // object
```
자바스크립트에서 함수는 객체로 취급 그래서 간혹 object를 리턴할거라 예상하는 실수를 하기도 하는데 typeof 연산자를 함수에 사용하면 function이 리턴 된다

```javascript
function sayHi() {
  console.log('Hi!?');
}

typeof sayHi; // function
```


## null 병합 연산자 ?? (Nullish coalescing operator) [ES2020 추가]
물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자 

```javascript
const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';

console.log(example1, example2, example3); // I love Codeit
```

example1,2처럼 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴<br/>
example3처럼 연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴

## Truthy 값과 Falsy 값
```javascript
// falsy
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean(NaN);
Boolean('');

// truthy
Boolean(true);
Boolean('codeit');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
```


## 자바스크립트의 다양한 변수 선언 방식
자바스크립트에는 다양한 변수 선언 키워드가 있다. 자바스크립트가 처음 등장할 때부터 사용되던 <code>var</code>와, 그리고 <code>var</code>의 부족함을 채우기위해 ES2015에서 새롭게 등장한 <code>let</code>과 <code>const</code>

<code>var</code> 변수는 아래와 같은 특징 있다.
<ol>
    <li>변수 이름 중복선언 가능</li>
    <li>변수 선언 전에 사용 가능(호이스팅)</li>
    <li>함수 스코프</li>
</ol>

특히나 중복된 이름으로 선언이 가능했던 특징은 여러 사람이 협업할 때 생각보다 자주 문제
이런 문제를 개선하기 위해 ES2015에서 let과 const가 등장
<code>let , const</code> 변수는 아래와 같은 특징 있다.
<ol>
    <li>변수 이름 중복선언 불가 (SyntaxError 발생)</li>
    <li>변수 선언 전에 사용 불가 (ReferenceError 발생)</li>
    <li>블록 스코프</li>
</ol>

## 함수 스코프(function scope)와 블록 스코프(block scope)

var 키워드로 선언한 변수는 함수 스코프 <br/>
let과 const 키워드로 선언한 변수는 블록 스코프
```javascript
function sayHi() {
  var userName = 'codeit';
  console.log(`Hi ${userName}!`);
}
//함수 안에서 선언한 변수는 함수 안에서만 유효
//var 선언시 for, if, while는 블록 밖에서도 유효
console.log(userName); // ReferenceError
```


```javascript
//let 과 const 는 블록 안에서만 유효
function sayHi() {
  const userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

{
  let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError
```