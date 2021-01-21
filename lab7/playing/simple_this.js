

var x = 5; // var is used intentionally, add new x to window

function foo() { 
    console.log(this.x); //this is window, window.x = 5
}
foo();

const obj = { 
    x: 10, 
    bar: function () { 
        console.log(this.x); 
    } 
};
obj.bar();

const bar2 = obj.bar;
bar2();

obj.foo = foo;
delete obj["x"];
obj.foo();
