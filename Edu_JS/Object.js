/*
Object
one of the JavaScript's 
JavaScript의 data Type중 하나 
a collection of related data and/or functionality
관련 data 및/또는 기능 모음 
Nearly all objects in JavaScript are instnaces of Object 
초기 JavaScript의 모든 객체는 객체의 인스턴스이다.
*/
//1. Literals and properties 
const name = 'eruda'
const age = 30
const eruda = {
    name: 'eruda',
    age: 30,
}

const print = (name,age) => {
    console.log(name);
    console.log(age);
}
const printobj = (person) => {
    console.log(person.name);
    console.log(person.age);
}
print(name,age);
printobj(eruda);


const obj1 = {}; // 'object literal' syntax 
const obj2 = new Object(); // 'object constructor' syntax 

eruda.hasJob  = true; // 생성 이후에 이렇게 추가도 가능 
delete eruda.hasJob; // 삭제 

//2. Computed properties 
// ket는 항상 string type으로 지정해서 받아와야함 
console.log(eruda.name);
console.log(eruda['name']);

const printValue = (obj,key) => {
    // console.log(obj.key); //이러면 obj에 key 프로퍼티를 찾아서 undefine
    console.log(`obj = ${JSON.stringify(obj)}`);
    console.log(`key = ${key}`);
    console.log(obj[key]); //동적으로 key를 변경할때 유용하게 사용가능 
}
printValue(eruda,'name');

//3. Property value shorthand 
const person1 = {name: 'Bob', age: 2};
const person2 = {name: 'Max', age: 3};
const person3 = {name: 'Joy', age: 5};
const person4 = new makePerson('Jone',12);
//new 를 사용하지않으면 this는 window를 가르킴 
const person5 = new Person('King',34);
// Constructor function 생성자 함수 
function makePerson(name ,age){
    return {
        name,
        age,
    }
}
/*생성자 함수는 아래와 같이 표기 */
function Person(name,age){
    //선언과 return 생략가능
    this.name;
    this.age;
}

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

// in operator : property existence check (ket in object)
// in 연산자 : 프로퍼티 존재하는지 확인 
console.log('name' in person4); //true
console.log('age' in person4); //true
console.log('job' in person4); //false

// for..in vs for..of 
// for (ket in obj) 
for(key in person4){
    console.log(key); 
    /*log print 
            name
            age
    */
   console.log(person4[key]);
       /*log print 
            Jone
            12
    */
}
// for (value of iterable)
const arr = [1,2,3,4,5]
for(value of array){
    console.log(value);
    /*log print 
            1
            2
            3
            4
            5
    */
}

//cloning 
const user = {
    name: 'King',
    age: 34
}
const user2 = user; // 이렇게하면 같은 참조를 바라보기때문에 user2.name을 변경해도 user.name에 영향을 준다. 
user2.name = 'big_king'
console.log(user.name); //big_king 
//const에 선언했지만 값이 변경가능한거도 같은이유.

//old way 
const user3 = {}
    
    for(key in user){ //각각 값으로 할당
        user3[key] = user[key];
    }

    //object.assign(target object,source object) 
    Object.assing(user4,user)


    const fruit1 = {color: 'red'}
    const fruit2 = {color: 'blue',size: 'big'}
    const mixed = Object.assign({},fruit1,fruit2)
    console.log(mixed.color +' '+ mixed.size); // blue big  : fruit2가 더늦게 assign 되기 때문 