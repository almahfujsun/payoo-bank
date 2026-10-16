document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1. get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount);
    if (bankAccount == "Select Bank Name") {
        alert("Please Select a Bank");
        return;
    }
    // 2.get bank account number
    const accno = getValueFromInput("add-money-number");

    if (accno.length != 11) {
        alert("Please enter a proper account number");
        return;
    }

    // 3.get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    // PIN 
    const pin = getValueFromInput("add-money-pin");
    if (pin == "1234") {
        alert(`Money Added Successfully from ${bankAccount} at ${new Date()}`);    //SHOWING CURRENT DATE AND BANK ACCOUNT,ADDONG MULTILINE STRING
        setBalance(newBalance);

        // 1.GET THE HISTORY CONTAINER
        const history = document.getElementById("history-container");

//         // 2.CREATE New DIV
        const newHistory = document.createElement("div");

        // 3.Create a new innerHTML in the new DIV
        newHistory.innerHTML = `
  <div class="transaction-card p-5 bg-base-100">
       Money Added Successfully from
        ${ bankAccount } acc-no ${accno}
        at ${ new Date()};
        </div>
`;
        //4. Appneding new innerHTML in the new DIV
        history.append(newHistory);


    }

    else {
        alert("INVALID PIN");
        return;
    }

})