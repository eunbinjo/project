/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if (!new.target){
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다`;
    }
}

/**
 * 생성자 함수에 this를 붙여주기 위해 new키워드를 꼭 써줘야 한다. 그러지 않을 경우 this가 Global에 붙게 될 수 있으므로...
 * new를 쓰지 않는 실수를 많이 하므로, new키워드가 실행이 되었는지 자주 확인한다. (new.target)
 */

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); //new 키워드를 쓰지 않으면 생성자 함수에서 아무것도 반환되지 않음.

// console.log(global.name);


/**
 * 애로우함수로 생성자? => 만들 수 없다!
 */
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);