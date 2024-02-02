/**
 * Async Theory
 */

/**
 * 동기 프로그래밍 (기본값)
 */

// function longWork(){
//     const now = new Date();

//     /**
//      * millseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds +2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');
 
/**
 * 비동기 프로그래밍
 * : 싱글 스레드인 자바스크립트로 작업을 하더라도 효율적으로 사용할 수 있도록 해줌.
 */

function longWork(){
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');

//헬로월드가 먼저 출력되고, 완료가 출력됨.