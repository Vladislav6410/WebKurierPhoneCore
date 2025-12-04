// engine/translator/core-client.js

import axios from "axios";

const CORE_API_BASE =
  process.env.WEBKURIER_CORE_API || "http://localhost:8080";

/**
 * Простая обёртка: шлём текст и ISO-язык в Core GPT-эндпоинт.
 */
export async function translateViaCore(text, targetLang, sourceLang = "auto") {
  const url = `${CORE_API_BASE}/api/translator/gpt`;
  const resp = await axios.post(url, {
    text,
    targetLang,
    sourceLang
  });
  return resp.data.translation || "";
}