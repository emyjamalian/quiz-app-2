const showanswerButton = document.querySelector('[data-js="question-button"]');
const answer = document.querySelector(".question-card__answer");
const bookmarks = document.querySelectorAll('[data-js="card-bookmark-icon"]');

showanswerButton.addEventListener("click", showAnswer);

function showAnswer() {
  console.log("showAnswer function called");
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

const toggleBookmarkIcon = (event) => {
  const bookmarkIcon = event.target;
  console.log(bookmarkIcon);
  bookmarkIcon.classList.toggle("active");
  const isActive = bookmarkIcon.classList.contains("active");
  if (isActive) {
    bookmarkIcon.src = "./bookmark_filled.png";
  } else {
    bookmarkIcon.src = "./bookmark.png";
  }
};

bookmarks.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", toggleBookmarkIcon);
});
