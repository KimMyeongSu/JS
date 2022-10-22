/*
* Function 에 대한 설명 

-함수란 자신의 외부(재귀 함수의 경우 스스로) 코드가 '호출'할 수 있는 하위 프로그램입니다
-함수에 값을 '전달'하면, 함수는 값을 '반환'

-JavaScript의 함수는 다른 모든 객체처럼 속성과 메서드를 가질 수 있으므로 일급(first-class) 객체
-함수는 Function 객체 

*/

//함수 정의 
//function name (param1,param2) {body ... return;}

function printHello(){
    console.log('hello')
}

//Arrow function 
// 항상 이름이 없음  always anonymous 

const sampleFnc = function() {
    console.log('sampleFnc');
}

const sampleFnc = () => console.log('sampleFnc');
const add = (num1, num2) => num1 + num2;

// 3개다 같은 표현 
let doubleNum = function nomalFnc(num){
    return num *2;
}
let doubleNum=(num)=> {return num *2}
let doubleNum=(num)=>  num * 2



