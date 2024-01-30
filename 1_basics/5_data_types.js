/**
 * Data Types
 * 
 * 여섯 개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언) //true & false
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

//Number Type (숫자)
const age = 27;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('--------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('--------------');

//String Type (문자열)
const codeFactory = '"코드팩토리"';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진"; // 큰 따옴표로도 스트링 타입 선언 가능.
console.log(ive);

/**
 * Escaping Character
 * 1) newline -> \n //엔터
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\좋아';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

/**
 * Template Literal >  `` < //이스케이핑 캐릭터가 귀찮기 때문에 유용하게 나왔다.
 */

const iveWonYoung2 = `아이브 i ' " ///
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`); // 템플릿 리터럴 안에서 사용. `${변수이름} ~~`
console.log('--------------');

/**
 * Boolean 타입 (true & false)
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined 타입
 * 
 * 사용자가 직접 값을 초기화 하지 않았을 때 지정되는 값
 * 직접 undefined로 값을 초기화하는 건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로
 * 초기화 할 때 사용한다.
 */
let init = null;
console.log(init);
console.log(typeof init); // 타입오브 널은 오브젝트로 나옴. 일종의 버그지만 변경되지 않음.
console.log('--------------');

/**
 * Symbol 타입 
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); //위아래가 같아 보이지만, 각각의 '심볼'로 적용되어 다른 값으로 인식됨.
console.log('--------------');

/**
 * Object 타입 (중요!!)
 * 
 * Map과 같다고 생각하면 된다.
 * 키:벨류의 쌍으로 이루어져 있다
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']); // 대괄호 안에 key값을 넣으면, value값을 찾을 수 있다.
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

console.log('--------------');

/**
 * Array 타입
 * 
 * 값을 '리스트'로 나열 할 수 있는 타입이다.
 * 보통 대괄호로 선언한다. 콤마로 구분.
 */

const iveMembersArray = [
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index 
 * 어레이 안에 포함된 개념, 어레이 값 하나하나에 붙는 번호
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '블라블라'; //특정 인덱스의 값을 바꿀 수 있다.
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시한다.
 *                  C 언어 등...
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 *                  JS -> dynamic typing
 */