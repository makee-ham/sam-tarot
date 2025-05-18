import { getCards } from "../script.js";
import { renderSelectedCards } from "./renderCards.js";
import { dragState } from "./dragScroll.js";

let selectedCards = [];

export function handleCardClick(e) {
  if (dragState.isDragging || selectedCards.length >= 3) return;

  const selectedCard = e.currentTarget;
  const selectedIndex = Number(selectedCard.dataset.index);
  const cards = getCards(); // cards' data

  selectedCard.classList.add("fade-out");
  selectedCards.push(cards[selectedIndex]);

  const cardArea = document.querySelector("#card-area");
  const cardWidth = 120;
  const total = 79 - selectedCards.length;
  cardArea.style.width = `${cardWidth * total}px`;

  renderSelectedCards(selectedCards);

  if (selectedCards.length >= 3) {
    const resultBtn = document.querySelector("#get-result");
    resultBtn.disabled = false;
  }
}
