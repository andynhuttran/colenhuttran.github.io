// By convention we use capital first letter for function constructor
function Course(coursename) {
    this.coursename = coursename;
    console.log('Function Constructor Invoked!');
}

Course.prototype.register = function () {
    return 'Register ' + this.coursename;
}

Course.prototype.coursename = "Haha"


var wap = new Course('WAP'); // Function Constructor Invoked!

console.log(wap.register());