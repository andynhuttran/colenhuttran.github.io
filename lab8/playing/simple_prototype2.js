let animal = {
    eat: true,
    behavious(name) {
        console.log(name + " can");
        console.log("\teat: " + this.eat);
        if (this.sleep != undefined) {
            console.log("\tsleep: " + this.sleep);
        }
    }
};

let cat = {
    __proto__: animal,
    name: "cat",
    sleep: true,
    
    print() {        
        this.behavious(this.name); 
    }
};

let dog = {
    __proto__: animal,
    name: "dog",
    print() {
        this.behavious(this.name); 
    }
};


cat.eat = false;
cat.print();

dog.sleep = true;
dog.print();
