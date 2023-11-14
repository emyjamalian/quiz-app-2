const form = document.querySelector('[data-js="form"]');
let card = document.querySelector(".question-card");
const main = document.querySelector('[data-js="main"]');
const formButton = document.querySelector(".form__button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newCard = Object.fromEntries(formData);

  const newQuestion = newCard.question.innerHtml;
  const newAnswer = newCard.answer.innerHtml;
  const newTag = newCard.tag.innerHtml;

  const newItem = () => {
    `
    <sectionclass="question-card">
    <img
      class="question-card__icon"
      data-js="question-card-icon"
      src="./assets/bookmark.png"
      alt="bookmark"
    />
    <h2 class="question-card__title">${newQuestion}</h2>
    <button class="question-card__button" data-js="question-button">
    show answer
  </button>
  <p class="question-card__answer"> ${newAnswer} </p>
  <div class="question-card__tags">
  <div class="question-card__tag">${newTag}</div>
  </section>`;
  };
  console.log(newItem);
});
