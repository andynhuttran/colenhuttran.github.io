
var funcs = [];

for (var i = 0; i < 5; i++) {

    let j = i;
    funcs[i] = function () {
        //return i; // closure
        return helper(j);
    }
}; // will use separate i each time!

function helper(i){
    return i;
}


console.log(funcs[0]()); // 0
console.log(funcs[1]()); // 1
console.log(funcs[2]()); // 2
console.log(funcs[3]()); // 3
console.log(funcs[4]()); // 4