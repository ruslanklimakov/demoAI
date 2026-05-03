# Exploratory Testing — SCRUM-5: Radio Button
**URL:** https://demoqa.com/radio-button  
**Date:** 2026-05-03  
**Tester:** Claude (AI QA Agent)

---

## UI Structure

- Page heading: "Radio Button" (h1)
- Question label: "Do you like the site?"
- Radio group contains 3 options: **Yes**, **Impressive**, **No**
- The actual `<input type="radio">` elements are visually hidden; interaction occurs via the `<label>` wrapper
- Below the radio group: a result text area (empty on load)

### DOM selectors observed (Playwright accessibility tree)
- `getByRole('radio', { name: 'Yes' })` — clickable
- `getByRole('radio', { name: 'Impressive' })` — clickable
- `radio "No" [disabled]` — disabled attribute present, no interaction possible

---

## Observed Behaviors

### Initial state
- No radio is selected
- No result text visible
- Screenshot: `01-initial-state.png`

### Click "Yes"
- Yes radio becomes checked (blue filled circle)
- Text appears below: **"You have selected Yes"** — "Yes" is rendered in green/teal bold
- Screenshot: `02-yes-selected.png`

### Click "Impressive" (after Yes was selected)
- Impressive radio becomes checked
- **Yes is automatically deselected** (mutual exclusivity works correctly)
- Text changes to: **"You have selected Impressive"** — "Impressive" in green/teal bold
- Screenshot: `03-impressive-selected-yes-deselected.png`

### "No" button
- Rendered as grayed out (visually lighter)
- `disabled` attribute is present in the DOM
- Cannot be clicked — no interaction, no result text
- **This is a BUG** (confirmed by reporter): the button exists in the UI but is permanently non-functional

---

## Findings NOT in the ticket

1. **Confirmation text color**: The selected value in "You have selected X" is styled in a green/teal color (`#2cbe4e` approximately). Not documented in ticket — needs to be verified in tests.
2. **No initial selection**: On page load, none of the three buttons is pre-selected. This is expected standard behavior but worth a test case.
3. **Radio cannot be deselected**: Once any radio is selected, it cannot be unchecked by clicking it again (standard HTML radio behavior). No deselect scenario needed.
4. **Console errors**: 6 JS errors + 3 warnings on page load — all appear to be ad-iframe related, not functional. Does not affect radio behavior.
5. **Ads on the page**: Two large ad banners (iframes) are present and may shift layout. Tests should avoid depending on viewport scroll position around ads.

---

## Screenshots
| File | Description |
|------|-------------|
| `01-initial-state.png` | Page on load, nothing selected |
| `02-yes-selected.png` | "Yes" selected, confirmation text visible |
| `03-impressive-selected-yes-deselected.png` | "Impressive" selected, "Yes" auto-deselected |
