//문자열표기 , null-undefined , typeof 

/*
문자열 표기 
'' , "" , `` 
백틱문자열 - ``
${}로 데이터표기 개인적으로 사용해본 문자열 표기중 가장편리

*/

// null-undefined
let x;
let y = null;

console.log(x === y);
console.log(x == y);
console.log(x == null);
console.log(y === undefined);

/*
false 
true
true
false
*/

let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1 = material1 + material4 ;
let result2 = Number(material1 + material4 );

// 연산을 통해 result1에 문자열 '34'를, 
// result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성해주세요.

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);

/*
34
string
34
number
*/