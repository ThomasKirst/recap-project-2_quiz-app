const form = document.querySelector("form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const question = formElements.question.value;
  const answer = formElements.answer.value;
  const tag = formElements.tag.value;

  const cardList = document.querySelector("[data-js=card-list]");

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = question;

  // Create the bookmark button
  const bookmark = document.createElement("div");
  bookmark.classList.add("card__button-bookmark");

  const button = document.createElement("button");
  button.classList.add("bookmark");
  button.setAttribute("aria-label", "bookmark");
  button.setAttribute("type", "button");

  // This could also be done with innerHTML
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bookmark__icon");
  svg.setAttribute("viewBox", "0 0 24 24");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2");

  svg.appendChild(path);
  button.appendChild(svg);
  bookmark.appendChild(button);

  // Create the answer button
  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.classList.add("card__button-answer");
  cardButtonAnswer.setAttribute("type", "button");
  cardButtonAnswer.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer", "hidden");
  cardAnswer.textContent = answer;

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTagListItem = document.createElement("li");
  cardTagListItem.classList.add("card__tag-list-item");
  cardTagListItem.textContent = tag;

  cardList.appendChild(cardListItem);
  cardListItem.appendChild(card);
  card.appendChild(cardQuestion);
  card.appendChild(cardButtonAnswer);
  card.appendChild(cardAnswer);
  card.appendChild(cardTagList);
  card.appendChild(bookmark);
  cardTagList.appendChild(cardTagListItem);

  // Bonus: The answer button needs its event listener here
  cardButtonAnswer.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--active");
    cardButtonAnswer.textContent =
      cardButtonAnswer.textContent === "Show answer"
        ? "Hide answer"
        : "Show answer";
  });
  // Bonus 2: The bookmark button needs its event listener here
  // Not really important for the exercise, but it's a good practice

  event.target.reset();

  // Bonus 3: How can the counters be reset?
  // We might want to add two individual data-js attributes to the counters
});

// Counting the characters in the textarea

// Listen on each textarea individually
const questionTextarea = document.querySelector("[name=question]");
const answerTextarea = document.querySelector("[name=answer]");

questionTextarea.addEventListener("input", (event) => {
  const remaining = event.target.maxLength - event.target.value.length;
  const counter = event.target.nextElementSibling;
  counter.textContent = `${remaining} characters remaining`;
});

answerTextarea.addEventListener("input", (event) => {
  const remaining = event.target.maxLength - event.target.value.length;
  const counter = event.target.nextElementSibling;
  counter.textContent = `${remaining} characters remaining`;
});

// More general solution: listen on the form
// form.addEventListener("input", (event) => {
//   const textarea = event.target;
//   const counter = textarea.nextElementSibling;

//   if (counter.classList.contains("form__counter")) {
//     const remaining = textarea.maxLength - textarea.value.length;
//     counter.textContent = `${remaining} characters remaining`;
//   }
// });
