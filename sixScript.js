
let display = document.getElementById(`appear`);

// Question 1
function sixq1()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 6;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="sixq2.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

function sixq2()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 12;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="sixq3.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

function sixq3()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 18;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="sixq4.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}