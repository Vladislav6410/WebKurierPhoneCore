// WebKurierPhoneCore/engine/translator/phonecore-handler.js

import axios from "axios";

// Карта команд языка (можно импортировать и из отдельного файла при желании)
export const LANGUAGE_COMMANDS = {
  spanish:   "es",
  russian:   "ru",
  french:    "fr",
  arabic:    "ar",
  japanese:  "ja",
  german:    "de",
  english:   "en",
  polish:    "pl",
  ukrainian: "uk",
  italian:   "it",
  chinese:   "zh",
  korean:    "ko"
};

export function getLanguageCode(commandName) {
  if (!commandName) return null;
  const key = commandName.toLowerCase();
  return LANGUAGE_COMMANDS[key] || null;
}

export function isKnownLangCommand(commandName) {
  return !!getLanguageCode(commandName);
}

// URL ядра Core API для GPT-переводов
const CORE_TRANSLATOR_API =
  process.env.WEBKURIER_CORE_API || "http://localhost:8080";

/**
 * Шлём переводческий запрос в Core API (GPT-ветка)
 */
export async function translateViaCore(text, targetLang, sourceLang = "auto") {
  const url = `${CORE_TRANSLATOR_API}/api/translator/gpt`;
  const resp = await axios.post(url, {
    text,
    targetLang,
    sourceLang
  });
  return resp.data.translation || "";
}

/**
 * Главный обработчик PhoneCore:
 *   "/spanish Hello everyone" → распознаём, ходим в Core API GPT, возвращаем перевод
 */
export async function handleTranslatorCommand(rawLine, userId = "phone-user") {
  if (typeof rawLine !== "string" || !rawLine.startsWith("/")) {
    return null;
  }

  const [first, ...parts] = rawLine.trim().split(" ");
  const cmdName = first.slice(1).toLowerCase();
  const text = parts.join(" ");

  if (!isKnownLangCommand(cmdName)) {
    return null;
  }

  const targetLang = getLanguageCode(cmdName);

  if (!text) {
    return {
      kind: "translator-error",
      message: `Text is required. Example