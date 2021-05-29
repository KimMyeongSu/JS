```html
<!DOCTYPE html>

<title>My First Website</title>

<h1>My First Page</h1>
<h2>I love HTML!</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```


## <code><!DOCTYPE> 선언</code>

<p>HTML 파일을 쓸 때는 가장 먼저 <!DOCTYPE> 선언 이전의 html 버전을 사용하려면 <!DOCTYPE>을 복잡하게 써야 하지만, 그냥 최신 버전인 HTML 5를 사용하기 위해서는 이렇게만 쓰면 된다</p>

    <!DOCTYPE html>

## <code>title 태그</code>

    페이지의 제목은 <title> 태그에 작성. 브라우저의 탭이나 방문 기록에 나와 있는 바로 그 제목이 이 곳에 들어감. <title>My First Website</title>

## <code><h1~h6> 태그</code>

    <h1>(heading 1), 그 다음으로 중요한 머리말은 <h2>(heading 2). 이런 식으로 h6</code>(heading 6)까지 작성 가능

## <code>p 태그</code>

    <p>(paragraph) 태그 안에 넣음. 물론 직접 설정할 수도 있지만 <p>태그 위, 아래에는 기본적으로 여백이 조금씩 있다.


## <code>b 태그</code>
    텍스트를 굵게 쓰고 싶으면 'bold'의 약자인 <b>태그를 사용


## i 태그
    텍스트를 날려 쓰고 싶으면 'italics'의 약자인 <i> 태그를 사용

## Phrase Tags
    <strong> 태그 , <em> 태그 <b><i>와 비슷하지만 강조의 목적

# CSS
## style 태그
```html
<style>
  h1 {
    color: green;
    text-align: center;
  }

  p {
    font-size: 18px;
  }
</style>

<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>
```

## style 속성

```html
<h1 style="color: green; text-align: center;">Hello World!</h1>
<p style="font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>
```

### 외부 CSS 파일 + link 태그

```css
h1 {
  color: green;
  text-align: center;
}

p {
  font-size: 18px;
}
```
```html 
<head>
<link href="css/styles.css" rel="stylesheet">
</head>

<body>
<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>
</body>
```