# 17. Production & Deployment

The final system is designed as a production-oriented **Marketing Intelligence Platform**, combining automated data pipelines, real-time intelligence, AI analysis, and business dashboards.

---

## 17.1 Production Architecture

```text
                         DATA SOURCES
                              │
                ┌─────────────┼─────────────┐
                │             │             │
             YouTube       TikTok        Web
                │             │             │
                └─────────────┼─────────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │ Apache Airflow  │
                     │   Scheduler     │
                     └────────┬────────┘
                              │
                     ETL / ELT Pipelines
                              │
                              ▼
                     ┌─────────────────┐
                     │   PostgreSQL    │
                     │                 │
                     │ Raw Data        │
                     │ Processed Data  │
                     │ Analytics       │
                     └────────┬────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        ┌───────────────┐           ┌───────────────┐
        │  AI Analysis  │           │   Real-time   │
        │    Agent      │           │    Layer      │
        │               │           │               │
        │ Gemini        │           │ Event / Queue │
        │ LangGraph     │           │ Streaming     │
        └───────┬───────┘           └───────┬───────┘
                │                           │
                └─────────────┬─────────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │    FastAPI      │
                     │   REST API      │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │     Power BI    │
                     │                 │
                     │ Dashboard       │
                     │ KPI             │
                     │ Competitor      │
                     │ Trend           │
                     │ Performance     │
                     └─────────────────┘
```
