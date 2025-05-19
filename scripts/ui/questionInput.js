import { state } from "../state.js";
import { switchPage } from "./switchPage.js";

const inputArea = document.querySelector("#question-input");
const submitBtn = document.querySelector("#go-to-draw");

inputArea.addEventListener("input", () => {
  state.userQuestion = inputArea.value.trim();
  submitBtn.disabled = state.userQuestion === "";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (state.userQuestion === "") {
    alert("질문을 입력해 주세요.");
    return;
  }

  document.querySelector("#question-reminder").textContent =
    "당신의 질문: " + state.userQuestion;

  switchPage("question", "draw");
});
