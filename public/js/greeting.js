class Person {
    constructor(first, last) {
        this.name = {
            first: first,
            last: last
        };
        this.greeting = () => {
            return(`Hi there! My name is ${this.name.first} ${this.name.last}.
            I develop software applications, databases, reports and analytic solutions.`)
        };
    }
}

let me = new Person('Todd', 'Brannon')

me.greeting();


