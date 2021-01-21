var pete = { name: "Pete Bkk" };
var joe = { name: "Joe Jww" };

function sayHi(){
    console.log(this.name);
}

//assign
pete.hi = sayHi;
joe.hi = sayHi;

//call
pete.hi();
joe.hi();
