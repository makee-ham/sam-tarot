import { state } from "./state.js";
import { switchPage } from "./ui/switchPage.js";
import "./ui/questionInput.js";

export function resetAll() {
  state.cards = [];
  state.selectedCards = [];
  state.userQuestion = "";

  document.querySelector("#question-input")?.value = "";
  document.querySelector("#go-to-draw")?.disabled = true;
  document.querySelector("#card-container")?.scrollLeft = 0;
  document
    .querySelectorAll(".tarot-card.fade-out")
    ?.forEach((card) => card.classList.remove("fade-out"));
  document.querySelector("#get-result")?.disabled = true;
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#start-btn")
    .addEventListener("click", () => switchPage("landing", "question"));
});
