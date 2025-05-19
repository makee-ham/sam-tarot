import { switchPage } from "./ui/switchPage.js";
import "./ui/questionInput.js";

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#start-btn")
    .addEventListener("click", () => switchPage("landing", "question"));
});
