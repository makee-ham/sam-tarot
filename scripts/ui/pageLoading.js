export function cardLoadingStart() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.remove("hidden");
}

export function cardLoadingOver() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.add("hidden");
}

export function resultLoadingStart() {
  const resultLoadingGuider = document.querySelector("#result-loading");
  resultLoadingGuider.classList.remove("hidden");
}

export function resultLoadingOver() {
  const resultLoadingGuider = document.querySelector("#result-loading");
  resultLoadingGuider.classList.add("hidden");
}
