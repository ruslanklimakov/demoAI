---
description: AI exploratory testing — свободное исследование сайта на риски и баги
argument-hint: URL или название страницы
---

Проведи exploratory testing для $ARGUMENTS. Действуй как опытный QA, который видит
приложение впервые и ищет всё, что может сломаться или работать не так, как ожидается.

Используй playwright MCP. Метод — **тур-тестирование** (по James Whittaker):

1. **Feature tour** — пройди основные функции страницы, отметь что работает
2. **Money tour** — найди все элементы, связанные с деньгами / транзакциями / критичными действиями
3. **Bad neighborhood tour** — найди подозрительные места: формы без валидации, длинные текстовые поля, загрузка файлов, переключение языков
4. **Saboteur tour** — попробуй сломать: пустые поля, очень длинные строки, спецсимволы, эмодзи, SQL-injection-like (`' OR 1=1--`), XSS-like (`<script>alert(1)</script>`), unicode (`你好`, RTL-текст)
5. **Configuration tour** — проверь поведение в разных viewport (mobile 375×667, tablet 768×1024, desktop 1920×1080)

Для каждого найденного потенциального бага или риска:
- Скриншот в `exploration/{slug}/issue-N.png`
- Запись в `exploration/{slug}/findings.md` с шагами воспроизведения

В конце выдай краткий отчёт:
- N findings, разделённые на: confirmed bugs / suspicious behavior / missing features / accessibility issues
- Топ-3 что я бы немедленно завёл в Jira
