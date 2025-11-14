# WebKurierPhoneCore
AI translator and German A1–C1 course 🇩🇪 with voice, calls, dialogs and tests. Includes fast translation, speech practice and vocabulary trainer. Multilingual menu with flags 🇷🇺 🇺🇦 🇵🇱 🇭🇷 🇩🇪 🇬🇧 🇺🇸 🇳🇱 🇮🇹 🇫🇷 🇵🇹 🇧🇬 🇷🇴 🇳🇴 🇫🇮 🇸🇪 🇭🇺 🇨🇿 🇸🇰 🇸🇮 🇷🇸.Готово! Я добавил в README.md полноценный раздел про подключение GPT-чата / нейросети, чтобы:
	•	мобильное приложение могло использовать GPT-диалоги;
	•	уроки A1–C1 могли генерироваться динамически;
	•	пользователь мог практиковать речь с ИИ-учителем;
	•	можно было переключать модели (OpenAI, local LLM, WebKurierCore-AI);
	•	всё оставалось в будущем совместимым с WebKurierHybrid.


⸻

✅ README.md — обновлено c GPT / AI Chat

⸻

WebKurierPhoneCore

Backend for the AI-powered multilingual translator, German A1–C1 learning system, and GPT-based dialog assistant.

⸻

🇬🇧 English

WebKurierPhoneCore is the backend engine for our mobile translator + German learning platform (A1–C1).
It supports translation, voice dialogs, lessons, speech practice, calls — and now GPT-powered AI teacher.

⸻

✨ Features
	•	AI translator (text, voice, camera)
	•	German A1–C1 lessons (grammar, vocabulary, dialogs, tests)
	•	Speaking practice with AI
	•	Voice calls + speech recognition
	•	Vocabulary trainer with spaced repetition
	•	GPT / AI Chat integration (OpenAI, local LLM, WebKurierCore-AI)
	•	Dynamic lesson generation (AI can create explanations, exercises, dialogs)
	•	Multilingual interface (EN/DE/UA/RU, more coming)
	•	PDF progress reports for Jobcenter
	•	REST API + WebSocket

⸻

🤖 AI Chat / GPT Integration

WebKurierPhoneCore provides a unified adapter to connect any AI model:

Supported Models
	•	OpenAI GPT-4, GPT-5
	•	Local models (Mistral, LLaMA, Gemma) through WebKurierCore
	•	WebKurierCore-AI — internal engine
	•	Custom private models via API

API Endpoints

POST /ai/chat
{
  "model": "gpt-4o-mini",
  "prompt": "Explain Dativ in German with examples"
}

Use Cases
	•	Grammar explanations (A1–C1)
	•	Dialog practice (AI plays the role of teacher)
	•	Correcting user speech or text
	•	Generating personal lessons
	•	Creating vocabulary lists
	•	Preparing Jobcenter-friendly reports

⸻

🔧 Tech Stack
	•	Python / FastAPI
	•	AI Chat Adapter (OpenAI + local LLMs)
	•	WebSocket dialog engine
	•	PostgreSQL + Redis
	•	Docker-ready

⸻

📁 Project Structure

WebKurierPhoneCore/
├── src/
│   ├── api/
│   │   ├── translate.py
│   │   ├── lessons.py
│   │   ├── call.py
│   │   ├── ai_chat.py      <-- GPT / LLM endpoint
│   │   └── auth.py
│   ├── core/
│   │   ├── ai_adapter.py   <-- model routing (GPT, local, WK-AI)
│   │   ├── tts.py
│   │   ├── stt.py
│   │   └── dialog_engine.py
│   └── lessons/
│       └── de_A1/...


⸻

🔗 Integration
	•	WebKurierPhone-iOS (SwiftUI) – full AI support
	•	WebKurierPhone-Android (Jetpack Compose)
	•	WebKurierCore – central auth & AI router
	•	WebKurierHybrid – CI/CD, deployments

⸻

🇷🇺 Русский

WebKurierPhoneCore — это backend-платформа для переводчика, курсов немецкого A1–C1, голосовых звонков и GPT-диалогов с ИИ-учителем.

⸻

✨ Возможности
	•	Переводчик (текст, голос, камера)
	•	Уроки и упражнения A1–C1
	•	Разговорная практика с ИИ
	•	Голосовые звонки
	•	Интервальные тренировки слов
	•	Поддержка GPT и любых нейросетей
	•	Генерация уроков и объяснений через ИИ
	•	Мультиязычное меню EN/DE/UA/RU
	•	API + WebSocket

⸻

🤖 Интеграция GPT / Нейросети

Система подключает любые модели через единый адаптер:

Поддерживаемые модели
	•	OpenAI GPT-4 / GPT-5
	•	Локальные модели (Mistral, LLaMA, Gemma)
	•	WebKurierCore-AI (внутренний ИИ)
	•	Частные модели через API

Примеры использования
	•	объяснение грамматики
	•	генерация диалогов
	•	исправление произношения
	•	создание персональных уроков
	•	объяснение ошибок
	•	чат-репетитор 24/7

⸻

🚀 Установка

git clone https://github.com/<yourname>/WebKurierPhoneCore
cd WebKurierPhoneCore
pip install -r requirements.txt
uvicorn src.main:app --reload


⸻

🌍 Supported Languages
	•	🇬🇧 English
	•	🇩🇪 Deutsch
	•	🇺🇦 Українська
	•	🇷🇺 Русский

Next wave: 🇵🇱 🇭🇷 🇳🇱 🇮🇹 🇫🇷 🇵🇹 🇧🇬 🇷🇴 🇳🇴 🇫🇮 🇸🇪 🇭🇺 🇨🇿 🇸🇰 🇸🇮 🇷🇸 🇺🇸

⸻

📦 License

© 2025 Vladyslav Hushchyn — WebKurier Project.

⸻


