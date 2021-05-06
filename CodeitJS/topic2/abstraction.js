/*추상화 Chapter 간략 표기를 추상화라고 표현한거같음 */
//할당연산자  = , 복합 할당 연산자(Compound assignment operators)

x = x + 1; x += 1;
x = x + 2; x += 2;
x = x * 2; x *= 2;
x = x - 3; x -= 3;
x = x / 2; x /= 2;
x = x % 7; x %= 7;

//증가(increment), 감소(decrement) 연산자 
//각각의 연산은 같다 . 
x = x + 1; x += 1; x++;
x = x - 1; x -= 1; x--;

//함수의 호출 
function calculateRectangleArea (width,height){
    return width * height;
  }
  // 테스트 코드
  let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
  let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
  let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산
  
  console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);


  //옵셔널파라미터(optional parameter) - 기본값 매개변수
  //Thompson : 옵셔널 파라미터가 아닌 변수를 옵셔널 파라미터보다 뒷쪽에 주면 에러 
function orderSetMenu(sandwich,drink='스프라이트'){
    console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`)
  }

  orderSetMenu('코드웨잇 클럽');
  orderSetMenu('터키베이컨 아보카도', '코카콜라');
  orderSetMenu('코드웨잇 멜트');
  orderSetMenu('이탈리안 비엠티', '닥터페퍼');
  orderSetMenu('에그마요', '환타 오렌지');

  //scope 
  /*Thompson : 각각의 블록의 변수 생존?유효범위 추후에 용어정리는
다시하겠지만 var는 블록 단위 개념이아니라 조금 다름 따로 정리예정*/

let x = 120;

function myFunction() {
  let x = 20;
  console.log(x);
}
myFunction();
console.log(x);
/*
실행결과 
20
120
*/


// 상수 const 
const adultTag = '삑!';
const teenagerTag = '삑삑!';
const errorTag = '삑삑삑!';
const transferTag = '환승입니다.';

function tagNotification(Teg){
  console.log(Teg);
}

// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);
/*
실행결과 
삑!
삑삑!
환승입니다.
삑삑삑!
삑!
*/