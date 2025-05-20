import { state } from "../state.js";
import { fetchTarotData } from "../tarot-api.js";
import { renderBackOfCards } from "./renderCards.js";
import { cardLoadingStart, cardLoadingOver } from "./pageLoading.js";
import { getCardImgUrl } from "../utils/images.js";
import { shuffleCards } from "../utils/shuffle.js";

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
