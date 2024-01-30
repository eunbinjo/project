/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('--------------');

console.log(name); //오류가 나는 게 아니라, undefined가 된다. 선언은 하되, 할당되지 않은 것으로 취급된다.
var name = '은빈';
console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 '느껴지는' 현상을 이야기한다.
 * 이를테면 8-10에 적힌 코드는 마치 아래 18-21행에 적힌 코드처럼 인식되고 있다.
 */
// var name;
// console.log(name);
// name='은빈';
// console.log(name);

/** 
 * let, const는 호이스팅 현상을 방지해 줄 수 있다.
 * 호이스팅 현상이 일어나지 않는 것은 아니다. 
 * let, const도 호이스팅 현상이 일어나긴 함. 그러나 오류메시지를 통해 방지해줌.
 */

console.log(yuJin);
const yuJin = '유진';