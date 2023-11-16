const form = document.querySelector('[data-js="form"]');
let card = document.querySelector(".question-card");
const main = document.querySelector('[data-js="main"]');
const formButton = document.querySelector(".form__button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("section");
  form.append(newCard);
  newCard.classList.add("question-card");

  const question = document.createElement("h2");
  question.classList.add("question-card__title");
  question.textContent = data.question;
  newCard.appendChild(question);

  const answer = document.createElement("p");
  answer.classList.add("question-card__answer");
  answer.textContent = data.answer;
  newCard.appendChild(answer);

  const button = document.createElement("button");
  button.classList.add("question-card__button");
  button.textContent = "show answer";
  newCard.appendChild(button);

  // newCard.innerhtml = `
  //   <section class="question-card">
  //   <img
  //     class="question-card__icon"
  //     data-js="question-card-icon"
  //     src="./assets/bookmark.png"
  //     alt="bookmark"
  //   />
  //   <button class="question-card__button" data-js="question-button">
  //   show answer
  // </button>
  // <p class="question-card__answer"> ${data.answer} </p>
  // <div class="question-card__tags">
  // <div class="question-card__tag">${data.tag}</div>
  // </section>`;

  document.body.append(newCard);
});
