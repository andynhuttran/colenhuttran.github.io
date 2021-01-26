window.onload = () => {
    btn1.onclick = handler(5);
    btn2.onclick = handler(2);
};

function handler(val){
    return function() {
        alert("Click: " + val++);
    }
}