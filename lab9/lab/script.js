window.onload = () => {
    document.getElementById("btnSend").onclick = callAPIByAjax;
};

async function callAPIByAjax(){
    let userId = document.getElementById("userId").value;
    let url = "http://jsonplaceholder.typicode.com/users/" + userId;

    let response = await fetch(url);
    console.log(response.headers);

    let result = await response.json();
    alert(result.message);
}

