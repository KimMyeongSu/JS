//숫자표기법 , toFixed, toString , Math객체 ,문자열

//지수표기 
console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);;
console.log(-6.1e8 === -610000000)

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//8진법 (Octal)
let octal = 0o377; //255
//2진법 
let binary = 0b11111111; //255 

// Number 
let myNumber = 0.3591; 

//toFixed() 반올림  반환 String + , Number()로 숫자로 변경 
console.log(typeof(myNumber.toFixed(2)));//string 
console.log(typeof(Number(myNumber.toFixed(2))));//number
console.log(typeof(+myNumber.toFixed(2))); //number


//toString() 
myNumber = 255;
console.log(255..toString(2)); //11111111
//255.toString(2) .표기가아니라 소주점으로 인식 그래서 255..toString
console.log(myNumber.toString(8));// 377
console.log(myNumber.toString(16));//ff

//절댓값 (Absolute Number)
//Math.abs(x)를 하면 x의 절댓값 return 
console.log(Math.abs(-10)); // 10 

//최댓값 (Maximum)
//Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 return
console.log(Math.max(2, -1, 4, 5, 0)); // 5 

//최솟값 (Minimum)
//Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 return
console.log(Math.min(2, -1, 4, 5, 0)); // -1 

//거듭제곱 (Exponentiation)
//Math.pow(x, y)를 하면 x의 y승의 결괏값이 return 
console.log(Math.pow(5, 2)); // 25 

//제곱근 (Square Root) 
//Math.sqrt(x)를 하면 x의 제곱근이 return 
console.log(Math.sqrt(25));

//반올림 (Round) 
//Math.round(x)를 하면 x의 반올림된 값이 return 
console.log(Math.round(2.49)); //2


//버림과 올림 (Floor and Ceil)
//Math.floor(x)을 하면 x의 버림 값
//Math.ceil(x)을 하면 x의 올림 값 
console.log(Math.floor(2.49)); //2
console.log(Math.ceil(2.49)); //3

//난수 (Random)
//Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 return 
console.log(Math.random()); //랜덤값 

//Math 객체 메서드 링크 
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math


//예제 문제 이자율 계산 
//toFixed 메소드를 활용하면, 문자열이 리턴되기 때문에 숫자 값이 필요하다면  반드시 숫자형으로 형변환 해야한다는것
function interestCalculator(rate, payment, term) {
    let interest = +(payment * term * (term + 1) / 2 * rate / 12).toFixed();   
    console.log(interest);
  }



  //String 
  let myString = 'Test String';
  //부분 문자열 접근 slice(start,end) 
  console.log(myString.slice(0,2)); //Te
  console.log(myString.slice(3)); //t String
  console.log(myString.slice()); //Test String 
  //대소문자 변환   
  console.log(myString); //앞부터 
  console.log(myString); //뒤부터

  //요소탐색  
  console.log(myString.indexOf('T')); //앞부터 
  console.log(myString.lastIndexOf('T')); //뒤부터

  //요소접근
  console.log(myString[3]); //대괄호 표기 S 
  console.log(myString.charAt[3]); //ChatAt 메서드 S 
  
  //요소접근
  console.log(myString[3]); //대괄호 표기 S 
  console.log(myString.charAt[3]); //ChatAt 메서드 S 


  //문자열에서 특정 문자열만 추출 예제 
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');

hyungdon = lyrics.slice(startIndex, endIndex);

console.log(hyungdon);


