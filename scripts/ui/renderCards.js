import { handleCardClick } from "./clickCard.js";
import { state } from "../state.js";

export function renderBackOfCards(cards) {
  const cardArea = document.querySelector("#card-area");
  cardArea.innerHTML = "";

  cards.forEach((card, i) => {
    const cardEl = document.createElement("img");
    cardEl.src = "./assets/cards/back/back.jpeg";
    cardEl.alt = "카드 뒷면";
    cardEl.dataset.index = i;
    cardEl.classList.add("tarot-card");

    cardEl.addEventListener("contextmenu", (e) => e.preventDefault());
    cardEl.addEventListener("click", handleCardClick);

    cardArea.appendChild(cardEl);
  });
}

export function renderSelectedCards(id) {
  const selectedCardsArea = document.querySelector(`#${id}`);
  selectedCardsArea.innerHTML = "";

  state.selectedCards.forEach((card) => {
    const cardEl = document.createElement("img");
    cardEl.src = card.image;
    cardEl.alt = card.name;
    cardEl.classList.add("selected-card");
    selectedCardsArea.appendChild(cardEl);
  });
}
