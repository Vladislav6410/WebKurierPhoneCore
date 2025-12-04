// WebKurierPhoneCore/engine/translator/phonecore-handler.js

import axios from "axios";

// Карта языковых команд в том же стиле, что в WebKurierCore
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

// Базовый URL ядра WebKurierCore
const CORE_API_BASE =
  process.env.WEBKURIER_CORE_API || "http://localhost:8080";

/**
 * Простая обёртка вокруг GPT-эндпоинта ядра:
 *   POST /api/translator/gpt
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

/**
 * Главный обработчик строки от пользователя PhoneCore.
 *
 * Пример:
 *   rawLine = "/spanish Hello everyone"
 *
 * Возвращает:
 *   null                       — если это не переводческая команда;
 *   { kind: "translator-error", message } — если ошибка в использовании;
 *   {
 *     kind: "translator-ok",
 *     langCode: "es",
 *     provider: "GPT",
 *     original: "Hello everyone",
 *     translated: "<перевод>"
 *   }
 */
export async function handlePhoneTranslateCommand(
  rawLine,
  userId = "phone-user"
) {
  if (typeof rawLine !== "string" || !rawLine.startsWith("/")) {
    return null; // не наша команда
  }

  const [first, ...parts] = rawLine.trim().split(" ");
  const cmdName = first.slice(1).toLowerCase(); // убираем '/'
  const text = parts.join(" ");

  if (!isKnownLangCommand(cmdName)) {
    return null; // пусть обработают другие команды
  }

  const targetLang = getLanguageCode(cmdName);

  if (!text) {
    return {
      kind: "translator-error",
      message: `Введите текст после команды, например: /${cmdName} Hello everyone`
    };
  }

  try {
    const translation = await translateViaCore(text, targetLang, "auto");

    return {
      kind: "translator-ok",
      langCode: targetLang,
      provider: "GPT", // PhoneCore всегда ходит в GPT-ветку ядра
      original: text,
      translated: translation
    };
  } catch (err) {
    return {
      kind: "translator-error",
      message: `Ошибка запроса к Core API: ${err.message || err}`
    };
  }
}

// default-экспорт на всякий случай
export default {
  handlePhoneTranslateCommand
};


