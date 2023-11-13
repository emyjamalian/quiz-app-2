const form = document.querySelector('[data-js="form"]');
const card = document.querySelector(".question-card");
const main = document.querySelector('[data-js="main"]');
const formButton = document.querySelector('name="form__button"');

const question = document.querySelector('[name="question"]');

console.log(question);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const newCard = Object.fromEntries(formData);

//   console.log(formData);
//   console.log(newCard);

//   const newAnswer = `<h2 class="card__question">${newCard.question.value}</h2>
//   <p class="card__answer"> ${newCard.answer.value} </p>
//   <li class="card__tags__tag"> ${newCard.tag.value}</li>`;

//   const actualList = card.innerHTML;
//   card.innerHTML = newAnswer;
// });

console.log(formButton);
// formButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("CLICK");
// });
