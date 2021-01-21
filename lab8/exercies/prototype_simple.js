let animal = {
    jump: true
}

let snack = {
    __proto__: animal,
    jump: false
}

console.log(animal.jump); //true
console.log(snack.jump); //false

delete animal.jump
console.log(animal.jump); //undefine

delete snack.jump
console.log(snack.jump); //undefine



