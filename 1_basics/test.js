/**
 * 반복문 복습
 */

for(i = 0; i < 10; i ++){
    console.log(i);
}

console.log('---------------')

for(i = 0; i < 3; i ++){
    for(j = 0; j < 3; j ++)
    console.log(i, j);
}

console.log('---------------')

let star = '';
let num = 0;

while(num < 3) {
    num ++;
    star += '*';
}

console.log(star);

let sqaure = '';
let side = 6;

for (let i = 0; i < side; i++){
    for (let j = 0; j < side; j++){
        sqaure += '*';
    }
    sqaure += '\n'
}

console.log(sqaure);