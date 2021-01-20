let accountModule = function(){
    let accounts = [];

    function createAccount() {
        let acc = {
            name: document.getElementById("txtName").value,
            balance: document.getElementById("txtDeposit").value
        };
        accounts.push(acc);
        return acc;
    };

    function displayAccounts() {

        accounts.forEach((acc, idx) => {
            let msg = `${idx} [Account name ${acc.name} Balance ${acc.balance}]`;
            console.log(msg);
        });
    };

    return {create: createAccount, displayAll: displayAccounts};
};

let accountFactory = accountModule();

function createAccount(){    
    let acc = accountFactory.create();

    let msg = `Account name ${acc.name} Balance ${acc.balance}`;
    console.log(msg);

    let txt = document.getElementById("txt");
    appendText(txt, msg);

    accountFactory.displayAll();
}

function appendText(txt, msg) {
    txt.value += msg+'\n';
}


window.onload = () => {    
    document.getElementById("btnCreateAccount").onclick = createAccount;
}

