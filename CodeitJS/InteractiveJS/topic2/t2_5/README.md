## forEach 메소드
배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드
 <code>forEach</code> 메소드는 첫 번째 아규먼트로 콜백 함수를 전달받는데 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달(index와 array는 생략가능)
 ```javascript
 const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
 ```

 
 ## map 메소드
 forEach와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드단, 첫 번째 아규먼트로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징이 있다.
 ```javascript
 const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]
 ```

 ## filter 메소드
 <code>filter</code> 메소드는 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴


 ```javascript 
 //추후 
   {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((element, index, array) => {
  return element.brand === 'Apple';
});

console.log(apples); 
// (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]
 ```

 ## find 메소드
 <code>find</code> 메소드는 <code>filter</code> 메소드와 비슷하게 동작하지만, 배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료
 ```javascript
 const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const myLaptop = devices.find((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}
 ```
 ## some 메소드
 <code>some</code> 메소드는 배열 안에 콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드, 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 false를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하는 요소가 등장한다면 바로 true를 리턴하고 반복을 종료
 ```javascript
 const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
  return element > 5;
});

console.log(someReturn); // true;
 ```
 ## every 메소드
 <code>every</code> 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드, 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 true를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하지 않는 요소가 등장한다면 바로 false를 리턴하고 반복을 종료

 ```javascript
 const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;
 ```
 ## reduce 메소드
<code>reduce</code> 메소드는 누적값을 계산할 때 활용하는 조금 독특한 메소드, <code>reduce</code> 메소드는 일반적으로 두 개의 파라미터를 활용, 첫 번째는 반복동작할 콜백함수입니다. 매번 실행되는 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫번째 파라미터로 전달 결과적으로 마지막 콜백함수가 리턴하는 값이 <code>reduce</code> 메소드의 최종 리턴값 이 때 <code>reduce</code> 메소드의 두 번째 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫 번째 파라미터로 전달
```javascript 
const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll); // 10
```

 ## sort 메소드
sort라는 메소드를 활용하면 배열을 정렬할 수 있다. sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 <b>유니코드</b>에 정의된 문자열 순서에 따라 정렬
```javascript
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
```
 <b>유니코드</b>에 정의된 순서 때문에 numbers에 sort 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다. 그럴 땐 sort 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데
```javascript
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```
sort 메소드를 사용할 때 한 가지 주의해야될 부분은 메소드를 실행하는 원본 배열의 요소들을 정렬한다는 점. 그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니까, 원본 배열의 순서가 필요하다면 미리 다른 변수에 복사해두어야함

 ## reverse 메소드
<code>reverse</code> 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 ,<code>reverse</code> 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순이 메소드를 호출해주기만 하면 배열의 순서가 뒤집힘. sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점은 꼭 주의!

 ## Map
 <code>Map</code>은 이름이 있는 데이터를 저장한다는 점에서 <b>객체와 비슷</b>합니다. 하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 <code>Map</code>은 메소드를 통해서 값을 추가하거나 접근할 수 있음.
new 키워드를 통해서 <code>Map</code>을 만들 수 있고 아래와 같은 메소드를 통해 <code>Map</code> 안의 여러 값들을 다룰 수 있다.
<ul>
<li><code>map.set(key, value)</code>: key를 이용해 value를 추가하는 메소드.</li>
<li><code>map.get(key)</code>: key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.</li>
<li><code>map.has(key)</code>: key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.</li>
<li><code>map.delete(key)</code>: key에 해당하는 값을 삭제하는 메소드.</li>
<li><code>map.clear()</code>: Map 안의 모든 요소를 제거하는 메소드.</li>
<li><code>map.size</code>: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)</li>
</ul>

```javascript

// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
```

문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게 <code>Map</code> 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점


 ## Set

 <code>Set</code>은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷하다. 하지만, 배열의 메소드는 활용할 수 없고 <code>Map</code>과 비슷하게 <code>Set</code>만의 메소드를 통해서 값을 다루는 특징이 있다.
<code>Map</code>과 마찬가지로 new 키워드로 <code>Set</code>을 만들 수 있고 아래와 같은 메소드를 통해 <code>Set</code> 안의 여러 값들을 다룰 수 있다.
<ul> 

<li><code>set.add(value)</code>: 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)</li>
<li><code>set.has(value)</code>: Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.</li>
<li><code>set.delete(value)</code>: 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)</li>
<li><code>set.clear()</code>: Set 안의 모든 요소를 제거하는 메소드.</li>
<li><code>set.size:</code> 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)</li>
</ul>

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
```

한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, <code>Map</code>은 get메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데, 한 가지 특이한 점은 <code>Set</code>에는 개별 값에 바로 접근하는 방법이 없다는 점

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
```

그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있다.
그런데, 이런 특징을 가지고도 <code>Set</code>이 유용하게 사용되는 경우가 있는데, 바로, <b>중복을 허용하지 않는 값</b>들을 모을 때.

<code>Set</code>은 <b>중복되는 값을 허용하지 않는 독특한 특징</b>이 있다. <code>Set</code> 객체에 요소를 추가할 때 이미 <code>Set</code> 객체 안에 있는 값(중복된 값)을 추가하려고 하면 그 값은 무시되는 특징이 있다.
처음 <code>Set</code>을 생성할 때 아규먼트로 배열을 전달할 수가 있는데, 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 <code>Set</code>을 활용할 수 있다.

