export async function fetchGPT(prompt) {
  const isProd = window.location.hostname !== "localhost"; // 환경 감지(production 환경 여부)
  const API_URL = isProd ? "/api/gpt" : "http://localhost:3001/api/gpt";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "GPT 응답 실패");
    }

    return data.reply;
  } catch (err) {
    console.error("fetchGPT error:", err);
    alert("GPT 응답을 받아오는 데 실패했습니다.");
    return null;
  }
}
