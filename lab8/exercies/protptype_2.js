let hamter = {    
    stomach: [],

    eat(food){        
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamter
}

let lazy = {
    stomach: [],
    __proto__: hamter
}

speedy.stomach.push("Apple")
console.log("Speed's stomach: " + speedy.stomach);

lazy.stomach.push("Grass")
console.log("Lazy's stomach: " + lazy.stomach);

console.log("Speed's stomach: " + speedy.stomach);


