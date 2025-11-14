# WebKurierPhoneCore

Backend for the AI-powered multilingual translator, German A1–C1 learning system, and GPT-based dialog assistant.
Supports fast translation, real-time calls, speech dialogs, lessons, tests, vocabulary trainer, and WhatsApp/Telegram integration.

🌍 Multilingual Description

(EN/DE/UA/RU)

⸻

🇬🇧 English

WebKurierPhoneCore is the backend engine for our mobile translator + German learning platform (A1–C1).
It includes:
	•	Real-time translation (text/voice)
	•	AI voice calls with instant interpretation
	•	GPT dialog assistant (chat + speaking)
	•	German A1–C1 lessons with audio, images, videos
	•	Vocabulary trainer + spaced repetition (SRS)
	•	Pronunciation practice
	•	User progress tracking
	•	Multilingual interface with flags
🇬🇧 🇺🇸 🇩🇪 🇺🇦 🇷🇺 🇵🇱 🇭🇷 🇫🇷 🇮🇹 🇪🇸 🇵🇹 🇸🇪 🇳🇴 🇫🇮 🇩🇰 🇳🇱 🇨🇿 🇸🇰 🇸🇮 🇷🇴 🇧🇬 🇭🇺 🇷🇸

Works via REST API + WebSocket for live calls.

⸻

🇩🇪 Deutsch

WebKurierPhoneCore ist die Backend-Plattform für unseren mobilen Übersetzer und das Deutsch-Lernsystem (A1–C1).
Enthält:
	•	Echtzeit-Übersetzung (Text/Stimme)
	•	KI-Telefonie mit Sofort-Dolmetscher
	•	GPT-Dialogassistent
	•	Deutschkurse A1–C1 mit Audio, Bildern und Videos
	•	Vokabeltrainer + Tests
	•	Aussprachetraining
	•	Fortschrittsanalyse
	•	Mehrsprachiges Menü mit Flaggen

⸻

🇺🇦 Українська

WebKurierPhoneCore — це бекенд для мобільного перекладача та системи навчання німецької мови (A1–C1).

Функції:
	•	Переклад у реальному часі
	•	Голосові дзвінки з AI-перекладом
	•	GPT-чат і голосовий асистент
	•	Курси німецької A1–C1 з відео й аудіо
	•	Тести, вправи, словник
	•	Тренування вимови
	•	Підтримка багатьох мов

⸻

🇷🇺 Русский

WebKurierPhoneCore — серверная часть мобильного переводчика и системы обучения немецкому A1–C1.

Возможности:
	•	Мгновенный перевод текста и голоса
	•	Звонки с AI-переводчиком
	•	GPT-чат и голосовой ассистент
	•	Немецкий A1–C1 с уроками, видео, картинками
	•	Лексика, тесты, тренировка произношения
	•	Многоязычное меню с флагами

⸻

🚀 Features

🔊 AI Translator
	•	Text → Text
	•	Voice → Voice
	•	Photo translation (OCR)
	•	Auto-language detection

📞 AI Call Assistant
	•	Real-time interpreter during a phone call
	•	WebSocket low latency
	•	Supports WhatsApp, Telegram, native dialer

🎓 German A1–C1 Course
	•	Lessons (audio, text, pictures, dialogues)
	•	Grammar blocks
	•	Vocabulary lists
	•	Exercises + tests
	•	Speaking practice via microphone
	•	Automatic exam preparation (DTZ, TELC, Goethe)

Lessons stored as:

/lessons/A1/01_introduction.json
/lessons/A1/02_alphabet.json
/lessons/B1/...
/lessons/C1/...

🤖 GPT / AI Chat
	•	ChatGPT-style conversation
	•	Task assistance
	•	Correction of pronunciation & grammar
	•	Speaking roleplay dialogs

API:

POST /chat/gpt


⸻

📡 API Overview

Translation

POST /translate
{
  "from": "auto",
  "to": "de",
  "text": "Hello"
}

Voice Call

POST /call/start
POST /call/stop
WS  /call/live

Lessons

GET /lessons/A1
GET /lessons/A1/01

Vocabulary / Progress

GET /user/progress
POST /user/word/save


⸻

🏗 Architecture

WebKurierPhoneCore
│
├── src/
│   ├── api/
│   │   ├── translate.py
│   │   ├── call.py
│   │   ├── lessons.py
│   │   ├── gpt.py
│   ├── core/
│   │   ├── tts/
│   │   ├── stt/
│   │   ├── translator/
│   │   ├── call_engine/
│   │   └── gpt_engine/
│   ├── models/
│   └── utils/
│
├── lessons/
│   ├── A1/
│   ├── A2/
│   ├── B1/
│   ├── B2/
│   ├── C1/
│
└── docker/


⸻

🐳 Docker

version: "3.9"
services:
  phonecore:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - ./lessons:/app/lessons
    environment:
      OPENAI_KEY=${OPENAI_KEY}
      TRANSLATE_API=${TRANSLATE_API}

Старт:

docker compose up --build


⸻

🔗 Integrations
	•	Telegram bot
	•	WhatsApp bot
	•	WebKurierCore
	•	WebKurierPhone-iOS
	•	WebKurierPhone-Android
	•	WebKurierChain (логины, хранение данных)
	•	WebKurierSecurity (GDPR, шифрование)

⸻

🏁 Status

Version: v0.1 (foundation is ready)
Languages: EN / DE / UA / RU (expandable to 25+)
Apps: iOS + Android (native)

⸻


