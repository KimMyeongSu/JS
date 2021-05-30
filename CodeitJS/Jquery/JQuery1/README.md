## JQuery 사용하기  설치


### 링크를 사용하는 방법 (코드안에 CND 포함하기)
```javascript
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
  //자바스크립트 코드
</script>
```


### 직접 jQuery 코드를 다운받아서 쓰는 방법

jQuery 사이트에 들어가서 jQuery 코드를 직접 다운로드
프로젝트 안의 어딘가에 주고, script 태그에 jquery.js 파일에 대한 경로를 써준다

```javascript
//넣어둔 JQuery file경로
<script src="js/jquery-3.2.1.min.js"></script> 
<script>
  // 자바스크립트 코드
</script>
```

### Jquery - JavaScript
<pre>onclick Event 에서 JQuery 함수 호출</pre>
```javascript
$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);
```
<pre>JavaScript로 구현한 동일한 내용</pre>
```javascript
document.getElementById('home').addEventListener('click', clickHome);
document.getElementById('seoul').addEventListener('click', clickSeoul);
document.getElementById('tokyo').addEventListener('click', clickTokyo);
document.getElementById('paris').addEventListener('click', clickParis);
```


