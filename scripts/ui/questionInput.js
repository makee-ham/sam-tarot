const submitBtn = document.querySelector("#go-to-draw");

let userQuestion = "";

export function getUserQuestion() {
  userQuestion = document.querySelector("#question-input").value;
  return userQuestion;
}

submitBtn.addEventListener("click");
