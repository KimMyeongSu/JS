//forEach와 map
const numbers = ['one','two','three','four'];

for (let number of numbers){
    console.log(number);
} // one two three four 

numbers.forEach(function(number) {
    console.log(number);
});  // one two three four 


numbers.forEach((number,index) => {
    console.log(`index = ${index} number = ${number}`);
});

numbers.forEach((number,index) => {
    console.log(`숫자 = ${index + 1} 영어 = ${number}`);
});



const numberArr = ['1','2','3','4'];
const engNumberArr = ['one','two','three','four'];

numberArr.forEach(function(number,index,arr){
    console.log(`영어 = ${engNumberArr[index]} 숫자 = ${number}`);
});

['1','2','3','4'].forEach(function(number,index,arr){
    console.log(`영어 = ${engNumberArr[index]} 숫자 = ${number}`);
});

//결과는 동일하나 map 메소드는 결과값이 담긴 새로운 배열을 반환함.
numberArr.map(function(number,index,arr){
    console.log(`영어 = ${engNumberArr[index]} 숫자 = ${number}`);
});

// 단순 반복이 필요한경우엔 forEach , 반복후 반환값이 필요한경우 Map 



//filter 와 find 

const devices = [
    {name: 'GalaxNote', brand:'Samsung' },
    {name: 'MacbookPro', brand:'Apple' },
    {name: 'iPad', brand:'Apple' },
    {name: 'GalaxWatch', brand:'Samsung' },
    {name: 'iMax', brand:'Apple' },
    {name: 'GalaxBuds', brand:'Samsung' },
    {name: 'Gram', brand:'LG' },
    {name: 'GalaxBook', brand:'Samsung' },
    {name: 'SufacePro', brand:'Microsoft' },
    {name: 'ZenBook', brand:'Samsung' },
    {name: 'MackbookAir', brand:'Apple' }
];
//이거 왜 안나오지 ㅋㅋㅋㅋㅋㅋ 확인필요 -> return 빼먹음....
/*
const apples = devices.filter(function (el) {
    return el.brand === 'Apple';
    
});
*/
const apples = devices.filter((el) => el.brand ==='Apple');

//filter 는 모든 요소를 순회하면서 해당 조건에 맞는 배열을 반환 

//find 는 1개의 요소만 반환 모두 순회하지 않음!
const myLaptop = devices.find((el,i) => el.name ==='MacbookPro');

const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];

console.log(
    seoul.filter((el) => el[0] === '김')
    //seoul.filter((el) => el[0] !== '김')
);

//Some과 every 

const numbers = [1,3,5,7,9];
/*
some  : 조건을 만족하는 요소가 1개이상 있는지  (빈배열일경우 순회없이 false)
1개이상의 요소만 찾기때문에 순회중 true 나오면 순회 종료 
*/
const someReturn = numbers.some((el) => el > 5);
/*
every : 모든요소가 조건을 만족하는지 (빈배열일경우 순회없이 true)
모든요소의 만족을 찾기때문에 순회중 false 가 나오면 순회 종료
*/
const everyReturn = numbers.every((el) => el > 5);

console.log(someReturn); //true
console.log(everyReturn); //false

//Some 으로 스파이 찾기 
const spait = [
    { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
    { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
    { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
    { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  ];
  
  function checkSpy(team) {
    // 여기에 코드를 작성해 주세요.
    message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;  
    //console.log(team.members);
    if(team.members.some((el) => el !== '스파이')){
    message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
    }
      console.log(message);
  }
  
  // 테스트 코드
  spait.forEach((team) => checkSpy(team));

/*
function checkSpy(team) {
    function checkSpy(team) {
  // 여기에 코드를 작성해 주세요.
  const { codeName, members } = team;
  const result = members.some((member) => member !== '스파이');
  const message = result
    ? `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`
    : `팀 ${codeName} 에는 이중 스파이가 없습니다.`;

  console.log(message);
}

  // 여기에 코드를 작성해 주세요.
  const { codeName, members } = team;
  const result = members.every((member) => member === '스파이');
  const message = result
    ? `팀 ${codeName} 에는 이중 스파이가 없습니다.`
    : `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`;

  console.log(message);
}
*/


//reduce 
const numbers = [1, 2, 3, 4];
/*
acc : 누산기 
*/
numbers.reduce((acc, el , i , arr) => {
    return nextAccValue;
},initialAccValue) ;

const sumAll = numbers.reduce((acc,el,i) =>{
    console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
    console.log(`acc : ${acc}`);
    console.log(`el : ${el}`);
    console.log(`----------`);
    return acc+el;
},0)
console.log('sumAll',sumAll);


const data = [ 
    { company: 'Naber', month: 3 },
      { company: 'Amajohn', month: 12 },
      { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
      { company: 'Microhard', month: 17 },
  ];

  // 여기에 코드를 작성해 주세요.
  const totalCareer =   data.reduce((acc,el,i) => {
    return acc + el.month;
  },0);
  // Arrow Function에서 return 문만 있기 때문에 다음과 같이 축약해서 사용할 수도 있음
  // const totalCareer = data.reduce((acc, el) => acc + el.month, 0);

  console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);

