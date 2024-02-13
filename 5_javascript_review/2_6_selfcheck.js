//1번 문제
//숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드를 작성하시오

let count = 0;
for(let i = 1; i <= 999; i++){
    if (i % 2 === 1) count++;
}
console.log(`짝수의 개수는 ${count}개다.`)

//2번 문제
//구구단 1단부터 9단까지 한번에 출력하는 코드를 작성하시오

for(let gugu = 1; gugu <= 9; gugu++){
    for(let dan = 1; dan <= 9; dan++){
        console.log(`${gugu}*${dan}=${gugu*dan}`)
    }
}

//3번 문제
//100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를 모두 출력하는 코드를 작성하시오

for(let i = 1; i < 10; i++){
    for(let j = 0; j < 10; j++){
        for(let k = 0; k < 10; k++){
            let num = (100*i)+(10*j)+(k);
            let sum = (i*i*i)+(j*j*j)+(k*k*k);
            if(num === sum){
                console.log(num);
            }
        }
    }
}


function sum(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return; //매개변수가 숫자가 아니면 강제 종료
    }
    return num1 + num2;
}
let result = sum(10, 20);
console.log("out: " + result);