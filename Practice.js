//Number guessing Game;
const min = 1;
const max = 100;
const Answer = Math.floor (Math.random()*(max - min + 1)) + min; 

let attempts = 0;
let guess;
let runtime = true;

while(runtime){
    guess = window.prompt(`Guess a number between ${min} -${max}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Enter a valid Number: ")
    }
    else if(guess < min || guess > max){
        window.alert("guess the valid Number");
    }
    else{
        attempts = 0;
        if(Answer > guess){
            window.alert("TOO LOW! NUMBER");
        }
        else if(Answer < guess){
            window.alert("TOO HEIGH! NUMBER");
        }
        else{
            window.alert(`congratulation you have select the currect ${Answer} Number`);
            runtime = false;
        }
    }
}
