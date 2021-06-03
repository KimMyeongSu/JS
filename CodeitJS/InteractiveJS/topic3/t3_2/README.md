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