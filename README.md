# demoAI — AI-Augmented QA Demo

Этот пакет файлов превращает обычный Playwright-проект в полноценный AI-augmented QA pipeline.

**SUT для демо:** https://demoqa.com/radio-button (и другие страницы demoqa.com по необходимости)

## Что внутри

```
demoAI/
├── CLAUDE.md                       # Главный playbook для Claude Code
├── .mcp.json                       # Подключения к Jira, Playwright, GitHub MCP
├── .claude/
│   ├── commands/
│   │   ├── qa-from-jira.md         # Полный QA-флоу из тикета
│   │   ├── find-test-gaps.md       # AI ищет непокрытое и сам заводит Jira
│   │   ├── explore.md              # AI exploratory testing
│   │   └── triage.md               # Анализ упавших тестов
│   └── agents/
│       ├── qa-analyst.md           # Анализ требований и риски
│       ├── automation-engineer.md  # Написание автотестов
│       └── code-reviewer.md        # Self-review перед PR
├── .github/workflows/qa.yml        # CI с Playwright + AI ревью + AI triage
├── DEMO_SCRIPT.md                  # Сценарий записи демо
└── README.md                       # Этот файл
```

--Install

npm install npx playwright install

## Команды-помощники

### Полный флоу из тикета
```
/qa-from-jira SCRUM-5
```

### AI ищет непокрытое и заводит Jira-тикет
```
/find-test-gaps https://demoqa.com
```

### Только exploratory без формального флоу
```
/explore https://demoqa.com/radio-button
```

### Разобрать упавшие тесты
```
/triage last
```

### Делегировать конкретному агенту
```
@qa-analyst посмотри SCRUM-5 и выдай только риски, без тест-кейсов
``
