
/*
객체 Object
자바스크립트의 모든것은 객체로 되어있다고 말할만큼 객체를 잘다루는건 중요
객체는 중괄호로 구분해서 만
key - value 을 객체의 속성 (property)라고
*/
let objectExample =
{
  brandName: 'JS정리',
  bornYear : '2021',
  isVeryNice: true,
  'is Very Nice' : true,
  propertyInproperty  : {
      title : '자바스크립트 객체',
      language : 'JavaScript'
  }
}

//점표기법  (objectName.propertyName)
console.log(objectExample.brandName);
console.log(objectExample.propertyInproperty.title);
//대괄호표기법 (objectName['propertyname'])
//propertyname을 조금 유연하게 사용 가능
console.log(objectExample['is Very Nice']);
console.log(objectExample['is'+' Very '+'Nice']);
console.log(objectExample.propertyInproperty['title']);

let valueString = 'isVeryNice'
console.log(objectExample[valueString]);

/*
존재하지않는 property에 접근하면 에러가 아닌 undifined
=== undifined 일경우 추가? 이런 기능으로 활용가능
*/
console.log(objectExample[undifinedProperty]);

let myVoca = {
 'function': '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인'
};
console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);


/*
객체의 property 를 수정 추가 삭제
수정 : 해당 프로퍼티에 접근해서 새로운 값 할당 (변수 값 재할당과 같음)

*/
myVoca.local = '지역의,현지의';
//추가 undifined라면 새로 추가
myVoca.orange = '오렌지';
//삭제
delete myVoca.orange;
console.log(myVoca.orange !== undefined);
// (propertyName in Object)  조금더 안전하게 프로퍼티값 확인 가능 undefined 값을 할당할수도 있으니까
console.log('orange' in myVoca);


//메소드 객체안에 동작부 함수

let myVoca = {
  addVoca: function (key, value) {
    myVoca[key] = value;
  },
  deleteVoca: function (key) {
    delete myVoca[key];
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

//for..in
/*
for (value in object){
  동작부분
}
객체의 프로퍼티 갯수만큼 반복
*/
let hyesoonScore = {
  '데이터 모델링의 이해': 10,
  '데이터 모델과 성능': 8,
  'SQL 기본': 22,
  'SQL 활용': 18,
  'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
  '데이터 모델링의 이해': 14,
  '데이터 모델과 성능': 8,
  'SQL 기본': 12,
  'SQL 활용': 4,
  'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  // 여기에 코드를 작성해 주세요.
  let totalScore = 0;

  for (let subject in scoreObject) {
    totalScore += scoreObject[subject];
  }

  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
  } else {
    console.log('아쉽지만 불합격입니다..');
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);

//date object 이건 생각보다 많이 쓰이고 응용,활용도가 높음

let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
