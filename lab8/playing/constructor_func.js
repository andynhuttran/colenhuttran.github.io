function Employee(name){
    this.name = name;
    age = 22;
}

Employee.prototype.greeting = function(){
    console.log("Hello, " + this.name);
}

const emp1 = new Employee("Cole");
emp1.greeting();

const emp2 = new Employee("Andy");
emp2.greeting();

emp1.greeting();

let obj = {

}
console.log(obj.__proto__)

function Foo(){

}
console.log(Foo.__proto__)
console.log(Foo.prototype)

