//함수를 만드는 방법
function 함수이름(){
 동작
 return 리턴값    
}

//함수표현식 Function Expression 
const printFunction = function () {
    console.log('PrintFunction() 호출')
}

printFunction();

//앞자리 하나씩만 뽑아서 단어만들기
function firstWords() {
    let word = '';
    
    for(const arg of arguments) {
      word += arg[0];
    }
    console.log(word);
  }
  
  firstWords('나만', '없어', '고양이');
  firstWords('아니', '바나나말고', '라면먹어');
  firstWords('만두', '반으로', '잘라먹네', '부지런하다');
  firstWords('결국', '자바스크립트가', '해피한', '지름길');
  firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');

//첫요소 제거
function ignoreFirst(first, ...rest) {
    for (const el of rest) {
      console.log(el);
    }
  }
  
  ignoreFirst('1세대', '2세대', '3세대');
  ignoreFirst('곰팡이', '강아지', '고양이');
  ignoreFirst(20, 9, 18, 19, 30, 34, 40);

//Arrow Function 으로 변환 
/*
const getObject = function(a, b, c) {
    return { 0: a, 1: b, 3: c };
  }
*/
const getobject = (a,b,c) => ({
      0: a, 1: b, 3: c 
});


//this 

