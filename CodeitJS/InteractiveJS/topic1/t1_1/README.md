##  자바스크립트로 태그 선택하기

```javaScript
document.getElementById('id') //HTML id속성으로 태그 선택하기 # 
document.getElementsByClassName('class') //HTML class속성으로 태그 선택하기 .
document.getElementsByTagName('tag') // HTML 태그 이름으로 태그 선택하기
document.querySelector('css') // css 선택자로 태그 선택하기
document.querySelectorAll('css') //css 선택자로 태그 선택하기
```

## 유사 배열
배열과 유사한 객체 ex) HTMLCollection, NodeList, DOMTokenList, ...
<ol>
    <li> 숫자 형태의 indexing이 가능</li>
    <li> length 프로퍼티 존재</li>
    <li> 배열의 기본 메소드를 사용X</li>
    <li> Array.isArray(유사배열)의 리턴값은 false</li>
</ol>


## 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
<ul>
    <li>이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들<br> ex) 버튼 클릭, 스크롤, 키보드 입력, ...</li>
    <li>이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일</li>
    <li>이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. 이벤트 리스너(Event Listener)라고도 부른다.</li>
</ul>

## 이벤트 핸들러를 등록하는 2가지 방법

### 자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
```javaScript
const btn = document.querySelector('#myBtn');

btn.onclick = function() {
  console.log('Hello onclick call!');
};
```

### HTML 태그의 onclick 속성에 바로 표시하기
```html
<button id="myBtn" onclick="console.log('Hello onclick call!')">클릭!</button>
```



