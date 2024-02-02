/**
 * Callback
 */
function waitAndRun(){
    setTimeout(()=>{
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2(){
    setTimeout(()=>{
        console.log('1번 콜백 끝');

        setTimeout(()=>{
            console.log('2번 콜백 끝')

            setTimeout(()=> {
                console.log('3번 콜백 끝')
            }, 2000);
        }, 2000);
    }, 2000);
}
// 이런식으로 작성하는 건 정말 좋지 않다!

// waitAndRun2();

/**
 * promise 
 */

// const timeoutPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// });

// timeoutPromise.then((res) => {
//     console.log('---then---')
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout (() => {
        // if (xxx){
        //     resolve('성공')
        // }else{reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('---fisrt then---');
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('---fisrt catch---')
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('---finally---')
//     });

    Promise.all([
        getPromise(1),
        getPromise(4),
        getPromise(1),
    ]).then((res)=>{
        console.log(res);
    }); //가장 느린 함수 기준으로 댄 캐치 파이널리가 불린다. (시작은 동시에 되므로)

