/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('완료');
    }, seconds * 1000);
});

async function runner(){
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
}

// runner();
// promise로 만든 함수에만 await 실행 가능

// console.log('실행 끝'); // 스레드가 막히지 않아 먼저 실행됨

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject('에러');
    }, seconds * 1000);
});

async function runner(){
    try{
        const result1 = await getPromise2(1);
        console.log(result1);
        const result2 = await getPromise2(2);
        console.log(result2);
        const result3 = await getPromise2(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();