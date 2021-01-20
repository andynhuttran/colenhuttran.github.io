let users = [
    { name: "John", age: 20, surname: "Bohnson" },
    { name: "Pete", age: 18, surname: "Aeterson" },
    { name: "Ann", age: 19, surname: "Cathaway" }
];

function byField(fileName){
    return (a, b) => {        
        if (a[fileName] > b[fileName]) {
            return 1;
        }
        else if (a[fileName] < b[fileName]) {
            return -1;
        }
        else {
            return 0;
        }
    };
}

console.log(users);
let byName = users.sort(byField('name'));
console.log(byName);

let byAge = users.sort(byField('age'));
console.log(byAge);

let bySurname = users.sort(byField('surname'));
console.log(bySurname);

