const flowers = ['장미', '수국', '백합', '튤립', '진달래'];

for (let i = 4; i; i = i - 2) {
  console.log(flowers[i]);
}
/*
4 , 2 , 0 순으로 반복 
i - 2가 i에 할당
이제 i는 숫자 0 
숫자 0은 falsy 값이기 때문에 for 문의 반복은 여기서 종료
4, 2 true 
0 false 
*/
if (flowers.length) {
  console.log(flowers[3]);
}
/*
lowers 배열에는 총 5개의 요소가 있으니깐 숫자 5가 true로 평가
숫자 0 은 falsy 값이라 false 
0을 제외한 숫자는 truthy 값이라 true 

이전에 교육받을때 falsy Object / truthy Object 라고 표현 
*/
if (Number('Test')) {
  console.log(flowers[1]);
}
/*
문자열 Test은 숫자로 형 변환했을 때 NaN 값
NaN 값은 falsy 값
*/
//출력결과는 진달래, 백합, 튤립 이 출력


//AND 와 OR의 연산방식 
function print(value){
    const message = value || 'TestMessage';
    console.log(message);
}
/*
value 값을 전달하지않으면 false 값으로 
이렇게 조건식처럼 활용도 가능 
*/
print(); //TestMessage 
print('Javascript');  // Javascript 



console.log('String' && 123); // 123
console.log({} || []); // {}
console.log(0 && false); // 0
console.log(null || undefined); //undefined
console.log(NaN && 'Codeit'); //Nan
console.log('' || true); //true
console.log('JavaScript' && null); //null
console.log(3000 || undefined); //3000

/*
'String' && 123은 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 123을 출력
{} || []은 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 {}을 출력
0 && false는 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 0을 출력
null || undefined는 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 undefined를 출력
NaN && 'Codeit'은 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 NaN을 출력
'' || true은 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 true를 출력
'JavaScript' && null는 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 null을 출력
3000 || undefined는 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 3000을 출력
*/

//변수와 스코프 