let btn = document.getElementById('btn');
let output = document.getElementById('guess-number');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('input-number').value;
    if (input === number){
        output.innerHTML = 'You guessed right, your number was ${number}'
    }else if (input < number){
        output.innerHTML = "you guessed too low!"
    };
if (input > number){
    output.innerHTML = "you guessed too high!"
}
});