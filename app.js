function gen() {
    document.querySelector(".result").classList.add("disable")
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log("random number:", randomNumber);
    let inputArry = []
    let guessLeft = 10;
    //clicking on submit
    document.querySelector(".submit").addEventListener("click", () => {
        const inputvalue =  parseInt(document.querySelector("input").value);
        console.log("input value", inputvalue)
        if (inputvalue) {
            
            document.querySelector(".result").classList.remove("disable")
            if (inputvalue < randomNumber) {
                document.querySelector("h3").textContent = `${inputvalue} is too low`
            } else if (inputvalue > randomNumber) {
                document.querySelector("h3").textContent = `${inputvalue} is too high`
            } else if (inputvalue == randomNumber) {
                document.querySelector("h3").textContent = `${inputvalue} is correct`
                document.querySelector(".submit").disabled = true;
            } 
            inputArry.push(inputvalue)
            document.querySelector(".yourGuesses").textContent = inputArry
            guessLeft = guessLeft - 1
            if (guessLeft == 0) {
                document.querySelector(".submit").disabled = true;
                document.querySelector("h3").textContent = `Game Over you have 0 guess left`         
            }
            console.log("guess left", guessLeft)
            document.querySelector(".remaining").textContent = guessLeft;
            document.querySelector("input").value = ""
        }
    } )
    //clicking new 
    document.querySelector(".new").addEventListener("click", () => {
        document.querySelector(".submit").disabled = false;
        console.log("click");
        document.querySelector(".remaining").textContent = 10;
        document.querySelector("input").value = ""
        gen()
    })
}
gen()