# WebKurierPhoneCore

Backend for the AI-powered multilingual translator, German A1–C1 learning system, and GPT-based dialog assistant with **live AI agents in calls**.

Part of the **WebKurierHybrid** ecosystem (Core + Drone + Security + Chain + Phone + Bot).

---

## 🇬🇧 English

**WebKurierPhoneCore** is the backend engine for our mobile translator and German learning platform (A1–C1). It powers:

- Real-time translation (text / voice / photo OCR)
- AI voice calls with instant interpretation (REST + WebSocket)
- GPT dialog assistant (chat + speaking mode)
- German A1–C1 lessons with audio, pictures and videos
- Vocabulary trainer + spaced repetition (SRS)
- Pronunciation practice with STT/TTS
- User progress tracking
- Multilingual interface (25+ languages with flags)

### AI Agents (Calls, Chat & Learning)

Core mobile agents:
- `TranslatorAgent` — real-time text/voice translation, auto-language detect  
- `VoiceAgent` — VoIP + STT/TTS pipeline  
- `CallAgent` — call orchestration & routing  
- `GPTDialogAgent` — GPT chat + speaking mode  
- `LessonsAgent` — A1–C1 lessons, tasks, exams  
- `ProgressAgent` — stats, vocabulary, SRS

Expert & conversational agents (activated per topic/user choice):
- Legal / Business / Accountant / Marketing / Medical / Math / Physics agents  
- Learning personas: `TeacherAgent`, `FriendlyChatAgent`, `RoleplayAgent`,  
  `CasualPartnerAgent`, `RomanticAgent` (romantic dialog for language practice)

### API Overview (short)

- Translation  
  `POST /translate` — `{ "from": "auto", "to": "de", "text": "Hello" }`

- Calls  
  `POST /call/start` · `POST /call/stop` · `WS /call/live`

- Lessons  
  `GET /lessons/{level}` · `GET /lessons/{level}/{id}`

- Vocabulary & Progress  
  `GET /user/progress` · `POST /user/word/save`

### Architecture (high-level)

- `src/api/` — translate, call, lessons, GPT/chat, agents routing  
- `src/core/` — TTS, STT, translator, call engine, GPT engine, agents  
- `lessons/` — JSON lessons A1–C1  
- `docker/` — Docker & deployment files

### Docker

