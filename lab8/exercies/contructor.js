let obj = {
    constructor: function constructor(x){
        this.x = x;
    },
}

let obj2 = new obj.constructor(15);
console.log(obj2.x);
