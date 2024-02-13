/**
 * 1. 원의 넓이를 구하는 공식은 (반지름) x (반지름) x (원주율) 이다. 
 * 원주율은 3.14라고 했을 때, 원의 반지름을 이용해 원의 넓이를 반환하는 함수를 만들어보세요.
 */

function circle(radius){
    return radius * radius * 3.14;
}
const circlea = circle(4);
console.log(`원의 넓이는 ${circlea}이다.`)

/**
 * 2. 매개변수로 배열을 전달받아 배열의 요소 중에서 가장 큰 수를 찾아 반환하는 함수를 만들어보세요. 이때, 배열 안의 데이터는 모두 0보다 큰 정수라고 가정합니다.
 */

function getArrayMaxNumber(arr){
    let maxNumber = 0;
    for(let i = 0; i < arr.length; i++){
        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

const maxNumber = getArrayMaxNumber([30, 40, 50]);
console.log(maxNumber);

/**
 * 3. 체질량 지수(BMI)를 계산하는 공식은 몸무게를 키(m)의 제곱으로 나눈 값이다. 사용자에게 키(cm)와 몸무게(kg)에 해당하는 값을 전달받아 체질량 지수를 계산한다. 체질량 지수가 26점 이상이면 비만, 24~25점은 과체중, 18.5~23점은 정상, 18.5점 미만은 저체중을 반환하는 함수를 만들어 보세요.
 */

function checkBmi(height, weight){
    const h = height / 100; //m 단위변환
    const bmi = weight / (h * h);
    console.log(`당신의 BMI는 ${bmi}입니다.`)
    if(bmi > 25) return "비만";
    else if(bmi > 24 && bmi <= 25) return "과체중";
    else if(bmi > 18.5 && bmi <=23) return "정상";
    else return "저체중"
}

const getBmi = checkBmi(170, 60)
console.log(getBmi);

