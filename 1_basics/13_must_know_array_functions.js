/**
 * Araay Functions 
 */

let iveMembers = [
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() : 어레이 맨 마지막에 값을 하나 추가한다.
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('----------')

// pop() : 어레이 맨 마지막 값을 반환해준다. 이후 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('----------')


// shift() : 어레이 맨 처음 값을 반환해준다. 이후 삭제.
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() : 어레이 맨 처음에 값을 하나 추가한다.
console.log(iveMembers.unshift('유진'));
console.log(iveMembers);

console.log('----------')

// splice(x, y) : x부터, y개의 값들을 반환해준다. 이후 삭제.
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = [
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() : 원래의 어레이를 변경하지 않고 마지막에 값을 하나 추가한다.
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

//slice(x, y) : 원래의 어레이를 변경하지 않고 x부터 y이전까지 값을 삭제한다.
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

//spread operator : 원래 리스트를 해제하고 펼쳐 내서 새 리스트에 집어넣는다.
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('----------')

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log( [
    ...iveMembers,
] === iveMembers);
//스프레드 오퍼레이터로 같은 값을 펼쳐놓으면 완전히 메모리 공간이 달라진다.

// join() : 어레이의 모든 값을 스트링으로 엮어 반환해준다.
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() : 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);

// reverse() : 내림차순 정렬
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map() : 원래 어레이를 바꾸지 않고 새로운 어레이를 반환해준다.
console.log('--------------')
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '유진'){
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));

console.log(iveMembers);

// filter() : 조건에 해당되는 모든 트루 값 반환
numbers = [1, 8 ,7 ,6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

//find() : 조건에 해당되는 첫번째 트루 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

//findIndex() : 조건에 해당되는 첫번째 트루 값의 인덱스 번호를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce() : 모든 값을 더하거나, 곱하거나, 나누거나... 
console.log(numbers.reduce((p, n) => p + n, 0));