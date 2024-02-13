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

const date = new Date();
console.log(date);

