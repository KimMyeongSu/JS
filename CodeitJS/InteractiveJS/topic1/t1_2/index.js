const doingList = document.querySelector('#doing-list');
const doneList = document.querySelector('#done-list');



console.log(doneList.parentElement.firstElementChild.nextElementSibling.children[3]); //<li>나는 자는 동안에도 돈을 번다</li>
console.log(doneList.lastElementChild.parentElement.children[3]); //<li>손에 잡히는 10분 SQL</li>
console.log(doingList.children[2].nextElementSibling); //<li>나는 자는 동안에도 돈을 번다</li>
console.log(doingList.parentElement.children[1].children[3]); //<li>나는 자는 동안에도 돈을 번다</li>

//DOM 의 각 노드들은 정말 다양한 프로퍼티를 가지고있음 

const myTag = document.querySelector('#list-l')
console.log(myTag.innerHTML);

//innerHTML 해당 태그 안에 HTML 요소값 을 가르킴 
//요소확인보다는 요소 수정에서 더 많이 사용
myTag.innerHTML = '<li>식객</li> <li>웨이트트레이닝 최강의 식사법</li> <li>코딩을 지탱하는 기술</li>'

// outerHTML 해당 태그 HTML 요소값 <ul>까지  해당요소 자체를 가르킴 
//새로만드는 거기때문에 수정개념이아닌 drop - create 
console.log(myTag.outerHTML);

//textContent
//Text로 수정하기때문에 HTML 태그 사용 불가 그대로 출력
myTag.textContent = 'testContent';

//기존 요소를 그대로 두고 수정하려면 이렇게 기존값 활용
const today = document.querySelector('#today');
today.innerHTML = '<li>처음</li>' +today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

//outerHTML의 경우에는 drop & cretate 이기떄문에 Selector도 다시 선택해줘야함 
today.outerHTML = '<p>이전</p>' + today.outerHTML; 
const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';


// 요소 노드 추가하기 document.createElement
const tomorrow = document.querySelector('#tomorrow');
// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');
// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';
// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);


// 노드 삭제하기 Node.remove();
//tomorrow.remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);


// HTML 속성 (HTML attribute)
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
//tomorrow.setAttribute('class', 'list'); // 추가
//link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
//console.log(link.href);
console.log(tomorrow.href);

// 스타일 다루기

// elem.classList: add, remove, toggle

item.classList.add('done');
item.classList.remove('done');
item.classList.toggle('done');

// elem.className
//today.children[1].className = 'done';

// style 프로퍼티
// 권장되지않음 클래스를 style 에 넣어두고 스크립트에서 클래스변경
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
//today.children[2].style.textDecoration = 'line-through';
//today.children[2].style.backgroundColor = '#DDDDDD';