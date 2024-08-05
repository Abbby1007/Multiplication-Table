let display = document.getElementById(`appear`);

// Question 1
function fiveq1()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 5;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="fiveq2.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }
}