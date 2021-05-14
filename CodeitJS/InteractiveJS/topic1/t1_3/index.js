
//이벤트 핸들러 등록하기

let btn = document.querySelector('#myBtn');

btn.onclick = function() {
    console.log('Hi fncOnClick');
};

//onclick Event도 새로운 값을 할당하면 기존꺼는 덮어씀
btn.onclick = function(){
    console.log('Hi again');
};

//이러한 문제를 해결하기위해서 아래처럼 사용도가능하지만 
//이벤트가 복잡해지고 return값을을 처리해주기위해선 addEventListener를사용
let btn2 = document.querySelector('#myBtn2');

function event1(){
    console.log('Hi fncOnClick');
}
function event2(){
    console.log('Hi again');
}

btn2.onclick = function(){
    event1();
    event2();
};

// el.addEventListener(event,handler)
// 이방법이 이벤트 핸들러를 등록할때 가장 권장되는 방법 
//하나의 요소에 여러개의 독립적인 이벤트 등록가능 
let btn3 = document.querySelector('#myBtn3');
function eventbtn3_1(){
    console.log('Hi fncOnClick');
}
function eventbtn3_2(){
    console.log('Hi again');
}
btn3.addEventListener('click',eventbtn3_1);
btn3.addEventListener('click',eventbtn3_2);

//이렇게 등록한 이벤트는 removeEventListener(evert,handler) 로 삭제 
btn3.removeEventListener('click',eventbtn3_2);

// 주의할것 removeEventListener 사용시 외부에서 함수가 작성되어야 삭제가능 
btn3.addEventListener('click',function(){ //이렇게 작성과 동시에 추가도 가능함 
        console.log('function 바로작성');
});
btn3.removeEventListener('click',function(){ //작성코드를 삭제는 불가능함
    console.log('function 바로작성');
});

// content2 

// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event) {
  console.log(event);
	event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);

