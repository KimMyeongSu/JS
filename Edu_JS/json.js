/**JOSN 
 * ● 데이터를 주고 받을때쓰는 가장 간단한 데이터 포맷이다.
 * ● 텍스트를 기반으로 가볍다
 * ● 눈으로도 읽을수있다
 * ● key-value pairs 
 * ● 데이터를 서버와 주고받을때 Serialization 할때 사용한다 
 * ● 프로그래밍 언어나 플랫폼에 상관없이 사용가능하다. 
 */


//JSON (JavaScript Object Notation )
//1. Object to JSON 
//stringify(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['사과','참외']); //["사과","참외"] 
console.log(json)

const dog = {
    name: '감자',
    color: '갈색',
    size: 'small',
    birthDate: new Date(),
    sound: () => {console.log('멍멍')},
};
json = JSON.stringify(dog);
console.log(json) //{"name":"감자","color":"갈색","size":"small","birthDate":"2022-10-26T12:00:32.335Z"}

// JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload) 

json =JSON.stringify(dog,['name']); //{"name":"감자"}
json =JSON.stringify(dog,['name','color']); //{"name":"감자","color":"갈색"}
json =JSON.stringify(dog, (key,value) => {
    console.log(`key = ${key} value = ${value}`);
    return value;
    // return key ==='name' ? '포도' : value; //이렇게도 활용가능 
} );
console.log(json)
//print 
// key =  value = [object Object]
// key = name value = 감자
// key = color value = 갈색
// key = size value = small
// key = birthDate value = 2022-10-26T12:00:32.335Z
// key = sound value = () => {console.log('멍멍')}

//2. JSON to Object  
// parse(json)

