
let display = document.getElementById(`appear`);
function oneq1()
{
  let input = document.getElementById('input').value;

  let correctAnswer = 1;

  if (correctAnswer == input) {
    document.getElementById('appear').innerHTML = '<a href="oneq2.html"> <button> Next Question</button> </a>'
  }
  else {
    display.textContent = `Try Again`;
  }


}