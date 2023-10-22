function greetUser(greetingPrefix, userName = 'user'){
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi', 'Max');
greetUser('Hello');

// function sumUP(num1, num2, num3 = 0){
//     return num1 + num2 + num3; 
// }

// console.log(sumUP(1,2)); // num3의 초기값이 없다면 undefined라는 문자가 설정되는데 이는 숫자가 아니기에 NAN이 나온다

function sumUP(...numbers){ // 매개변수이기에 배열이나 객체값 또한 가질 수 있다. / 함수 정의 매개변수 목록
    let result = 0;
    
    for(const number of numbers){
        result += number;
    }
    return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUP(inputNumbers)); // 배열이지만 매개변수로 치면 하나이기에 0과 배열을 더한 결과로 나옴 
console.log(sumUP(...inputNumbers)); // 그래서 이렇게 활용하면 배열이 아니라 숫자 목록으로 변환한다. 