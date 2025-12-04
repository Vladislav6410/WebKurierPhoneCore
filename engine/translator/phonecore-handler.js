// engine/translator/phonecore-handler.js

import { isKnownLangCommand, getLanguageCode } from "./command-registry.js";
import { translateViaCore } from "./core-client.js";

/**
 * Обработка строки вроде "/spanish Hello everyone" от пользователя.
 * Возвращает либо null (если это не переводческая команда),
 * либо объект с результатом перевода.
 */
export async function handlePhoneTranslateCommand(rawLine, userId = "phone-user") {
  if (typeof rawLine !== "string" || !rawLine.startsWith("/")) {
    return null; // не наша команда
  }

  const [first, ...restParts] = rawLine.trim().split(" ");
  const command = first.slice(1).toLowerCase(); // убираем '/'
  const text = restParts.join(" ");

  if (!isKnownLangCommand(command)) {
    return null; // пусть дальше обрабатывают другие команды
  }

  const targetLang = getLanguageCode(command);
  if (!text) {
    return {
      kind: "translator-error",
      message: "Введите текст после команды, например: /spanish Hello everyone"
    };
  }

  const translation = await translateViaCore(text, targetLang);

  return {
    kind: "translator-ok",
    langCode: targetLang,
    provider: "GPT",         // сейчас phonecore всегда использует GPT-ветку Core
    original: text,
    translated: translation
  };
}