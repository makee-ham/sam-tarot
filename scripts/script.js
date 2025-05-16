import { fetchTarotData } from "./tarot-api";

async function prepareDrawingCards() {
  // 로딩 시작

  try {
    const tarotData = await fetchTarotData();
    console.log(tarotData);
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    // 로딩 종료
  }
}
