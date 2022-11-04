// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let result = fruits.join() 
  // result = fruits.join('|')
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒'; 
  let result = fruits.split(',');
  //  result = fruits.split(',',2);
  console.log(result) 
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  let result = array.reverse(); //배열자체를 변화하고 반환 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let result = array.slice(0,2)
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find 조건에 맞는 첫번째 요소를 반환 
  
  const result =  students.find((student) => {return student.score === 90});
  // console.clear();
  // console.log(result);
}

// Q6. make an array of enrolled students

{
  //filter 결과 배열을 반환 
  const result = students.filter((student)=> {
      return student.enrolled;
  });
  // console.clear();
  // console.log(result);

}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  //map() 각각 요소에  한 속성들을 배열형태로 반환 각각 연산도 가능 
  // console.clear();
  let result = students.map((student)=> {
    return student.score
  });
  // console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // console.clear();
  let result1 = students.some((student)=>{
    return student.score < 50
  });
  let result2 = !students.every((student)=>{
    return student.score >= 50
  });
  // console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr)=>{
    return prev + curr.score;
  },0);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result  = students
  .map((student) => {return student.score})
  .filter((score)=> {return score <= 50})
  .join();

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result  = students
  .map((student) => {return student.score})
  .sort((a,b)=> {return b - a})
  .join();
  console.log(result)
}