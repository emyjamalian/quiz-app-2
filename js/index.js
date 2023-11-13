const showanswerButton = document.querySelector(".question-card__button");
const answer = document.querySelector(".question-card__answer");

showanswerButton.addEventListener("click", showAnswer);

function showAnswer() {
  if (answer.style.display === "none") {
    showanswerButton.classList.add("hide-answer");
    answer.style.display = "block";
    showanswerButton.textContent = "Hide Answer";
  } else {
    answer.style.display = "none";
    showanswerButton.classList.remove("hide-answer");
    showanswerButton.textContent = "show answer";
  }
}
