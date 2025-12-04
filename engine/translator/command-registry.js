// engine/translator/command-registry.js

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