```yaml
version: "3.9"
services:
  phonecore:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - ./lessons:/app/lessons
    environment:
      OPENAI_KEY: ${OPENAI_KEY}
      TRANSLATE_API: ${TRANSLATE_API}

Start:

docker compose up --build

Integrations
	•	WebKurierPhone-iOS / WebKurierPhone-Android (mobile apps)
	•	Telegram & WhatsApp bots
	•	WebKurierCore (web UI, terminal, agents)
	•	WebKurierChain (logins, encrypted data)
	•	WebKurierSecurity (GDPR, security layer)
	•	WebKurierHybrid (orchestrator repository, uses PhoneCore as submodule)

⸻

🇷🇺 Русский

WebKurierPhoneCore — серверная платформа для мобильного переводчика и системы обучения немецкому (A1–C1) с поддержкой живых звонков с AI-агентами.

Функции:
	•	Мгновенный перевод текста и голоса (включая перевод фото через OCR)
	•	Звонки с AI-переводчиком и экспертными агентами (REST + WebSocket)
	•	GPT-чат и голосовой ассистент
	•	Курсы немецкого A1–C1 с аудио, картинками и видео
	•	Тренажёр словаря + интервальные повторы (SRS)
	•	Тренировка произношения (STT/TTS)
	•	Учёт прогресса пользователя
	•	Многоязычное меню (25+ языков с флагами)

Агенты (звонки, чат, обучение)

Базовые агенты ядра:
	•	TranslatorAgent — перевод текста/голоса в реальном времени
	•	VoiceAgent — голосовой движок, STT/TTS
	•	CallAgent — управление звонками и конференциями
	•	GPTDialogAgent — диалоговый ассистент (чат + голос)
	•	LessonsAgent — уроки A1–C1, упражнения, экзамены
	•	ProgressAgent — прогресс, словарь, повторы

Профессиональные и обучающие агенты (по выбору пользователя):
	•	Юрист, бизнес, бухгалтер, маркетинг, медицина, математика, физика
	•	Персоналии: TeacherAgent, FriendlyChatAgent, RoleplayAgent,
CasualPartnerAgent, RomanticAgent (романтический собеседник для практики языка)

Краткий обзор API
	•	Перевод: POST /translate
	•	Звонки: POST /call/start, POST /call/stop, WS /call/live
	•	Уроки: GET /lessons/{level}, GET /lessons/{level}/{id}
	•	Словарь/прогресс: GET /user/progress, POST /user/word/save

Архитектура (в общих чертах)
	•	src/api/ — REST/WebSocket-эндпоинты
	•	src/core/ — движки TTS/STT, перевод, звонки, GPT, агенты
	•	lessons/ — уроки A1–C1 в формате JSON
	•	docker/ — файлы для развёртывания

Интеграции и экосистема
	•	Клиенты: iOS / Android приложения, боты Telegram/WhatsApp
	•	Связь с репозиториями: WebKurierCore, WebKurierChain, WebKurierSecurity
	•	Используется как модуль в WebKurierHybrid (единый оркестратор проекта)

⸻

Status: v0.1 (foundation ready), produced & developed in Germany.
Languages: EN / DE / UA / RU (expandable to 25+).
Apps: iOS + Android (native).

---

## 2. Структура папок и агентов (НЕ в README, а для работы в репо)

Эта часть — чисто рабочее ТЗ для проекта, её можно положить в `docs/architecture_agents.md` или в issues.

### 2.1. Минимальная структура репозитория

```text
WebKurierPhoneCore/
├── src/
│   ├── api/
│   │   ├── translate.py      # /translate
│   │   ├── call.py           # /call/start, /call/stop, WS /call/live
│   │   ├── lessons.py        # /lessons/*
│   │   ├── gpt.py            # /chat/gpt (общий GPT-чат)
│   │   └── agents.py         # /agents/chat, /agents/list, /agents/status
│   ├── core/
│   │   ├── tts/              # движок синтеза речи
│   │   ├── stt/              # распознавание речи
│   │   ├── translator/       # логика перевода
│   │   ├── call_engine/      # маршрутизация аудио, WebSocket
│   │   ├── gpt_engine/       # вызовы LLM
│   │   └── agents/           # все AI-агенты
│   ├── models/
│   └── utils/
├── lessons/
│   ├── A1/
│   ├── A2/
│   ├── B1/
│   ├── B2/
│   └── C1/
└── docker/
    └── docker-compose.yml

2.2. Папка src/core/agents/ (поэтапное наполнение)

src/core/agents/
├── __init__.py              # BaseAgent + registry
├── translator_agent.py      # TranslatorAgent
├── voice_agent.py           # VoiceAgent
├── call_agent.py            # CallAgent
├── gpt_dialog_agent.py      # GPTDialogAgent
├── lessons_agent.py         # LessonsAgent
├── progress_agent.py        # ProgressAgent
├── legal_agent.py           # LegalAgent
├── business_agent.py        # BusinessAgent
├── accountant_agent.py      # AccountantAgent
├── marketing_agent.py       # MarketingAgent
├── medical_agent.py         # MedicalAgent
├── math_agent.py            # MathAgent
├── physics_agent.py         # PhysicsAgent
├── teacher_agent.py         # TeacherAgent
├── friendly_chat_agent.py   # FriendlyChatAgent
├── roleplay_agent.py        # RoleplayAgent
├── casual_partner_agent.py  # CasualPartnerAgent
└── romantic_agent.py        # RomanticAgent

Заполнять можно постепенно:
	1.	Сначала translator_agent, voice_agent, call_agent, gpt_dialog_agent.
	2.	Затем lessons_agent, progress_agent.
	3.	Потом экспертные (legal, business, medical …).
	4.	В конце — “персональности” (romantic, teacher, rol


