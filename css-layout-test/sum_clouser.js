function sum(a) {
    return (b) => {
        return a+b;
    };
}

console.log(sum(1)(2));
console.log(sum(5)(6));
