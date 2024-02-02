/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}
console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin)); //값을 추가할 수 있느냐? - 기본값 트루

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin)); //값을 추가하지 못하게 함

yuJin['groupName'] = '아이브'; //에러를 던지지 않음
console.log(yuJin);

delete yuJin['position']; // 삭제는 가능
console.log(yuJin);

/**
 * Seal = Configurable 을 false로 만드는 것과 같다.
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); //봉인되어있느냐? -기본값 펄스

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2); //더하기도 안되고 (에러안남)

delete yuJin2['name'];
console.log(yuJin2); //빼기도 안된다 (에러안남)

Object.defineProperty (yuJin2, 'name', {
    value: '코드팩토리',
    writable: false,
}); //프로퍼티 어트리뷰트중 밸류 변경은 가능하지만, writable을 false로 바꾸면 이후 변경은 불가능.
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}
console.log(Object.isFrozen(yuJin3)); //동결 되어 있으냐? 기본값 false

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupname'] = '아이브';
console.log(yuJin3); //추가 안됨

delete yuJin3['name'];
console.log(yuJin3); //삭제 안됨

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// }); //밸류 변경 불가능 (오류 뜸!)

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));

/** 상위 오브젝트를 immutable 했다고 하위 오브젝트까지 그렇게 되는 것은 아니다.*/