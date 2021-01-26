let obj = {
    name: "hello",
    age: 22
};

console.log(obj);
console.log(obj.__proto__);

let func = function() {
    let a = 5;
    console.log(a);
}

console.log(func);
console.log(func.__proto__);