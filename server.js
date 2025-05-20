import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // .env에서 OPENAI_API_KEY 읽어옴

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/gpt", async (req, res) => {
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
    const reply = data.choices?.[0]?.message?.content;

    if (data.error) {
      console.error("❗ OpenAI 오류:", data.error.message);
      return res.status(400).json({ error: data.error.message });
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error("GPT 호출 실패:", err);
    res.status(500).json({ error: "GPT 호출 중 오류 발생" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ GPT 서버가 http://localhost:${PORT}/api/gpt 에서 실행 중!`);
});
