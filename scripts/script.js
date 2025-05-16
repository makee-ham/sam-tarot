import { fetchTarotData } from "./tarot-api";
import { cardLoadingStart, cardLoadingOver } from "./ui";

import { getCardImgUrl } from "./utils/images";

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    // console.log(tarotData);

    const cards = tarotData.map((card) => ({
      ...card,
      image: getCardImgUrl(card),
    }));
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    cardLoadingOver();
  }
}

// prepareDrawingCards();
