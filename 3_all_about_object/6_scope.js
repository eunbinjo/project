/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne();

function levelOne(){
    var numberOne = 40;
    
    console.log(numberOne);
}

// levelOne();

// console.log(numberOne);

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;
        
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();

/** 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용하게 된다. */

console.log(numberOne);
// console.log(numberTwo); // 하위 스코프에는 접근 불가!

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
*/
var numberThree = 3;

function funtionOne(){
    var numberThree = 100;
    
    funtionTwo();
}

function funtionTwo(){
    console.log(numberThree);
}

funtionOne();

/**
 * 
 */

var i = 999;

for (var i = 0; i <10; i ++){
    console.log(i);
}
console.log(`i in global scope : ${i}다.`);

i = 999;
for (let i = 0; i <10; i ++){
    console.log(i);
}
console.log(`i in global scope : ${i}다.`);
// 괄호가 들어가는 모든상황에서 let과 const를 쓴다. let 과 const를 이용하면 블록레벨 스코프도 만들 수 있다.

/**
 * var 키워드는 함수레벨 스코프만 만들어낸다.
 * 
 * let과 const키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */