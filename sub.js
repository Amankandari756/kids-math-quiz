const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myaudio");
var answer = 0;

function generate_equation() {
    const num1 = Math.floor(Math.random() * 13);
    const num2 = Math.floor(Math.random() * 13);

   
    if (num1 < num2) {
        [num1 , num2] = [num2, num1];
    }

    answer = num1 - num2;

    let dummyAnswer1, dummyAnswer2;

   
    do {
        dummyAnswer1 = Math.floor(Math.random() * 26) - 13;
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 26) - 13;
    } while (dummyAnswer2 === answer || dummyAnswer2 === dummyAnswer1);

    const allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    const switchAnswers = [];

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    // Shuffle answers
    while (allAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        switchAnswers.push(allAnswers.splice(randomIndex, 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

function checkAnswer(option) {
    if (parseInt(option.innerHTML) === answer) {
        generate_equation();
    } else {
        audio.play();
    }
}

option1.addEventListener("click", () => checkAnswer(option1));
option2.addEventListener("click", () => checkAnswer(option2));
option3.addEventListener("click", () => checkAnswer(option3));

generate_equation();
