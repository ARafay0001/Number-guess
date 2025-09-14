const submit = document.querySelector(".submit");
const newGame = document.querySelector(".new");
const notify = document.querySelector("h3");
const yourGuesses = document.querySelector(".yourGuesses");
function gen() {
    let arry = []
    let guesses = 10;
    const random = Math.floor(Math.random() * 99 + 1);
    
    submit.addEventListener("click", () => {
        const inputvalue =  document.querySelector("input").value
        if (inputvalue !== "") {
            console.log("click")
            const input = parseInt(inputvalue)
            guesses = guesses - 1;
            document.querySelector("input").value = "";
            document.querySelector(".remaining").textContent = guesses
            document.querySelector(".result").classList.remove("disable")
            arry.push(input);
            if (input < random) {
                notify.textContent = `${input} is too low!`
            } else if (input > random) {
                notify.textContent = `${input} is too high!`
            } else if (input == random) {
                notify.textContent = `You got in ${guesses}`
            } else {
                document.querySelector("input").placeholder = "Enter a number before submit"
            }
            yourGuesses.textContent = arry
            if (guesses == 1){
                notify.textContent = `Game Over no more guesses left!`
            submit.disabled = ture 
            newGame.disabled = false     
        }
        }
    })
    
    newGame.addEventListener("click", () => {
        gen()
        submit.disabled = false 
        newGame.disabled = true
    })
    
}
gen()