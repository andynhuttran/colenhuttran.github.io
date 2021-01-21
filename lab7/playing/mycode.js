function Foo(y){
    this.x = 10;    
    this.y = y;


}

Foo.prototype.cal = function(z) {
    return this.x + this.y + z;
};

let b = new Foo(20);
let c = new Foo(30);

console.log(b.cal(1))

