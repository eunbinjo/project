/**
 * Varialble 선언하기 (변수 선언하기)
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진'; //이전에 사용한 변수의 값을 바꿀 때는 앞에 var / let을 붙이지 않는다.
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '하입보이'; // const 키워드를 통해 선언한 변수는 값을 변경 할 수 없다.

/**
 * 선언과 할당
 * 
 * 1) 선언 : 변수를 선언하는 것.
 * 2) 할당
 */
var name; //변수 선언
var name = '블라블라'; //변수 할당
console.log(name);

let girlfriend;
console.log(girlfriend); //변수가 선언되었고, 값이 할당되지 않는다면 초기값이 undefined로 설정된다.

// const girlfriend2; // const값은 무조건 변수에 값이 할당되어야 한다.

