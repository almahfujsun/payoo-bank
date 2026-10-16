console.log("Attached");

document.getElementById('login-btn').addEventListener("click", function () {

    //1.Get the Mobile Number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2.Get the pin 
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    // 3.Matching pin & number
    if (contactNumber == "01234567890" && pin == "1234") {
        // 4. True:::>>alert>homepage

        alert("Login Successful");
 
        window.location.assign("home.html") ;  //WINDOWLOCATION,REPLACE,ASSIGN
    }
    else {

        // 5.False :::alert>>Return
        alert("Login Failed");
        return;
    }
})