/**
 * Inheritance (상속)
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }  
}

class MaleIdolModel extends IdolModel {
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

// console.log(yuJin.sing());  // 이건 안 됨.
// console.log(jiMin.dance());  // 이건 안 됨.

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);
// console.log(cf.dance); //이것도 안 됨. 부모가 자식클래스의 프로퍼티를 상속 받지 못함.

console.log(yuJin instanceof IdolModel); // yuJin은 IdolModel의 인스턴스인가? 
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('-------------------')
console.log(jiMin instanceof IdolModel); 
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log('-------------------')
console.log(cf instanceof IdolModel); 
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);

/**상속을 잘 이해해야 객체지향 프로그래밍(OOP)의 기본이 잘 잡힌다 */