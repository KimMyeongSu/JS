##  window 객체

<b>window 객체</b>는 브라우저 창을 대변하면서 자바스크립트에서 최상단에 존재하는 객체
자바스크립트 코드 어느 곳에서나 항상 접근할 수 있는 객체이기 때문에 전역 객체, 영어로는 <b>Global Object</b>
어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 window.을 생략가능


## DOM

<b>DOM</b>이란 <b>Document Object Model</b>의 약자로, 한국어로는 문서 객체 모델
간단하게 표현하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것
이때 각 객체를 <b>노드(Node)</b>라는 용어로 표현하고, 태그는 <b>요소 노드</b>, 문자는 <b>텍스트 노드</b>로 구분


## DOM 트리
HTML의 계층 구조는 DOM에서도 반영되는데 이러한 계층구조를 나무에 비유해서 DOM 트리라고 부름
각 노드 간의 관계는 <b>부모</b>, <b>자식</b>, <b>형제</b>라는 용어로 표현

## DOM 이동 시 활용 가능한 프로퍼티
```javaScript
element.children	//자식요소노드	element의 자식 요소 모음(HTMLCollection)
element.firstElementChild//	자식요소노드 element의 첫 번째 자식 요소 하나
element.lastElementChild//	자식요소노드 element의 마지막 자식 요소 하나
element.parentElement//	부모요소노드 element의 부모 요소 하나
element.previousElementSibling//형제요소노드 element의 이전(previous)혹은 좌측(left)에 있는 요소 하나
element.nextElementSibling//형제요소노드 element의 다음(next) 혹은 우측(right)에 있는 요소 하나
node.childNodes	//자식노드 node의 자식 노드 모음(NodeList)
node.firstChild	//자식노드 node의 첫 번째 자식 노드 하나
node.lastChild	//자식노드 node의 마지막 자식 노드 하나
node.parentNode	//부모노드 node의 부모 요소 하나
node.previousSibling//형제노드 node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
node.nextSibling//형제노드 node의 다음(next) 혹은 우측(right)에 있는 노드 하나
```

## 주요 요소 노드 프로퍼티

| 프로퍼티 | 내용 | 
|---|:---:|
| `element.innerHTML` | 요소 노드 내부의 HTML코드 문자열로 리턴	요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용 
| `element.outerHTML` | 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴 outerHTML은 새로운 값을 할당하면 요소 자체가 교체되어 버리기 때문에 주의
|`element.textContent`|요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴	textContent는 말그대로 텍스트만 다루기 때문에 HTML태그를 쓰더라도 모두 텍스트로 처리됨


## 요소 노드 다루기
<ul>
<li>요소 노드 만들기: <b>document.createElement('태그이름')</b></li>
<li>요소 노드 꾸미기: <b>element.textContent, element.innerHTML, ...</b></li>
<li>요소 노드 추가 혹은 이동하기: <b>element.prepend, element.append, element.after, element.before</b></li>
<li>요소 노드 삭제하기: <b>element.remove()</b></li>
</ul>

##  HTML 속성 다루기
대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환 하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환 불가 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있음

```javaScript
element.getAttribute('속성');
element.setAttribute('속성', '값');
element.removeAttribute('속성');

```

## 스타일 다루기
자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지
<ol>

<li>style 프로퍼티 활용하기: <code>element.style.styleName = 'value';</code></li>
<li>class 변경을 통해 간접적으로 스타일 적용하기: <code>element.className, element.classList</code></li>
style 프로퍼티 활용 보다는 class 변경을 통해 간접적으로 스타일 적용하기를 많이사용
</ol>


### classList의 자주사용하는 메소드
```javaScript
classList.add //클래스 추가하기
classList.remove //클래스 삭제하기
classList.toggle //클래스 없으면 추가, 있으면 삭제하기
};
```





