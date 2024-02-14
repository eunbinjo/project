// String - length
// 최소 글자수나 최대 글자수를 확인해야 할 때
const pw = "123";
if(pw.length < 4){
    console.log("비밀번호는 최소 4자리 이상 입력해주세요.");
} else if(pw.length > 16){
    console.log("비밀번호는 최대 16자리까지만 설정 가능합니다.");
}

// String - include()
// 특정 문자열이 포함되어 있는지 확인할 때
const email = "test!gmail.com";
if(email.includes("@") === false){
    console.log("올바른 이메일 형식이 아닙니다.");
}

// String - indexOf()
// 특정 문자열이 포함되어 있는지 확인할 때

const name = "giselle caudill";
console.log(name.includes("@")); // 맞으면 0, 틀리면 -1을 반환한다.

const email2 = "test!gmail.com";
if(email2.indexOf("@") === -1){
    console.log("올바른 이메일 형식이 아닙니다.");
}

console.log('------------------------')

// Array - length
// 배열의 길이를 이용한 반복문 처리
const arr = [10, 20, 30];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Array - 파괴적 메서드
// push(), pop(), unshift(), shift()
const arr2 = [10, 20, 30, 40];

arr2.push(50); // 배열 맨 뒤에 50 추가
console.log(arr2);

arr2.pop(); // 배열 맨 뒤에서 요소 추출(삭제)
console.log(arr2);

arr2.unshift(0); // 배열 맨 앞에 0 추가
console.log(arr2);

arr2.shift(); // 배열 맨 앞에서 요소 추출(삭제)
console.log(arr2);

arr2.reverse(); // 역순 정렬
console.log(arr2);

arr2.sort(); // 정렬
console.log(arr2);

// Array - 비파괴적 메서드
// forEach()
const arr3 = [1, 2, 3, 4, 5, 6];

arr3.forEach((v) => { //콜백함수 function(v)
    console.log(v + "안녕하세요");
})

console.log('------------------------')

const day = new Date();
console.log(day);

const date1 = new Date(2022, 11, 25);
const date2 = new Date(2022, 11, 25, 18, 30, 50);
console.log(date1);
console.log(date2);

const date = new Date(2022, 11, 25, 18, 30, 50);
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
console.log(dateFormat);

const date11 = new Date('2022-12-23');
const date22 = new Date('2022-12-25');
const dateDiff = date22.getTime() - date11.getTime();
//두 날짜 사이의 간격을 밀리초로 구함
const interval = dateDiff / (24 * 60 * 60 * 1000);
//24시간, 60분, 60초, 1000밀리초
console.log(`두 날짜의 차이는 ${interval}일 입니다.`);

console.log('-----------------')

// Math 객체

const floatNum = 10.52;

const math1 = Math.floor(floatNum);
const math2 = Math.ceil(floatNum);
const math3 = Math.round(floatNum);

console.log(math1, math2, math3);

const random = Math.random();
console.log(random);

// 난수 구하기
function getMaxRandom(max){
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
// 0 이상 20 이하의 정수
console.log(maxRandom);


//주사위를 만들 수 있는 셈~!
function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max-min)) + 1 + min;
    //6을 제외하고 싶다면 1을 삭제한다.
}
const minMaxRandom = getMinMaxRandom(1, 6);
// 1 이상 6 이하의 정수
console.log(minMaxRandom);


// 1분 퀴즈

const array = [10, 120, 30, 50, 20];
array.sort((a, b) => b - a); //내림차순 정렬

console.log(array[0]);

// sort()
// a인자와 b인자를 비교해서 음수를 반환하면 내버려두고, 양수를 반환하면 자리를 바꾼다.