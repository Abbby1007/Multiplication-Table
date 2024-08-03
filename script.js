
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

function oneq2 (){
  let input = document.getElementById("input").value;

  let correctAnswer = 2;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq3.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}

function oneq3(){
  let input = document.getElementById("input").value;

  let correctAnswer = 3;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq4.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}

function oneq4(){
  let input = document.getElementById("input").value;

  let correctAnswer = 4;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq4.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}

function oneq5(){
  let input = document.getElementById("input").value;

  let correctAnswer = 5;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq6.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}

function oneq6(){
  let input = document.getElementById("input").value;

  let correctAnswer = 6;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq7.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}

function oneq7(){
  let input = document.getElementById("input").value;

  let correctAnswer = 7;

  if(correctAnswer == input){
    document.getElementById('appear').innerHTML = `<a href = "oneq8.html"> <button> Next Question </button> </a>`
  }
  else {
    display.textContent = `Try Again`
  }
}