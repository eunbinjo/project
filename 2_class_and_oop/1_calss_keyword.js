/**
 * Class Keyword
 */

class IdolModel{
    // name;
    // year; 프로퍼티 정의가 옵셔너리다. but 정의를 해주는 게 좋다.

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

//constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2006);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); //클래스는 함수타입이다.
console.log(typeof yuJin); //클래스로 생성한 인스턴스는 오브젝트(객체)다!