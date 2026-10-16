

// machine id -> input value

function getValueFromInput(id) {

    const input = document.getElementById(id);
    const value = input.value; 
    console.log(id,value);
    return value ;
}


// machine --> Balance
function getBalance () {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText ;
    console.log("Current balance :",Number(balance));
        return Number(balance);
}

// machine --> set Balance

function setBalance (value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value ;
}

// machine --> hide all --> show one id only

function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history")

    // console.log(`addmoney-${addmoney} , Cashout -${cashout}`);

    // HIDE ALL
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    // SHOW THE ELEMENTS OF THE MENTIONED ID
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}
