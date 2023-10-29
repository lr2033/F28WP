let numbers = [0, 0, 0, 0, 0];
let guess = 0

higher.disabled = true;
lower.disabled = true;

startButton.addEventListener("click", function () {
  ResetNums()
  startButton.innerHTML = "Restart"
  higher.disabled = false;
  lower.disabled = false;

  for (let index = 0; index < numbers.length; index++) {
    numbers[index] = Math.floor(Math.random() * 10) + 1;
  }
  num1.innerHTML = numbers[0];

})


higher.addEventListener("click", function () {
  guess++;
  updateNums(guess);
  if (numbers[guess] >= numbers[guess -1]) {
    if (guess == 4) {
      win();
    }
  }

  else {
    guess = 0;
    higher.disabled = true;
    lower.disabled = true;
    lose();
  }
})


lower.addEventListener("click", function () {
  guess++;
  updateNums(guess);
  if (numbers[guess] <= numbers[guess -1]) {
    if (guess == 4) {
      win();
    }
  }

  else {
    guess = 0;
    higher.disabled = true;
    lower.disabled = true;
    lose();
  }
})




function updateNums(guess) {
  if (guess == 1) {
    num2.innerHTML = numbers[guess];
  }

  else if (guess == 2) {
    num3.innerHTML = numbers[guess];
  }

  else if (guess == 3) {
    num4.innerHTML = numbers[guess];
  }

  else if (guess == 4) {
    num5.innerHTML = numbers[guess];
  }
}


function ResetNums() {
  num1.innerHTML = "?"
  num2.innerHTML = "?"
  num3.innerHTML = "?"
  num4.innerHTML = "?"
  num5.innerHTML = "?"
}


function win() {
  alert("You WIN!");
}


function lose() {
  alert("GAME OVER!")
}