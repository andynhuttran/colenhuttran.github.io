function logger(f) {
    f();
}

console.log(1);
/*setTimeout(function () { console.log(2); }, 1000);

logger(function () { console.log(3) });

setTimeout(function () { console.log(5); }, 1);
setTimeout(function () { console.log(4); }, 0);*/

console.log("---------")

var protoObj = { x: 5, y: 7, z: 9 };
var myObj1 = Object.create(protoObj);
console.log(myObj1.x);
var myObj2 = Object.create(protoObj);
myObj2.x = 0;
console.log(myObj2.x);
delete myObj1.y;
console.log(myObj2.y);
console.log(myObj1.y);
console.log(protoObj.y);
delete protoObj.z;
console.log(myObj2.z);
console.log(myObj1.z);
console.log(protoObj.z);


console.log("-----------------");

function Foo(bar) {
    this.count = 0;
    this.bar = bar;
}

var obj1 = new Foo(5);
console.log(obj1.count);
//obj1.increment();

Foo.prototype.increment = function () {
    this.count++;
};

obj1.increment();
console.log(obj1.count);

var obj2 = new Foo(10);
console.log(obj2.count);

obj2.increment();
console.log(obj2.count);


console.log("-----------")
let protoObj1 = { x: 1, y: 2, z: {val: 5} }
let obj11 = Object.create(protoObj1);

obj11.z.val = 10;
console.log(obj11.z);

let obj22 = Object.create(protoObj1);
console.log(obj22.z);
console.log("-----------")

setTimeout(() => { console.log("a")}, 0);
console.log("b")
while (true){
    
}



