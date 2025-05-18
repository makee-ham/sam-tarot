export function cardLoadingStart() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.remove("hidden");
}

export function cardLoadingOver() {
  const cardLoadingGuider = document.querySelector("#card-loading");
  cardLoadingGuider.classList.add("hidden");
}

export function renderBackOfCards(cards) {
  const cardArea = document.querySelector("#card-area");
  cardArea.innerHTML = "";

  cards.forEach((card, i) => {
    const cardEl = document.createElement("img");
    cardEl.src = "./assets/cards/back/back.jpeg";
    cardEl.dataset.index = i;
    cardEl.classList.add("tarot-card");
    cardArea.appendChild(cardEl);
  });
}
