const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored
const age = 32; // the value itself is stored

hobbies.push('Reading'); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping']; // not allowed! new address is stored

console.log(hobbies);

const person = {age: 32};

function getAdultYears(p) {
    p.age -= 18;            //객체 안의 값은 참조값이므로 상수여도 변한다. 이러한 오류를 없애기 위해서는 return p.age - 18;을 이용하여 p.age 자체에는 손상이 없도록 하거나 
    return p.age;
}

// console.log(getAdultYears(person));
// console.log(getAdultYears({age:person.age})); //를 이용하여 들어가는 값에 대하여 새로운 메모리에 저장해준다.
console.log(getAdultYears({...person})); //을 이용하는데 객체에 스프레드 연산자를 이용하는경우 객체의 키 값 쌍을 가져와 해당 키 값 쌍의 목록을 제공한다. 그리고 중괄호로 사이에 입력하면 다른 객체의 모든 키 값 쌍을 가져오는 새 객체를 만든다.
console.log(person);