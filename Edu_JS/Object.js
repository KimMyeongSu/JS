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
    console.log(obj[key]);
}
printValue(eruda,'name');

//3. Property value shorthand 
const person1 = {name: 'Bob', age: 2};
const person2 = {name: 'Max', age: 3};
const person3 = {name: 'Joy', age: 5};
const person4 = new makePerson('Jone',12);

// Constructor function
function makePerson(name ,age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}