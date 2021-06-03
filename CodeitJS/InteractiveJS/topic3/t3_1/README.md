# 객체와 클래스

##  Object literal과 Factory function 사용하기
```javascript
//객체를 생성하는 Factory function을 만들고, 
//그 안에서 Object literal로 객체를 생성하여 리턴하는 방법
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');

```

## Constructor function 사용하기
```javascript
//객체를 생성하는 용도로 사용하는 Constructor function을 정의
//그 안에서 this 키워드를 사용하여 생성될 객체의 프로퍼티와 메소드를 설정하는 방법
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```

<pre>Constructor function으로 객체를 생성하려면 
그 앞에 <b>new</b>를 붙여서 실행</pre>

##  class 키워드 사용하기
```javascript
//class 키워드를 사용해서 객체의 틀을 정의
//그 앞에 new를 붙여서 객체를 생성하는 방법
//프로퍼티의 경우 constructor 안에 정의하고, 메소드의 경우 constructor 밖에 정의
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```




