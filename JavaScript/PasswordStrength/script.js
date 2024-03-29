let inputVal = document.querySelector("#password")
let outputVal = document.querySelector("#output");

inputVal.addEventListener(('input'), () => {
    console.log(inputVal.value);
    password = inputVal.value;

    if(password.length < 8){
        outputVal.innerText = "Password is too short";
    }
    else{
        if(password.search(/[a-z]/) == -1){
            outputVal.innerText = "Passowrd is missing a lowercase character"
            outputVal.style.color = "red"
        }
        else if(password.search(/[A-Z]/) == -1){
            outputVal.innerText = "Passowrd is missing an Uppercase character"
            outputVal.style.color = "red"
        }
        else if(password.search(/[0-9]/) == -1){
            outputVal.innerText = "Passowrd is missing a Numeric character"
            outputVal.style.color = "red"
        }
        
        else{
            outputVal.innerText = "Passowrd is Strong."
            outputVal.style.color = "green"
            // outputVal.classList.add("correct")

        }
    }
})