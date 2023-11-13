let showanswerButton = document.querySelector('data-js="question-button');
const answer = document.querySelector(".question-card__answer");
const bookmarkIcon = document.querySelector('data-js="question-card-icon"');

showanswerButton.addEventListener("click", showAnswer);
bookmarkIcon.addEventListener("click", bookmarked);

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

function bookmarked() {
  bookmarkIcon.classList.toggle("question-card__icon--active");
}
