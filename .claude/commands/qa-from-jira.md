---
description: Полный QA-флоу для тикета из Jira — от анализа до PR
argument-hint: TICKET-ID (например SCRUM-6)
---

Возьми в работу тикет $ARGUMENTS и проведи полный QA-цикл согласно workflow в CLAUDE.md.

Делай это пошагово, с явным разделением фаз. После каждой фазы кратко отчитывайся
и жди моего подтверждения, прежде чем переходить к следующей. Это важно — я хочу
видеть процесс, а не получить готовый PR в конце.

Фазы:

**Фаза 1 — Requirements analysis**
- Прочитай тикет через atlassian MCP
- Извлеки: summary, description, acceptance criteria, прикреплённые файлы, комментарии
- Проведи критический анализ:
  - Что неоднозначно?
  - Что противоречит другим частям тикета?
  - Что вообще не упомянуто, но критично (security, edge cases, error handling)?
- Сформулируй 3–7 уточняющих вопросов как опытный QA, который НЕ хочет тестировать «на угад»
- Стоп. Жди моих ответов.

**Фаза 2 — Exploratory testing**
- Открой релевантные страницы SUT через playwright MCP
- Исследуй UI: какие поля, какая валидация, какие состояния, какие ошибки
- Делай скриншоты в `exploration/$ARGUMENTS/` (создай папку)
- Запиши заметки в `exploration/$ARGUMENTS/notes.md`
- Кратко отчитайся: что увидел нового, чего не было в требованиях

**Фаза 3 — Risk analysis**
- Создай `risks/$ARGUMENTS.md`
- Категории: Functional, Security, Performance, Accessibility, UX, Data integrity
- Для каждого риска: описание, вероятность (H/M/L), impact (H/M/L), митигация
- Top-3 рисков подсвети явно
- Покажи мне файл

**Фаза 4 — Test cases**
- Создай `test-cases/$ARGUMENTS.md` в Gherkin
- Структура: Feature → несколько Scenario / Scenario Outline
- Покрытие: happy path (P0), negative (P1), boundary (P1), security (P0/P1), accessibility (P2)
- В заголовке каждого сценария — приоритет: `[P0]`, `[P1]`, `[P2]`
- Покажи мне файл

**Фаза 5 — Automation**
- Автоматизируй все P0 и P1 сценарии
- Используй существующие Page Objects из `tests/pages/`, новые создавай только если нужно
- Файл теста: `tests/specs/$ARGUMENTS.spec.ts`
- Запусти тесты: `npx playwright test tests/specs/$ARGUMENTS.spec.ts`
- Если падают — анализируй, чини, перезапускай (макс. 3 итерации)
- Отчитайся: сколько прошло, сколько упало, что не автоматизировал и почему

**Фаза 6 — Git & PR**
- Создай ветку `qa/$ARGUMENTS-short-description`
- Коммиты по conventional commits, разделённые логически (отдельно тест-кейсы, отдельно автотесты)
- Запушь ветку
- Открой PR через github MCP с шаблоном из CLAUDE.md
- В описании укажи: «Awaiting cross-review from Codex»

**Фаза 7 — Jira sync**
- Добавь в тикет $ARGUMENTS комментарий: «QA готов. PR: <ссылка>. Покрытие: ...»
- Переведи статус: вызови `getTransitions` через atlassian MCP, выбери `In Review` если есть, иначе `Done`

Готов? Подтверди, что прочитал инструкцию, и начинай с Фазы 1.
