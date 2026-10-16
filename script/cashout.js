 document.getElementById("cashout-btn").addEventListener("click", function () { 

 // 1.Get the agent number & valid
const cashoutNumber = getValueFromInput("cashout-number");
   if(cashoutNumber.length != 11) {
    alert("INVALID AGENT NUMBER");
    return ;
   }
  // 2.get the amount, validate & convert to number
  const cashoutAmount = getValueFromInput("cashout-amount");

  // 4. calculating the balance 
  const currentBalance = getBalance() 

    const newBalance = currentBalance - Number(cashoutAmount);
 console.log(newBalance);

 if(newBalance < 0) {
    alert("INVALID AMOUNT");
    return 0;
 }

   // 5.Get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if( pin ==="1234"){
        alert("CASHOUT SUCCESSFULL");
        setBalance(newBalance); 

        
        // 1.GET THE HISTORY CONTAINER
        const history = document.getElementById("history-container");

//         // 2.CREATE New DIV
        const newHistory = document.createElement("div");

        // 3.Create a new innerHTML in the new DIV
        newHistory.innerHTML = `
  <div class="transaction-card p-5 bg-base-100">
       Cashout ${cashoutAmount} Successful to
        ${ cashoutNumber }
        at ${ new Date()};
        </div>
`;
        //4. Appneding new innerHTML in the new DIV
        history.append(newHistory);

    }
    else{
            alert("INVALID PIN");
    return 0;
    }


})





// document.getElementById("cashout-btn").addEventListener("click", function () {

//     // 1.Get the agent number & valid
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
// if(cashoutNumber.lenght !=11) {
//     alert("INVALID AGENT NUMBER");
//     return ;
// }   

//     // 2.get the amount, validate & convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3.get current balance,validate & convert to number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;     //innerText for getting a  text type value, not a number type
//     console.log(balance);

//     // 4. Calculate the new balance 
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log(newBalance);
//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }

//     // 5.Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;

//     // 6. True:: Show an alert. set new balance 
//     if (pin === "1234") {
//         alert("Cashout successfull");
//         console.log("New Balance :", newBalance);
//           balanceElement.innerText = newBalance;
//     }

//     else {
//         // 7.False :: Show an error alert > return
//         alert("INVALID PIN");
//         return;
//     }

// // })