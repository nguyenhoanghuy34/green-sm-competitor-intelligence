# 🟢 Green SM Competitor Intelligence Agent

An AI-powered **Competitor Intelligence Agent** designed to monitor, analyze, and generate actionable marketing insights from competitors in the mobility and ride-hailing market.

---

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-Framework-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-Agent-1C3C3C?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-LLM-4285F4?style=for-the-badge&logo=google&logoColor=white)
![YouTube API](https://img.shields.io/badge/YouTube-Data_API_v3-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white)

---

# 1. System Architecture

The system follows an **AI Agent + Data Pipeline** architecture.

```text
                        ┌─────────────────────────┐
                        │       Data Sources      │
                        │                         │
                        │ YouTube / TikTok / Web  │
                        └────────────┬────────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │    Data Collection      │
                        │                         │
                        │ APIs / Crawlers / ETL   │
                        └────────────┬────────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │     Data Processing     │
                        │                         │
                        │ Cleaning / Normalizing  │
                        │ Deduplication           │
                        └────────────┬────────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │    Feature Extraction   │
                        │                         │
                        │ Topic / Hook / Format   │
                        │ Sentiment / Engagement  │
                        └────────────┬────────────┘
                                     │
                                     ▼
                ┌─────────────────────────────────────┐
                │       Competitor Intelligence        │
                │              Agent                   │
                │                                     │
                │  ┌────────────┐  ┌──────────────┐  │
                │  │   Topic    │  │ Performance  │  │
                │  │  Analysis  │  │   Analysis   │  │
                │  └────────────┘  └──────────────┘  │
                │                                     │
                │  ┌────────────┐  ┌──────────────┐  │
                │  │  Audience  │  │   Campaign   │  │
                │  │ Intelligence│ │   Analysis   │  │
                │  └────────────┘  └──────────────┘  │
                └──────────────────┬──────────────────┘
                                   │
                                   ▼
                        ┌─────────────────────────┐
                        │   Opportunity Detection │
                        │                         │
                        │ Content Gap / Trend /   │
                        │ Competitive Advantage   │
                        └────────────┬────────────┘
                                     │
                                     ▼
                        ┌─────────────────────────┐
                        │ Marketing Recommendation│
                        │                         │
                        │ "What should Green SM   │
                        │       do next?"         │
                        └─────────────────────────┘
```
