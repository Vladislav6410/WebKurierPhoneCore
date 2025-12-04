// WebKurierPhoneCore/engine/translator/tests/phonecore-translator-runner.js

import "dotenv/config";
import { handlePhoneTranslateCommand } from "../phonecore-handler.js";

async function runOne(label, line) {
  try {
    const res = await handlePhoneTranslateCommand(line, "test-user");
    console.log(`\n[${label}] cmd = ${line}`);

    if (!res) {
      console.log("  → not a translator command (null)");
      return;
    }

    if (res.kind === "translator-error") {
      console.log("  kind: error");
      console.log("  message:", res.message);
      return;
    }

    if (res.kind === "translator-ok") {
      console.log("  kind: ok");
      console.log("  langCode:", res.langCode);
      console.log("  provider:", res.provider);
      console.log("  original:", res.original);
      console.log("  translated:", res.translated);
      return;
    }

    console.log("  kind:", res.kind, "raw:", res);
  } catch (err) {
    console.error("  EXCEPTION:", err);
  }
}

async function main() {
  console.log("=== PhoneCore translator handler test ===");
  console.log("CORE API =", process.env.WEBKURIER_CORE_API || "http://localhost:8080");

  await runOne("not_translator", "/help");
  await runOne("missing_text", "/spanish");
  await runOne("spanish_basic", "/spanish Hello everyone");
  await runOne("russian_basic", "/russian Guten Tag");
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});