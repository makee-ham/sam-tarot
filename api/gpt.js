// ✅ 로컬 개발 환경에서 .env 로딩
if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}

// ✅ 기본 export (Vercel 서버리스 함수용)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  try {
    const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await gptRes.json();

    if (!data.choices) {
      throw new Error("No response from GPT");
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error("GPT error:", err);
    res.status(500).json({ error: "GPT 호출 실패" });
  }
}
