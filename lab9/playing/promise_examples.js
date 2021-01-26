let alert = console.log;

function delay(ms) {
    let promise = new Promise(function(reslove, reject){
        if (ms > 1000){
            reslove();
        }
        else {
            reject();
        }
    });

    return promise;
}

delay(5000)
    .finally(() => alert("Finnaly"))
    .catch(() => alert("Reject"))    
    .then(() => alert('runs after 3 seconds'));
    