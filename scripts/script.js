import { fetchTarotData } from "./tarot-api.js";

import {
  cardLoadingStart,
  cardLoadingOver,
  renderBackOfCards,
} from "./ui/renderCards.js";
import { addDragScroll } from "./ui/dragScroll.js";

import { getCardImgUrl } from "./utils/images.js";
import { shuffleCards } from "./utils/shuffle.js";

let cards = [];

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    const shuffledCards = shuffleCards(tarotData);
    cards = shuffledCards.map((card) => ({
      ...card,
      image: getCardImgUrl(card),
    }));

    renderBackOfCards(cards);
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    cardLoadingOver();
  }
}

export function getCards() {
  return cards;
}

document.addEventListener("DOMContentLoaded", () => {
  prepareDrawingCards();

  const cardContainer = document.querySelector("#card-container");
  addDragScroll(cardContainer);
});
