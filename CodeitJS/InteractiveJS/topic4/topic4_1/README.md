# 웹기초

## fetch

```javascript
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

```
<ol>
    <li>etch 함수는 Promise 객체를 리턴</li>
    <li>Promise 객체의 then 메소드로, 'response 왔을 때 실행할 Callback'을 등록</li>
    <li>등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다</li>
</ol>

## URL 

URL은 크게 다음으로 이루어져 있다.
<ol>
    <li>호스트(host)</li>
    <li>패스(path)</li>
    <li>쿼리(query)</li>
</ol>

<pre> 화면에서 클릭하는 버튼 등에 어느 URL로 새로운 리퀘스트를 보낼지,
 HTML 코드 또는 Javascript 코드로 다 작성이 되어있다. 
</pre>

```javascript
<a href="https://www.naver.com/"...>...</a>
<a href="/Test/threads/731" ...>...</a> 
```
<pre>개발자라면, 이런 path에 관한 설계, 
query에 관한 설계를 직접 해야 하기 때문에 URL의 구조에 대해서 정확하게 알고 있어야 한다. </pre>

