# WebKurierPhoneCore — Communication, Translation & Real-Time Interaction Hub

**WebKurierPhoneCore** is the primary communication and human-interaction hub of the WebKurier ecosystem.  
It powers translation, voice processing, phone calls, language lessons, emotional dialogue agents, real-time subtitles, DreamMaker media generation, marketing outreach, and the user-facing WebCoin wallet.

PhoneCore enables:
- Global, multilingual communication
- Voice calls with live translation
- File, image, and document translation
- A1–C1 learning modules
- Romantic & emotional assistance
- HR candidate evaluation
- Marketing broadcasts and analytics
- Cafe/menu/booking conversational flows
- Memory-based personalized experiences
- WebCoin + rewards UI
- Bot backends (Telegram, WhatsApp, WebChat)

This repository acts as the **human-side intelligence hub** for all apps, bots, and interaction layers.

---

# 1. Role in the Ecosystem (Hierarchy Level 2)

```text
Level 0 — WebKurierHybrid (orchestrator)
Level 1 — WebKurierCore (gateway, terminal, council)
Level 2 — WebKurierPhoneCore (THIS REPOSITORY)
Level 2 — WebKurierVehicleHub
Level 2 — WebKurierChain
Level 2 — WebKurierSecurity
Level 3 — iOS / Android apps
Level 4 — Public site
Level 5 — Future/X Labs

Routing examples:

Translation request

User → Core → PhoneCore.translator → Core → User

Call with live subtitles

User device → PhoneCore.voice → PhoneCore.translator → Core → Device

Romantic dialogue

User → Core → PhoneCore.romantic → Core

Marketing broadcast

Core → PhoneCore.marketing → Bots/Mobile


⸻

2. Repository Structure (High-Level)

WebKurierPhoneCore/
├── engine/
│   ├── translator/
│   │   ├── translator-core.html
│   │   ├── translator-agent.js
│   │   ├── libretranslate.js
│   │   ├── translator-ui.html
│   │   └── ui/
│   │       ├── interface.js
│   │       ├── voice.js
│   │       └── file-handler.js
│   ├── voice/
│   │   ├── voice-core.html
│   │   ├── voice-agent.js
│   │   └── codecs/
│   ├── phone/
│   │   ├── phone-core.html
│   │   ├── phone-agent.js
│   │   ├── call-api.js
│   │   └── webrtc/
│   ├── lessons/
│   │   ├── lessons-core.html
│   │   ├── lessons-agent.js
│   │   ├── data/
│   │   └── ui/
│   ├── romantic/
│   │   ├── romantic-core.html
│   │   └── romantic-agent.js
│   ├── memory/
│   │   ├── memory-core.html
│   │   └── memory-agent.js
│   ├── hr/
│   │   ├── hr-core.html
│   │   └── hr-agent.js
│   ├── marketing/
│   │   ├── marketing-core.html
│   │   └── marketing-agent.js
│   ├── cafe/
│   │   ├── cafe-core.html
│   │   └── cafe-agent.js
│   ├── wallet/
│   │   ├── wallet-core.html
│   │   ├── wallet-agent.js
│   │   ├── wallet-ui.js
│   │   └── rewards.js
│   ├── dream/
│   │   ├── dream-core.html
│   │   └── dream-agent.js
│   ├── api/
│   │   ├── phonecore_rest.py
│   │   ├── phonecore_ws.py
│   │   └── integrations/
│   ├── config/
│   │   ├── languages.json
│   │   ├── translator-profiles.json
│   │   ├── call-settings.json
│   │   └── wallet-settings.json
│   └── utils/
│       ├── stt_tts_adapter.py
│       ├── language_detect.py
│       └── audio_helpers.py
├── bots/
│   ├── telegram/
│   └── whatsapp/
└── docs/
    └── *.md


⸻

3. Core Responsibilities

3.1. Translation Engine (Text/Voice/Documents)
	•	Multilingual translation (all world languages)
	•	Auto language detection
	•	File/document/image translation
	•	Real-time subtitles
	•	Dual-language mode for chats and calls
	•	Multiple engines:
	•	LibreTranslate
	•	GPT
	•	Google Translate
	•	Local dictionary
	•	SQLite storage

3.2. Voice Engine (TTS/STT)
	•	Real-time speech-to-text
	•	Text-to-speech synthesis
	•	Voice messaging and reading
	•	Call subtitles and bilingual transcription

3.3. IP-Telephony & WebRTC
	•	Voice calls between users
	•	Call routing via PhoneCore
	•	Live translations
	•	Audio codecs, echo cancellation, QoS
	•	Phone UI for iOS/Android integration

3.4. Lessons A1–C1
	•	Structured multilingual learning
	•	Grammar tests
	•	Conversation scenarios
	•	Listening/reading tasks
	•	Teacher-mode (AI instructor)

3.5. Emotional & Social Interaction
	•	Romantic assistant (empathetic dialogues)
	•	HR agent (CV parsing, job matching)
	•	Marketing agent (campaigns, statistics)
	•	Cafe agent (menu, orders, bookings)

3.6. Memory Engine
	•	Long-term personalized memory
	•	Context reconstruction
	•	Recall of previous dialogues

3.7. DreamMaker Media Engine
	•	Generating photo/video/audio on request
	•	Integrated with bots and mobile apps
	•	File export

3.8. WebCoin Wallet (UI-Level)
	•	Balance viewer
	•	Rewards and gamification
	•	User-level (not blockchain layer)
	•	Chain integration for transactions

3.9. Bots (Telegram/WhatsApp/WebChat)

PhoneCore is the backend for all communication bots:
	•	translation modes
	•	voice-to-text
	•	lesson sessions
	•	cafe flows
	•	DreamMaker
	•	romantic dialogue modes

⸻

4. Cross-Repository Interaction

With WebKurierCore

Core delegates all communication-related tasks:

Core → PhoneCore.translator
Core → PhoneCore.voice
Core → PhoneCore.lessons
Core → PhoneCore.romantic
Core → PhoneCore.marketing
Core → PhoneCore.wallet

With WebKurierVehicleHub

PhoneCore provides:
	•	real-time translation for pilots
	•	spoken warnings during missions
	•	call-based remote support

With WebKurierChain
	•	WebCoin debit/credit
	•	blockchain integrity for lessons and paid calls

With WebKurierSecurity
	•	scanning of user-uploaded files
	•	anti-phishing logic for bot conversations

⸻

5. CI/CD Policy

Builds controlled by Hybrid:
	•	Python pipelines (API)
	•	Node bundles (UI for lessons/translator)
	•	Telephony/WebRTC dependencies
	•	Mobile compatibility layers
	•	Secrets isolated in Hybrid only

⸻

6. Agent Glossary (EN + RU translations only)

TranslatorAgent — Переводчик
VoiceAgent — Голосовой ассистент
PhoneAgent — Телефония
LessonsAgent — Уроки A1–C1
RomanticAgent — Романтический собеседник
MemoryAgent — Память
DreamAgent — Генератор медиа
CafeAgent — Агент кафе/меню/заказов
WalletAgent — Кошелёк WebCoin
MarketingAgent — Маркетолог
HRAgent — HR-агент (анализ резюме)


⸻

7. Governance

WebKurierPhoneCore is designed and maintained by
Vladyslav Hushchyn (VladoExport)
Germany, EU.

⸻


