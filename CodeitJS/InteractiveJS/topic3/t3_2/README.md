# 캡슐화

## 캡슐화를 하는 방법
```javascript 
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }
  ```
   <pre>   getter/setter 메소드로만 접근해야 한다는 것
   하지만 보호하려는 프로퍼티 _email에 아래처럼 접근가능
   </pre>

   ```javascript
    console.log(user1._email);
    user1._email = 'chris robert';
   ```

   ```javascript
   function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1.email); //chris123@google.com
```

<pre>클로저란 자바스크립트에서 어떤 함수와 그 함수가 
참조할 수 있는 값들로 이루어진 환경을 하나로 묶은 것

자바스크립트의 클로저(Closure)로 인해 
함수 안의 변수의 값을 이미 리턴된 객체에서 읽는게 가능
</pre>


<pre> 클로저가 아닌 경우에는 _email 변수에 접근할 수 없다</pre>
```javascript
function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1._email); // _ 추가 //undefined
```


## 메소드 캡슐화
```javascript
function createUser(email, birthdate) {
  const _email = email;
  let _point = 0;
//increasePoint라는 함수가 보호받고 있는 함수
  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);
```


<pre> 프로퍼티와 마찬가지로 클로저를 통해 캡슐화를 해서 보호할 수 있다</pre>

## 추상화(Abstraction)

<pre>
객체를 만드는 과정은 현실 또는 가상의 존재를 프로그램 내에서 
사용할 용도에 맞게 적절하게 설계하는 과정
객체를 만들고 나면 그 객체를 사용하는 사람은 객체 내부에 존재하는 복잡한 원리를 
모르더라도 객체 외부에 공개된 프로퍼티나 메소드만을 가지고도 객체를 문제없이 잘 사용할
수 있어야함,우리가 아주 세밀한 원리까지 속속들이 알고 있지 않은 유명한 라이브러리나 
프레임워크를 문제없이 사용할 수 있는 것은 그것들이 적절하게 추상화되어 있기 때문
</pre>
```javascript
class User {
  constructor(email, birthdate) {
    // 사용자의 이메일 주소
    this.email = email;
    // 사용자의 생일
    this.birthdate = birthdate;
  }

  // 물건 구매하기
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}
```

## 캡슐화(Encapsulation)
<pre>
캡슐화는 객체 외부에서 함부로 접근하면 안되는 프로퍼티나 메소드에 직접 접근할 수 없도록 
하고, 필요한 경우 공개된 다른 메소드를 통해서만 접근할 수 있도록 하는 것을 의미

 객체를 사용하는 입장에서는 사용하라고 공개된 것 이외에는 되도록 접근하지 말고, 객체를 
 만드는 입장에서도 미리 보호해야할 프로퍼티나 메소드를 캡슐화해두어야 한다
</pre>
```javascript
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const user1 = new User('charlie123@google.com', '2000-12-05');

console.log(user1.email); // email이라는 getter 메소드 실행 
user1.email = 'new123@google.com'; // email이라는 setter 메소드 실행
```
## 상속(Inheritance)
```javascript 
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
} 

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}
```
<pre>
필요한 경우에는 자식 클래스에서 부모 클래스와 동일한 이름의 메소드를 <b>재정의(오버라이딩, overriding)</b>할 수도 있는데 이 오버라이딩은 바로 다음에 나오는 '다형성'과 연관이 깊다
</pre>
## 다형성(Polymorphism)
<pre>
다형성은 하나의 변수가 다양한 종류의 클래스로 만든 여러 객체를 가리킬 수 있음을 의미
</pre>

```javascript
  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = { 
  name: '스웨터', 
  price: 30000, 
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
```