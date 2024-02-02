/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에
 * 함수의 상위 스코프가 정의 시점에 평가된다.
 * ❗️ 하지만 this키워드는 바인딩이 객체가 생성되는 시점에 결정된다. ❗️
 */

const testFunction = function(){
    return this;
}

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function(){
        return `저는 ${this.name}입니다.`;
    },
}

console.log(yuJin.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다.`;
    } //여기서의 this는 글로벌에 매핑됨.
    return dance2();
}

console.log(yuJin2.dance());

/**
 * this키워드가 어떤 걸 가리키느냐는 세 가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출할 땐 this가 최상위 객체 (global or window) 를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

/**
 * this 키워드에 어떤 객체를 지정하는 방법
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

console.log(returnName());

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> 콤마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트[]로 입력해야한다.
 */
function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind() : 함수로 바인딩해두고 나중에 실행 가능.
 */

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());