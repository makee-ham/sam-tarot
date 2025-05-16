export function cardLoadingStart() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.remove("hidden");
}

export function cardLoadingOver() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.add("hidden");
}
