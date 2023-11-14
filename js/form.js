const form = document.querySelector('[data-js="form"]');
let card = document.querySelector(".question-card");
const main = document.querySelector('[data-js="main"]');
const formButton = document.querySelector(".form__button");

console.log(question);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newCard = Object.fromEntries(formData);

  console.log(newCard);
  const newItem = `
    <sectionclass="question-card">
    <img
      class="question-card__icon"
      data-js="question-card-icon"
      src="./assets/bookmark.png"
      alt="bookmark"
    />
    <h2 class="question-card__title">${newCard.question}</h2>
    <button class="question-card__button" data-js="question-button">
    show answer
  </button>
  <p class="question-card__answer"> ${newCard.answer} </p>
  <div class="question-card__tags">
  <div class="question-card__tag">${newCard.tag}</div>
  </section>`;

  console.log(newItem);

  // Update the content of the card element directly
  card = newItem.innerhtml;
});
