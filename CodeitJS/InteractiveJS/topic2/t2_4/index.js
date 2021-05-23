// 객체 Spread
const codeit = { 
    name: 'spread', 
  };
  
  const spreadClone = { 
    ...spread, // spread 문법!
  };
  
  console.log(spread); // {name: "spread"}
  console.log(spreadClone); // {name: "spread"}

//중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사
  const latte = {
    esspresso: '30ml',
    milk: '150ml'
  };
  
  const cafeMocha = {
    ...latte,
    chocolate: '20ml',
  }
  
  console.log(latte); // {esspresso: "30ml", milk: "150ml"}
  console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

  //spread 구문 연습 
const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요.
const mySnacks = [...snacks];
const myDrinks = [...drinks];

mySnacks.splice(2, 3);
myDrinks.splice(1);
// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요.
const myChoice = [...mySnacks,...myDrinks];

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.
printArguments(...myChoice);

//옵셔널 체이닝 (Optional Chaining)
//ECMAScript2020
function printCatName(user) {
    console.log(user.cat.name);
  }
  
  const user1 = {
    name: 'Captain',
    cat: {
      name: 'Crew',
      breed: 'British Shorthair',
    }
  }
  printCatName(user1); // Crew

  //응용
  function printCatName(user) {
    console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
  }
  const user2 = {
    name: 'Young',
  }
  printCatName(user2); // 함께 지내는 고양이가 없습니다.

  //배열 Destructuring 
  // 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요.
const numbers = [1, 2, 3];
const [one,two,three] = numbers;

// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요.
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
/*
let livingRoom = 'TV'
let kitchen= [1,2,3,4,5,6,7];
kitchen[1] = '냉장고'
*/
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = products;
// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요.
let firstName = 'Kang';
let lastName = 'Young';
[firstName,lastName] = [lastName,firstName];
// 테스트 코드
console.log(one); //1
console.log(two); //2 
console.log(three); //3
console.log(livingRoom); //TV
console.log(kitchen[1]); //냉장고
console.log(firstName); //Young
console.log(lastName); //Kang

//객체 Destructuring 

// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요.
const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};
const {title,artist,year,medium} = myBestArt;

// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당해 주세요.
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};
const {title : songName ,artist : singer ,...rest} = myBestSong;


// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요.
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다.
	const {name, ice = menu?.ice ?? true} = menu ;
	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}

// 테스트 코드
console.log(title);//별이 빛나는 밤에
console.log(artist);//빈센트 반 고흐
console.log(year);//1889
console.log(medium);//유화
console.log(songName);//무릎
console.log(singer);//아이유(IU)
console.log(rest);//{ release: '2015.10.23.', lyrics: '모두 잠드는 밤에...' }
printMenu(menu1);//주문하신 메뉴는 '아이스 아메리카노'입니다.
printMenu(menu2);//주문하신 메뉴는 '아이스 바닐라 라떼'입니다.
printMenu(menu3); //주문하신 메뉴는 '따뜻한 카페 모카'입니다.



//try ..catch() 예제
const quiz1 = {
  question: '다음 중 스승의 날과 생일이 같은 인물은 누구일까요?',
  example: [ '율곡 이이', '퇴계 이황', '세종대왕', '신사임당'],
  answer: 3,
  solution: '훈민정음 창제 등 우리나라 문화와 교육발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바램으로 세종대왕의 탄신일이 스승의 날로 지정되었습니다.',
};

const quiz2 = {
  question: '다음 중 희노애락에 속하지 않는 것은 무엇일까요?',
  example: ['사랑', '기쁨', '즐거움'],
  answer: 1,
  solution: '희노애락에서의 애를 사랑 애(愛)라고 자칫 오해하는 경우가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.',
};

function printQuiz({ question, example }) {
  try {
    let exMsg = '';

    for (let i = 0; i < example.length; i++) {
      exMsg += `${i + 1}. ${example[i]}  `;
    }

    console.log(question);
    console.log(exMsg);
  } catch (e) {
    console.log(e.name);
  }
}

// 테스트 코드
printQuiz(quiz1);
printQuiz(1);
printQuiz("");
printQuiz({});
printQuiz(quiz2);












