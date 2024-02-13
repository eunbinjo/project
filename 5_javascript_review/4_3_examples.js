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
