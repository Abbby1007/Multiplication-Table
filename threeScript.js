let display = document.getElementById(`appear`);

// Question 1
function threeq1()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 3;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="threeq2.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 2
function threeq2()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 6;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="threeq3.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 3
function threeq3()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 9;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="threeq4.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 4
function threeq4()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 12;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="threeq5.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}

// Question 5
function threeq5()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 15;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="threeq6.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}