## 조건부 연산자 (Conditional operator)

### 삼항 연산자 (Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자 
```javascript
const cutOff = 80;
const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';
console.log(passChecker(75));
```
간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현할 수 있는 장점이 있지만 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장은 작성할 수 없다는 한계가 있기 때문에 if문을 완벽하게 대체할 수는 없다

## Spread 구문
여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수 있다.
```javascript 
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있다. 참고로 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다

```javascript
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!
```

## 모던한 프로퍼티 표기법
ES2015 이후부터는 자바스크립트에서 변수나 함수룰 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있다.

```javascript
function sayHi() {
  console.log('Hi!');
}

const title = 'v_title';
const birth = 2017;
const job = 'developer';

const user = {
  title, 
  birth, 
  job, 
  sayHi,
};

console.log(user); // {title: "v_title", birth: 2017, job: "developer", sayHi: ƒ}
//function 키워드 생략가능 
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [myFunction()]: 'developer',
};

console.log(user);
```


## 구조 분해 Destructuring
```javascript
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환
console.log(coupon); // 촬영하는재하

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000

//함수에서 default parater, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용

// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};
```

## 에러와 에러 객체

에러가 발생하면 에러에 대한 정보를 name과 message라는 프로퍼티로 담고 있는 에러 객체가 만들어짐

### 대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError

new 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있다<br/>
<code>throw new TypeError('타입 에러가 발생했습니다.');</code>

## try catch문

```javascript 
try {
  // 실행할 코드
} catch (error) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
```