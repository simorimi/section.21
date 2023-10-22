const job1 = { 
    title: 'Developer', 
    location: 'New York', 
    salary: 50000
};

console.log(new Date().toISOString()); //new는 객체를 생성

class job {
    constructor(jobTitle, place, salary){
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`); //jobTitle, place, salary는 해당 constructor의 매개변수이기에 사용할 수 없다. 그래서 this.를 참조한다
    }
}

const developer = new job('Developer', 'New your', 50000);
developer.describe();
const cook = new job('cook', 'Munich', 35000);
cook.describe();