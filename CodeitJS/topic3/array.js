/*
배열(array),splic,shoft(),pop(),unshift(),push(),indexof(),lastindexof(),includes(),reverse(),for..of  ,다차원 배열     
*/
//객체(object)
let courseRanking = {
  '1st' : '자바스크립트 프로그래밍 기초' ,
  '2nd' : 'Git 으로 배우는 버전관리',
  '3rb' : '컴퓨터 개론',
  '4th' : '파이썬 프로그래밍 기초'
};

//배열 (Array)
let arrayRank = [
  '자바스크립트 프로그래밍 기초',
  'Git 으로 배우는 버전관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

//배열의 순서 indexing(0...~) 배열명[index]
console.log(arrayRank[0]);
let dataType = ['Number', 'String', 'Boolean', 'null', 'undefined', 'object'];
for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}

//배열의길이
let ArrayLength = '';
ArrayLength = dataType.length; // 6
ArrayLength = dataType['length'] // 6
console.log(dataType[dataType.length-1]; // object 배열 마지막 요소 접근

  //배열의 요소 추가 수정
  let members = ['쿤갈레','Zerrar66','우리생각해써','흙토끼','End Miracle'];
  //추가
  members[6] = 'Addel' // [5] empty. 영역은 잡아먹는다
  //수정은 존재하는 index의 요소의 접근해서 수정하면됌

 delete members[6]; //요소는 지워진것처럼 보이나 empty 영역자체를 삭제한건 아님

 //배열을 다루기위해서는 배열의 메서드를 활용해야함
 //splice 요소 삭제
 //splice (startIndex , deletecount , item)
 members.splice(1);

 let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1, 1, '사과', '청포도');
// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0, 1);
// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(ages.length - 1, 1);
// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2, 2, 26, 28);
// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);
// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
let i = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }
}

//배열의 첫요소 삭제 shoft() 
members.shift();
//배열의 마지막 요소를 삭제 pop()
members.pop();
//배열의 첫 요소로 값 추가 unshift(value)
members.unshift('fristAddEl');
//배열의 마지막 요소로 값추가 push(value)
members.push('LastAddEl'); 

//배열에서 특정 값 찾기 (indexOf / lastIndexOf) 

/*
array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인가능 
포함되어있으면 해당 index return 
없으면 -1 return 
여러 번 포함되어 있으면, 처음 발견된 index return 
*/

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); //1 
console.log(brands.indexOf('Daum')); // -1

//lastIndexOf() indexOf와는 반대로 탐색을 뒤에서 부터 
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.lastIndexOf('Kakao')); //3
console.log(brands.lastIndexOf('Daum')); //-1 

//배열에서 특정 값이 있는지 확인하기 (includes)
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.includes('Kakao')); //true
console.log(brands.includes('Daum')); //false 

//배열 뒤집기 (reverse)
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands); //(4) ["Google", "Kakao", "Naver", "Kakao"]
brands.reverse();
console.log(brands); //(4) ["Kakao", "Naver", "Kakao", "Google"] 


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array 배열 메서드 관련문서 

let influencer = ['snowonlog' , 'small.tiger','Minam.ludens','cu_conveniece24'];

for(let i =0; i < influencer.length; i++) {
  console.log(influencer[i]); 
}

for (let el of influencer){
  console.log(el);
}
//배열이 가지고있는 length 값 등등이 할당될수도있음 . for..in은 객체에 최적화가 되어있으니 배열에는 미사용을 권장 
for(let index in influencer){
  console.log(influencer[index]);
}

// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];
// 후보별 득표수 객체
let voteCounter = {};
// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
  if (name in voteCounter) {
    voteCounter[name]+= 1;
  } else {
    voteCounter[name] = 1;
  }
}
// 후보별 득표수 출력
console.log(voteCounter);

//다차원 배열
let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [],
  [],
];

for(let i = 0; i < groups.length; i++) {
  for(let j = 0; j < groups[i].length; j++) {
    teams[j][i] = groups[i][j];
  }
}

console.log(teams[0]);
console.log(teams[1]);