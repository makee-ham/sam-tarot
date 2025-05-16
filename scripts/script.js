import { fetchTarotData } from "./tarot-api";
import { cardLoadingStart, cardLoadingOver } from "./ui";

import { getCardImgUrl } from "./utils/images";
import { shuffleCards } from "./utils/shuffle";

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    // console.log(tarotData);
    const shuffledCards = shuffleCards(tarotData);
    const cards = shuffledCards.map((card) => ({
      ...card,
      image: getCardImgUrl(card),
    }));

    // 이제 여기서 cards를 뒷면으로 렌더하게...
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    cardLoadingOver();
  }
}

// prepareDrawingCards();
