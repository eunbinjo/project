/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

 let age = 32;

 // 명시적
 let stringAge = age.toString();
 console.log(typeof stringAge, stringAge);

 // 암묵적
 let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); //2가 스트링으로 바뀜.
console.log('98' * 2);
console.log('98' - 2);

//자바스크립트에서는 암묵적 타입변환이 가능하므로, 버그가 생기지 않도록 같은 타입끼리 오퍼레이터를 사용하기.

console.log('-----------');

/**
 * 명시적 변환 몇 가지 더 배우기
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1')

console.log('-----------');

/**
 * Boolean 타입으로의 변환
 * ! => 아니다~ 라는 뜻
 */

console.log(!!'x'); //스트링 값에 어떤 값이 있든 그것은 트루로 반환이 된다.

console.log(!!'');

console.log(!!0); // - False
console.log(!!'0'); // - True
console.log(!!'false'); // - True
console.log(!!false); // - False
console.log(!!undefined); // - False
console.log(!!null); // - False

console.log(!!{}); // - True (오브젝트는 무조건 트루)
console.log(!![]); // - True (어레이는 무조건 트루)

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */