import { state } from "./state.js";
import { switchPage } from "./ui/switchPage.js";
import "./ui/questionInput.js";

function resetAll() {
  state.cards = [];
  state.selectedCards = [];
  state.userQuestion = "";

  // 아니 왜 ?.가 안 먹히지 그래서 다 변수 지정 중...
  const textarea = document.querySelector("#question-input");
  if (textarea) textarea.value = "";

  const goToDrawBtn = document.querySelector("#go-to-draw");
  if (goToDrawBtn) goToDrawBtn.disabled = true;

  const cardContainer = document.querySelector("#card-container");
  if (cardContainer) cardContainer.scrollLeft = 0;

  document.querySelectorAll(".tarot-card.fade-out").forEach((card) => {
    card.classList.remove("fade-out");
  });

  const resultBtn = document.querySelector("#get-result");
  if (resultBtn) resultBtn.disabled = true;

  document.querySelector("#card-area").innerHTML = "";

  document.querySelector(`#selected-cards`).innerHTML = "";
  document.querySelector(`#drawn-cards`).innerHTML = "";

  const resultOutput = document.querySelector("#result-output");
  if (resultOutput) resultOutput.textContent = "";
  const userQuestion = document.querySelector("#user-question");
  if (userQuestion) userQuestion.textContent = "";
  const cardArea = document.querySelector("#drawn-cards");
  if (cardArea) cardArea.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#start-btn")
    .addEventListener("click", () => switchPage("landing", "question"));

  document.querySelectorAll(".reset").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      resetAll();
      switchPage(e.currentTarget.dataset.from, "landing");
    })
  );
  document.querySelector("#retry").addEventListener("click", (e) => {
    resetAll();
    switchPage(e.currentTarget.dataset.from, "question");
  });
});
