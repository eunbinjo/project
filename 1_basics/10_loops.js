/**
 * Loops 반복문
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('-----------');

for (let i = 10; i > 0; i --){
    console.log(i);
}

console.log('-----------');

for (let i = 0; i < 3; i ++){
    for(j = 3; j > 0; j--){
        console.log(i, j);
    }
}

console.log('-----------');

// *을 이용해서 6x6의 정사각형을 출력해라.

let sqaure = '';
let side = 6;

for (let i = 0; i < side; i++){
    for (let j = 0; j < side; j++){
        sqaure += '*';
    }
    sqaure += '\n'
}

console.log(sqaure);

/**
 * for...in //키값 혹은 인덱스 값을 가져올 때
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

console.log('-----------');

for(let key in yuJin){
    console.log(key);
}

console.log('-----------');

const iveMembersArray = ['유진', '가을', '레이', '원영', '리즈', '이서'];

for(let index in iveMembersArray){
    console.log(index);
    console.log(`${index}:${iveMembersArray[index]}`)
}

console.log('-----------');

/**
 * for...of //값을 가져오고 싶을 때
 */
for (let value of iveMembersArray){
    console.log(value);
}

console.log('-----------');

/**
 * While // 조건이 펄스가 되는 순간 루프가 끝나고, 마지막 값만 보여준다.
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do...while //헷갈리니 잘 쓰이진 않음
 */
number = 0;

do {
    number ++;
} while(number < 10);

console.log(number);

console.log('-----------');

/**
 * break //반복을 깨뜨린다.
 */
for (let i=0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

console.log('-----------');

number = 0;
while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

console.log('-----------');

/**
 * continue //반복 중 어떤 값을 스킵하고 진행해라.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('-----------');

number = 0;
while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}