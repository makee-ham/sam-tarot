export async function fetchTarotData() {
  const response = await fetch("https://tarotapi.dev/api/v1/cards");

  if (!response.ok) throw new Error("타로 카드 데이터를 불러오지 못했습니다.");

  const data = await response.json();

  return data.cards;
}
