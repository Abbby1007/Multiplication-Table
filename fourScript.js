let display = document.getElementById(`appear`);

// Question 1
function fourq1()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 4;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq2.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 2
function fourq2()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 8;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq3.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 3
function fourq3()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 12;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq4.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 4
function fourq4()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 16;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq5.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 5
function fourq5()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 20;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq6.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 6
function fourq6()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 24;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fourq7.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}