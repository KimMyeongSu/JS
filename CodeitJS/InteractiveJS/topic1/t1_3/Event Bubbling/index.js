// 이벤트 버블링 (Event Bubbling)
// 해당 요소의 이벤트가 발생하게되면 핸들러가 동작하게 되고 
// 이어서 같은 타입의 이벤트의 한에 부모요소의 핸들러도 동작함 --요소 각각에 할당된 모든 핸들러가 동작함
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');


content.addEventListener('click', function(e) {
  console.log('content Event');
//  console.log(e.currentTarget);
});

title.addEventListener('click', function(e) {
  console.log('title Event');
//  console.log(e.currentTarget);
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  //console.log(e.currentTarget); // 자주 사용은안하겠지만 이런 프로퍼티도 있다는것만 알아둘것 .
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
   console.log(e.currentTarget);
 		e.stopPropagation();  // 메서드로 버블링을 막을수있음. 꼭필요한 경우가아니라면 사용x 
  });
}