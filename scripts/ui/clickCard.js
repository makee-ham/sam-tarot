import { state } from "../state.js";
import { switchPage } from "./switchPage.js";
import { renderSelectedCards } from "./renderCards.js";
import { dragState } from "./dragScroll.js";

function onResultClick() {
  switchPage("draw", "result");
}

export function handleCardClick(e) {
  if (dragState.isDragging || state.selectedCards.length >= 3) return;

  const selectedCard = e.currentTarget;
  const selectedIndex = Number(selectedCard.dataset.index);
  selectedCard.classList.add("fade-out");
  state.selectedCards.push(state.cards[selectedIndex]);

  const cardArea = document.querySelector("#card-area");
  const cardWidth = 120;
  const total = 79 - state.selectedCards.length;
  cardArea.style.width = `${cardWidth * total}px`;

  renderSelectedCards("selected-cards");

  if (state.selectedCards.length >= 3) {
    const resultBtn = document.querySelector("#get-result");
    resultBtn.disabled = false;
    resultBtn.removeEventListener("click", onResultClick); // 중복제거...
    resultBtn.addEventListener("click", onResultClick, { once: true }); // 다회클릭 방지...
  }
}
