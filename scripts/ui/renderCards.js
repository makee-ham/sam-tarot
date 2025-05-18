import { handleCardClick } from "./clickCard.js";

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
    cardEl.addEventListener("contextmenu", (e) => e.preventDefault());
    cardEl.addEventListener("click", handleCardClick);
    cardArea.appendChild(cardEl);
  });
}

export function renderSelectedCards(selectedCardsArr) {
  const selectedCardsArea = document.querySelector("#selected-cards");
  selectedCardsArea.innerHTML = "";

  selectedCardsArr.forEach((card) => {
    const cardEl = document.createElement("img");
    cardEl.src = card.image;
    cardEl.classList.add("selected-card");
    selectedCardsArea.appendChild(cardEl);
  });
}
