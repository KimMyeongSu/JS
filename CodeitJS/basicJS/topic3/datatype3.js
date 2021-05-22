
/*
기본형 (Primitive Type) 변수 = 값
Number , String , Null , Boolean , Undefined 등등 
각각 변수에 할당하고 변경하면 해당 변수만 변경
*/

/*
참조형 (Reference Type) 변수 = 주소값
Object 
주소를 참조하고있어서 값이 공유 
이부분은 추후에 그림으로 그려서 기록해둘것. 
*/


let x = {
    numbers: [1, 2, 3, 4],
    title: 'Codeit',
  };
  let y = x.numbers;// x의 numbers 프로퍼티를 변수 y에 할당 numbers 프로퍼티의 값이 배열이기 때문에 배열이 그대로 변수 y에 할당되는 것이 아니라 이 경우에도 주소 값이 할당
  let z = x.title; //title 프로퍼티의 값은 기본형 값이기 때문에 값이 그대로 할당 
   
  x.numbers.unshift(5);
  x.title = 'Hello';
  
  console.log(y); // [5, 1, 2, 3, 4]
  console.log(z); // Codeit


//참조형 복사하기  
//배열
let numbers1 = [ 1 , 2 , 3 ];
let numbers2 = numbers1;

console.log(numbers1);
numbers2.push(4); // 주소를 할당받기때문에 numbers1에도 값 변경
console.log(numbers1); //[ 1 , 2 , 3 , 4 ]

let numbers3 = [ 1 , 2 , 3 ];
let numbers4 = numbers3.slice();
console.log(numbers3);
numbers4.push(4); // slice로 값만 복사
console.log(numbers3);//[ 1 , 2 , 3  ]

//객체 
let course1 = {
    title : '파이썬 프로그래밍 기초',
    language : 'Python'
}

//let course2 = Object.assign({},course1); //값복사 가능 
let course2 = {};  //독립적인 객체로 값 복사  
for (let key in course1){
    course2[key] = course2[key];
}

function cloneObject(object){
    let temp = {}
    
    for (let key in object){
        temp[key] = object[key];
    }   
    return temp;
}
//이런식으로 객체 값 전달하면 주소가아닌 값으로 사용가능 
let course3 = cloneObject(course1);
let course4 = cloneObject(course1);


//상수 constant  변수 variable 
//이런식으로 변수를 상수로 변경하여 사용할수 있음 .

let x = 1;
x = 4;
const y = x;
console.log(x);
let team1 = ['Drum', 'Bass', 'Saxophone'];
//주소값을 할당하기때문에 값이 변경되는건 에러X 
const team2 = team1; 

team1.splice(2, 1, 'Trumpet'); 
team2.splice(2, 1, 'Piano');

console.log(team1); //[ 'Drum', 'Bass', 'Piano' ]
console.log(team2); //[ 'Drum', 'Bass', 'Piano' ]

//var 
//이제는 거의 사용되지 않는 var 변수 

//중복 선언 허용
//에러가 발생하는 것이 아니라 그냥 기존의 변수를 덮어써버림  
var myVariable = 'codeit';
console.log(myVariable);
var myVariable = 'Codeit!';
console.log(myVariable);

//함수 스코프 
//let과 const 키워드로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 
//코드 블록, 즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 가짐 
//var 키워드로 선언한 변수는 scope가 function에서만 구분
{
    let x = 3;
}
  function myFunction() {
    let y = 4;
  }
  console.log(x); //Uncaught ReferenceError: x is not defined
  console.log(y);


{
    var x = 3;
}  
  function myFunction() {
    var y = 4;
  } 
  console.log(x); //3 
  console.log(y); //Uncaught ReferenceError: y is not defined

  //ar 변수는 지역변수의 구분이 함수에만 있기 때문에 
  //if, for, while, switch 등 다양한 상황에서 선언한 변수가 자칫, 전역변수의 역할을 하게 될 수도 있음


  //끌어올림 (Hoisting)
console.log(myVariable); //Uncaught ReferenceError: Cannot access 'myVariable' before initialization
let myVariable;

console.log(myVariable);//undefined
var myVariable;

//변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고함 

console.log(myVariable); //undefined
var myVariable = 2; //선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에 값은 그대로 여기에있음
console.log(myVariable);//2


sayHi();

function sayHi() {
  console.log('hi');
}

/*
이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만,
코드의 흐름에는 부정적인 영향을 끼칠 수 있습니다. 그래서 함수를 선언할 떄는 가급적 코드 윗부분에 선언하거나,
호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성
*/