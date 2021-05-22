// if , 

/* if , else - if  , for , while , break , 피보나치 */
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';
// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  //myAge ,myGender 
  if(myAge == yourAge){
    return  '친구';
  }else if (myAge > yourAge && myGender != yourGender) {
    return  '여동생';
  }else if (myAge > yourAge && myGender == yourGender) {
    return  '남동생';
  }else if (myAge < yourAge && myGender == yourGender) {
    return  '형';
  }else if (myAge < yourAge && myGender != yourGender) {
    return  '누나';
  }
}

/*
switch
*/
switch(myChoice) {
    case 1:
      console.log('토끼를 선택한 당신, ...');
      break;
    case 2:
      console.log('고양이를 선택한 당신, ...');
      break;
    case 3:
      console.log('코알라를 선택한 당신, ...');
      break;
    case 4:
      console.log('강아지를 선택한 당신, ...');
      break;
    default:
      console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
  }

/*
witch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것
if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다는 것.
*/



/*
1. 추가동작부분을 꼭 채울 필요는 없다. 
2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
3. 초기화 부분도 반드시 채울 필요는 없다.
 */

//1 
for (let i = 1; i <= 10;) {
    console.log(`${i} for Test1`);
    i++;
  }
//2 
for (let i = 1; i <= 10; i++) {
    console.log(`${i} for Test2`);
  }
//3
let i = 1; 
for (; i <= 10; i++) {
  console.log(`${i} for Test3`);
}  


/*
while 
정수 180의 약수를 모두 출력
 */
const N = 180;
let i = 1;

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
  }
  i += 1;
}

/*
피보나치 
반복문을 활용해서 피보나치 수열의 첫 50개 항을 차례대로 출력
*/
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}