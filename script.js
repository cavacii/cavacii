let question = document.getElementById("question");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let next = document.getElementById("next");
let num1, num2, op, correctAnswer;
generateQuestion();
document.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (parseInt(answer.value) == correctAnswer) {
    result.innerHTML = "Jawaban benar. Selamat! >.<";
    next.style.display = "inline";
  } else {
    result.innerHTML = "Jawaban salah. Silahkan coba lagi! :(";
  }
});
document.addEventListener("click", function(event) {
  if (event.target.id == "next") {
    generateQuestion();
    answer.value = "";
    result.innerHTML = "";
    next.style.display = "none";
  }
});
function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1; //math floor membulatkan bilangan terdekat ke bawah
  num2 = Math.floor(Math.random() * 10) + 1; //math random menghasilkan nilai acak
  op = Math.floor(Math.random() * 2); //op bisa 0 atau 1 tergantung nilai acak pada math random
  
  if (op == 0) {
    question.innerHTML = num1 + " + " + num2 + " =  ?";
    correctAnswer = num1 + num2;
  } else {
    question.innerHTML = num1 + " - " + num2 + " =  ?";
    correctAnswer = num1 - num2;
  }
}