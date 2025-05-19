import { state } from "./state.js";
import { fetchTarotData } from "./tarot-api.js";
import {
  cardLoadingStart,
  cardLoadingOver,
  renderBackOfCards,
} from "./ui/renderCards.js";
import { addDragScroll } from "./ui/dragScroll.js";
import { getCardImgUrl } from "./utils/images.js";
import { shuffleCards } from "./utils/shuffle.js";
import "./ui/questionInput.js";

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    const shuffledCards = shuffleCards(tarotData);
    state.cards = shuffledCards.map((card) => ({
      ...card,
      image: getCardImgUrl(card),
    }));

    renderBackOfCards(state.cards);
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    cardLoadingOver();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  prepareDrawingCards();

  const cardContainer = document.querySelector("#card-container");
  addDragScroll(cardContainer);
});
