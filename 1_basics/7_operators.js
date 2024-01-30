/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10); //덧셈
console.log(10 - 10); //뺄셈
console.log(10 * 10); //곱셈
console.log(10 / 10); //나눗셈
console.log(10 % 10); //나머지
console.log(10 % 3);

console.log('---------');

console.log(10 * (10+10));

console.log('---------');

/**
 * 증가와 감소
 */
let number = 1;

number ++; //증가
console.log(number);

number --; //감소
console.log(number);
console.log('---------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++; 
console.log(result, number); // 증가 전에 넘버값이 리절트에 저장이 된 것.

result = number --;
console.log(result, number); // 감소 전에 넘버값이 리절트에 저장이 됨.

result = ++ number; // 앞에 두는 경우는 거의 없다.
console.log(result, number);

result = -- number; // 앞에 두는 경우는 거의 없다.
console.log(result, number);
console.log('---------');

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample); //스트링에 넘버값이 될 수 있는 값이 있으면 +를 붙였을 때 양수가 된다.

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample); // 트루라는 불리안 값을 숫자(양수)로 변경하면 1이 된다.

sample = false;
console.log(+sample);
console.log(typeof +sample); // 펄스라는 불리안 값을 숫자로 변경하면 0이 된다.

sample = '안유진';
//NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);//스트링에 넘버값이 될 수 있는 값이 있으면 -를 붙였을 때 음수가 된다.
console.log('---------');

/**
 * 할당 연산자 (assignment oprator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number); // 더한 다음 다시 저장한다.

number -= 10;
console.log(number); // 뺀 다음 다시 저장한다.

number *= 10;
console.log(number); // 곱한 다음 다시 저장한다.

number /= 10;
console.log(number); //나눈 다음 다시 저장한다.

number %= 10; // 나눈 다음 '나머지'를 다시 저장한다.
console.log(number);
console.log('---------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 -> 거의 쓰지 않는다.
 * 2) 값과 타입의 비교 (=== / !==)
 */

//같다
console.log (5 == 5);
console.log (5 == '5');
console.log (0 == '');
console.log (true == 1);
console.log (false == 0);
console.log (true == '1');
console.log('---------');

console.log (5 === 5);
console.log (5 === '5');
console.log (0 === '');
console.log (true === 1);
console.log (false === 0);
console.log (true === '1');
console.log('---------');

//같지 않다
console.log (5 != 5);
console.log (5 != '5');
console.log (0 != '');
console.log (true != 1);
console.log (false != 0);
console.log (true != '1');
console.log('---------');

console.log (5 !== 5);
console.log (5 !== '5');
console.log (0 !== '');
console.log (true !== 1);
console.log (false !== 0);
console.log (true !== '1');
console.log('---------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log('---------');

/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 * (조건 ? true일 때 값 : false일 때 값)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log('---------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// &&조건은 모두 true여야 true를 반환한다
console.log (true && true);
console.log (true && false);
console.log (false && true);
console.log (false && false);
console.log('---------');

// ||조건은 하나만 true여도 true를 반환한다
console.log (true || true);
console.log (true || false);
console.log (false || true);
console.log (false || false);
console.log('---------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('---------');

/**
 * 단축평가 (short circuit evlauation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측값 반환
 * &&를 사용했을 때 좌측이 false면 좌측값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 False면 우측 값 반환
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log(false && true && '아이브');
console.log('---------');

/**
 * 지수 연산자 (제곱)
 */
console.log(2 ** 2);
console.log(10 ** 3);
console.log('---------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '은빈'; // ?? 이전에 있는 name이라는 변수가 언디파인드나 널 일경우, 오른쪽을 집어넣어라.
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '은빈';
console.log(name2);