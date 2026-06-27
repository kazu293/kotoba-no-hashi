export async function analyzePhrase(prompt) {
  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }

  const { text } = await res.json();

  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Invalid JSON response: ' + text.slice(0, 200));
  return JSON.parse(match[0]);
}

export function buildPrompt({ phrase, targetLang, uiLang, situation, occupation, customSituation }) {
  const langLabel = targetLang === 'ja' ? '日本語' : '한국어';
  const replyLang = uiLang === 'ja' ? '日本語' : '한국어';

  const contextParts = [];
  if (situation)
    contextParts.push(uiLang === 'ja' ? `シチュエーション: ${situation}` : `상황: ${situation}`);
  if (occupation)
    contextParts.push(uiLang === 'ja' ? `話者の職業: ${occupation}` : `화자의 직업: ${occupation}`);
  if (customSituation?.trim())
    contextParts.push(uiLang === 'ja' ? `補足: ${customSituation.trim()}` : `보충: ${customSituation.trim()}`);

  const contextBlock = contextParts.length
    ? `\n\n【分析の文脈】\n${contextParts.join('\n')}\nこの文脈に合わせて解説してください。`
    : '';

  return `あなたは日本語と韓国語のネイティブ専門家です。以下のフレーズを${langLabel}として分析してください。
返答はすべて${replyLang}で記述し、必ずJSON形式のみで返してください。前置きや説明文・コードブロック記号は不要です。${contextBlock}

フレーズ: 「${phrase}」

以下のJSON構造で返してください:
{
  "phrase": "${phrase}",
  "reading": "読み方/읽는 법（不要なら空文字）",
  "lang": "${targetLang}",
  "coreNuance": "核心ニュアンスを2〜3文で",
  "jaContext": "日本語としての文化的背景・使われ方を2〜3文で",
  "koContext": "韓国語との対比・対応表現・相違点を2〜3文で",
  "nuanceTags": ["タグ1", "タグ2"],
  "examples": [
    { "original": "例文1", "translation": "訳1", "note": "ポイント1" },
    { "original": "例文2", "translation": "訳2", "note": "ポイント2" }
  ],
  "nativeTip": "ネイティブのコツ・豆知識",
  "commonMistake": "外国人がよくやる間違いや誤解"
}`;
}
