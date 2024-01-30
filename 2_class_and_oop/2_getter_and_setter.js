/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * get / set
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    } // 많이 선호되는 형태는 아님.
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.nameAndYear); // getter값은 변수처럼 취급. 함수처럼 쓰지 않음. () X!

yuJin.setName = '장원영';
console.log(yuJin);


/**
 * 프라이빗 값
 */

class IdolModel2{
    #name; //es7엔진이상에서만 지원
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        return this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);
