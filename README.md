# 📘 ENEM.AI — Multi-Agent Educational System

> 📎 [Learn more about the ENEM exam](./about_enem.md)

**ENEM.AI** is a multi-agent autonomous system built using the Agent Development Kit (ADK) and Google Cloud, designed to democratize access to ENEM preparation in Brazil. The system generates personalized study plans, corrects essays, creates interdisciplinary questions, and simulates ENEM-like tests — all powered by intelligent agents working together.

## 🚀 Features

- ✍️ **Essay correction** based on ENEM's 5 competencies with detailed feedback
- 🧪 **Simulated ENEM exams** by area, theme, or difficulty
- 📚 **Automatic generation of essay topics** with motivating texts
- 🎓 **Personalized study paths** based on student performance
- 🎥 **Dynamic content generation**: summaries, flashcards, slides, and more
- 🧩 **Interdisciplinary question generation** aligned with ENEM's standards
- 📈 **Progress tracking dashboard** with detailed reports
- 🗣️ **AI-guided rephrasing** to help students improve their writing
- 📤 **Seamless content delivery** via web interface

## 🧠 Multi-Agent Architecture

| Agent                    | Description                                                 | Technologies                        |
| ------------------------ | ----------------------------------------------------------- | ----------------------------------- |
| `EssayEvaluatorAgent`    | Corrects essays by ENEM criteria, gives feedback and scores | Vertex AI, Cloud Storage            |
| `PromptBuilderAgent`     | Creates ENEM-style essay prompts with contextual texts      | Vertex AI, Document AI              |
| `SimulatedExamAgent`     | Generates customized tests with questions and explanations  | BigQuery, Vertex AI                 |
| `InterdisciplinaryAgent` | Builds complex questions mixing different disciplines       | Vertex AI prompt chaining           |
| `PersonalTutorAgent`     | Analyzes user performance and suggests study paths          | BigQuery                            |
| `ContentGeneratorAgent`  | Generates didactic content: summaries, slides, visuals      | Vertex AI, Imagen, Firebase Storage |
| `RephraserAgent`         | Helps students rewrite essays and answers with guidance     | Vertex AI                           |
| `ProgressTrackerAgent`   | Updates the student's performance dashboard                 | BigQuery, Looker Studio             |
| `DeliveryAgent`          | Organizes and serves the generated content to the UI        | Firebase Hosting / Streamlit        |

## 🗂️ Tech Stack

- **Core:** Agent Development Kit (ADK) — Python
- **AI Models:** Vertex AI LLM, Imagen
- **Data & Storage:** BigQuery, Cloud Storage
- **Document Parsing:** Document AI (for past ENEMs)
- **UI Hosting:** Firebase Hosting or Streamlit
- **Analytics:** Looker Studio for dashboards

## 🗺️ Architecture Diagram

![Architecture Diagram](link-to-pdf-or-image)

## 🎥 Demo Video

👉 [Watch the demo](https://link-to-your-video.com)

## 📂 Repository Structure

```bash
enem-ai/
├── agents/
│   ├── essay_evaluator.py
│   ├── simulated_exam.py
│   ├── personal_tutor.py
│   └── ...
├── orchestrator/
│   └── main_orchestrator.py
├── frontend/
│   └── public/
│   └── src/
│   └── ...
├── data/
│   └── questions_dataset.csv
├── README.md
└── requirements.txt
```

## 👥 Team

- Giovanna Moeller
- Gabriel Valentim
- Hudson Araújo
- Samuel Jabes

## 📜 License

MIT License
