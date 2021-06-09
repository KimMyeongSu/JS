# JSON

<pre>JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한이 있다.</pre>
```javascript
// JavaScript Code member Object
const member = {
  name: 'Michael Kim',
  height: 180,
  weight: 70,
  hobbies: ['Basketball', 'Listening to music']
};
```

<pre>
 중괄호('{ }') 안에 객체의 프로퍼티의 이름(키)과 값(밸류)쌍을 순서대로
 나열해서 생성 Object Literal

Object Literal을 쓸 때는 문법에 약간의 유연함이 있음
member 객체의 각 프로퍼티의 이름인 name, height, weight, hobbies에 
큰따옴표를 붙이지 않았는데, Object Literal에서는 이렇게 프로퍼티의 
이름에 큰따옴표를 붙이지 않아도 된다.
</pre>
```javascript
//큰따옴표를 붙여도 됌
const member = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};
```

<pre>
 JSON의 경우에는 프로퍼티의 이름에 반드시 <b>큰따옴표</b>를 붙여줘야만 한다.
</pre>
```javascript
{
   "name":"Michael Kim",
   "height":180,
   "weight":70,
   "hobbies":["Basketball", "Listening to music"]
}
//큰따옴표로 감싸주지 않으면 JSON을 처리하려고 할 때 에러
```

``` javascript
const member = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};

{
   "name":"Michael Kim",
   "height":180,
   "weight":70,
   "hobbies":["Basketball", "Listening to music"]
}
```

<pre><b></b>JSON에서는 표현할 수 없는 값들이 있다</b>

자바스크립트에서는 프로퍼티의 값으로 사용할 수 있는 
undefined, NaN, Infinity 등을 JSON에서는 사용할 수 없다.

<b>JSON에는 주석을 추가할 수 없다</b>

JSON은 코드가 아니라 <b>데이터 포맷</b>이기 때문에 그 안에 주석을 포함시킬 수 없다.
</pre>


## JSON.parse()
```javascript
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.text())
        .then((result) => {const user = JSON.parse(result) ; 
            console.log(user.length);
            user.forEach(el => {
                console.log(el.name);
            });
        })   
```
<pre>
result 파라미터로 넘어올 때는 그 데이터 타입이 string이기 
때문에 자바스크립트 객체로 변환
자바스크립트의 기본 내장 객체인 JSON이라는 객체의 
parse 메소드의 파라미터로 해당 JSON 데이터를 넣어 사용

tring 타입의 JSON 데이터를 실제 자바스크립트 객체로 변환하는 것을 
Deserialization, 우리말로는 역직렬화라고 한다.
</pre>


## CRUD
<pre>
Create-Read-Update-Delete의 약자
</pre>

| 메소드 | 데이터처리 | 
|---|:---:|
| <code>GET</code> | READ
| <code>POST</code> | CREATE
| <code>PUT</code> | UPDATE
| <code>DELETE</code> | DELETE

## REST API
