let obj = {name: "지젤", age: "20"};
                    
 for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}

let arr = ["orange", "apple", "banana"];

for(let index in arr){
    console.log(`${index} : ${arr[index]}`);
}

console.log('---------------')

let num = 0;
for(let i = 1; i <= 100; i++){
    num += i;
}
console.log(num);

