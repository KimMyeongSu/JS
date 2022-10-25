
//Array 
//1. Declaration 선언
const arr1 = new Array();
const arr2 = [];

//2.Index position 인덱스 위치 
const fruits = ['메론','수박'];
console.log(fruits); //(2) ['메론', '수박'] 
console.log(fruits.length); // 2
console.log(fruits[0]); // 메론 
console.log(fruits[1]); // 수박 
console.log(fruits[11]); // undefined 
//마지막 요소 접근 
console.log(fruits[fruits.length-1]); // 수박 

// 3. Looping over an array 배열에 대한 반복
//old way for()

for(let i =0; i < fruits.length; i++){
    console.log(fruits[i]); //메론 수박
}
//for of 
for(fruit of fruits){
    // console.log(fruit);
    /*
    메론
    수박
    */
}
console.clear();
//forEach 
fruits.forEach((fruit,index)=>{console.log(fruit,index)}) ////메론 0 수박 1

//4.Addtion , deletion , copy  추가 ,삭제 , 복사 
//push : 맨뒤에 요소에 추가 
fruits.push('사과'); 
fruits.forEach((fruit)=>{console.log(fruit)}) 
//pop  : 맨뒤에 요소부터 삭제 
fruits.pop();
fruits.forEach((fruit)=>{console.log(fruit)}) 

//unshift : Inserts new elements at the start of an array
//배열의 시작에서부터 요소 추가 
fruits.unshift('레몬','자두'); 
fruits.forEach((fruit)=>{console.log(fruit)}) //레몬 자두 메론 수박
//shift :Removes the first element from an array and returns it
let test = fruits.shift(); 

//pop과 push는 제일 끝에 데이터를 넣기때문에 연산이 적어서 금방 가능
//unshift,shift 는 요소 위치가 전체적으로 변경되어야하기에 느림

//splice 특정 위치에 요소들을 삭제와 삽입 
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// fruits.splice(1,2);

//concat 
//Combines two or more arrays.

//5.Serching 
console.clear();
console.log(fruits);
console.log(fruits.lastIndexOf('수박')); //2
console.log(fruits.indexOf('없는거')); //-1
console.log(fruits.includes('수박')); //true
console.log(fruits.includes('없는거')); //false

//동일한 데이터가 있는경우 뒤에서 찾는 lastIndexOf








