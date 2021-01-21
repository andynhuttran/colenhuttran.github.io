let animal = {
    eats: true
};
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    },
    love: {
        value: "grass"
    },
    hello : {
        value: function(){
            console.log("Hello " + this.love);
        }
    }
});


console.log(rabbit.jumps); // true
console.log(rabbit.eats); //true
console.log(rabbit.love); //grass

rabbit.hello();

console.log(rabbit.hasOwnProperty('eats'));