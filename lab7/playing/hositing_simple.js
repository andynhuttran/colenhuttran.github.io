
var x = "Hello world";
function global() {
    
    function b() {        
        function a() {
            console.log(x);            
        }
        a();
        var x = 5;
        console.log(x);
    }

    var x = 10;
    b();
};

global();
console.log("x = " + x);
