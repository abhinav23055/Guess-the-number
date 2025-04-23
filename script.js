const randomnumber = Math.floor(Math.random()* 100) + 1;

document.getElementById("Guess").addEventListener("click", function() {
    const userguess = Number(document.getElementById("userinput").value);
    const feedback = document.getElementById("feedback");

    if (!userguess || userguess<1 || userguess>100) {
        feedback.innerText="Please enter a number between 1 and 100.";
    }
         else if (userguess === randomnumber) {
            feedback.innerText="Congratulations you guessed the number!!!";
        }
        else if (userguess < randomnumber){
            feedback.innerText="The number you guessed is too low";
        }
        else if (userguess > randomnumber) {
            feedback.innerText="The number you guessed is too high";
        }
})