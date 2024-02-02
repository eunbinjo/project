/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical environment with in which that function was declared
 * 
 * "클로저는 어떤 함수와 해당함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다."
 */
function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cachefunction(){
    // 아래 계산이 매우 오래 걸린다는 가정 하에
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cachefunction();
console.log(runner2(10));
console.log(runner2(20));

/**
 * 2) 데이터 캐싱 - 반복적으로 특정 값을 변환해야 할 때
 */

function cachefunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cachefunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3()); //실행할때마다 1씩 증가

/**
 * 3) 정보 은닉
 */
function Idol(name, year){
    this.name = name;
    
    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);
