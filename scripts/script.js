import { fetchTarotData } from "./tarot-api";
import { cardLoadingStart, cardLoadingOver } from "./ui";

async function prepareDrawingCards() {
  cardLoadingStart();
  try {
    const tarotData = await fetchTarotData();
    // console.log(tarotData);
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    cardLoadingOver();
  }
}

// prepareDrawingCards();
