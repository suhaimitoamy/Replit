export async function evaluateAnswer(aiConfig, rubric, promptText, userAnswer) {
  const { aiProvider, provider, apiKey, model } = aiConfig;
  const actualProvider = aiProvider || provider;

  if (!apiKey) {
    throw new Error('API key belum diisi. Silakan isi di Settings.');
  }

  const normalizedProvider = String(actualProvider || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace("(default)", "");

  let apiUrl = '';
  let headers = {
    'Content-Type': 'application/json',
  };
  let body = {};

  const systemPrompt = `Kamu adalah evaluator edukasi trading. Jangan memberi sinyal buy/sell live. Jangan menjanjikan profit. Tugasmu hanya menilai jawaban belajar, chart, kesalahan logika, pemahaman konsep, dan memberi remedial.

Berikan hasil dalam JSON valid sesuai format ini tanpa markdown:
{
  "passed": true/false,
  "score": 0-100,
  "correct_points": [],
  "wrong_points": [],
  "feedback": "Pesan feedback untuk user",
  "remedial_lessons": [],
  "unlock_next_level": true/false
}

Rubrik:
${rubric}`;

  let imageBase64 = null;
  let textAnswer = userAnswer || "";
  const imgMatch = textAnswer.match(/\[Image Data:\s*(data:image\/[^;]+;base64,[^\]]+)\]/);
  if (imgMatch) {
    imageBase64 = imgMatch[1];
    textAnswer = textAnswer.replace(imgMatch[0], '').trim();
  }

  let userContentText = promptText + '\n\nJawaban User: ' + textAnswer;
  if (imageBase64) {
    userContentText += "\n\nUser mengupload chart screenshot. Evaluasi jawaban teks user berdasarkan rubrik. Jika gambar belum bisa dibaca model, jelaskan bahwa evaluasi utama berdasarkan jawaban teks.";
  }

  let userContent;
  if (imageBase64) {
    userContent = [
      { type: "text", text: userContentText },
      { type: "image_url", image_url: { url: imageBase64 } }
    ];
  } else {
    userContent = userContentText;
  }

  if (normalizedProvider.includes('openrouter')) {
    apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    headers['Authorization'] = `Bearer ${apiKey}`;
    headers['HTTP-Referer'] = window.location.origin;
    headers['X-Title'] = 'Amy Trading Quest';
    body = {
      model: model || 'openrouter/auto',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent }
      ],
      temperature: 0.3
    };
  } else {
    throw new Error('Provider ini belum aktif. Gunakan OpenRouter dulu.');
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Gagal terhubung ke OpenRouter: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.choices || data.choices.length === 0) {
      throw new Error('Response kosong dari API.');
    }
    
    let resultText = data.choices[0].message.content;
    resultText = resultText.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    try {
      return JSON.parse(resultText);
    } catch (parseError) {
      return {
        passed: false,
        score: 0,
        correct_points: [],
        wrong_points: [],
        feedback: resultText,
        remedial_lessons: [],
        unlock_next_level: false
      };
    }
  } catch (error) {
    console.error('AI Eval Error', error);
    throw error;
  }
}
