import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant. Respond in Ukrainian Language",
    },
    {
      role: "user",
      content:
        "Придумай опис технології майбутнього, яка дозволяє людям обмінюватися емоціями замість слів. Як вона працює, які проблеми вона може вирішити, а які виклики принесе?",
    },
  ],
  store: true,
});

console.log(completion.choices[0].message);
