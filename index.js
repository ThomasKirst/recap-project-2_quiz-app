const bookmarkButton = document.querySelector("[data-js=bookmark]");

bookmarkButton?.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector("[data-js=answer-button]");
const answer = document.querySelector("[data-js=answer]");

answerButton?.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  answerButton.textContent =
    answerButton.textContent.trim() === "Show answer"
      ? "Hide answer"
      : "Show answer";
});
