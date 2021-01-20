/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b){
    return (x) => {
        return a <= x && x <= b;
    }
}

function inArray(arr){
    return (x) => {
        return arr.includes(x);
    }
}



