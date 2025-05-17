import { fetchTarotData } from "./tarot-api.js";
import {
  cardLoadingStart,
  cardLoadingOver,
  renderBackOfCards,
} from "./ui/renderCards.js";

import { getCardImgUrl } from "./utils/images.js";
import { shuffleCards } from "./utils/shuffle.js";

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    const shuffledCards = shuffleCards(tarotData);
    const cards = shuffledCards.map((card) => ({
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

document.addEventListener("DOMContentLoaded", () => {
  prepareDrawingCards();
});
