import { state } from "./state.js";
import { switchPage } from "./ui/switchPage.js";
import { fetchTarotData } from "./tarot-api.js";
import {
  cardLoadingStart,
  cardLoadingOver,
  renderBackOfCards,
} from "./ui/renderCards.js";
import { getCardImgUrl } from "./utils/images.js";
import { shuffleCards } from "./utils/shuffle.js";
import "./ui/questionInput.js";

export async function prepareDrawingCards() {
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

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#start-btn")
    .addEventListener("click", () => switchPage("landing", "question"));
});
