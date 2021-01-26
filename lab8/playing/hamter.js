let hamster = {

    eat(food) {
        if (this.stomach == undefined) {
            this.stomach = [];
        }
        this.stomach.push(food)
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
lazy.eat("banana")
lazy.eat("apple")
lazy.eat("coconut")
console.log(lazy.stomach); // apple