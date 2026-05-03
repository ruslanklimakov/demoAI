import { test, expect } from './fixtures';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test.describe('Radio Button', () => {
  let radioPage: RadioButtonPage;

  test.beforeEach(async ({ page }) => {
    radioPage = new RadioButtonPage(page);
    await radioPage.open();
  });

  // P0 — начальное состояние
  test('[P0] initial state — no button selected, no result text', async () => {
    await expect(radioPage.yesRadio).not.toBeChecked();
    await expect(radioPage.impressiveRadio).not.toBeChecked();
    await expect(radioPage.resultText).not.toBeVisible();
  });

  // P0 — выбор Yes
  test('[P0] selecting Yes checks Yes and shows confirmation text', async () => {
    await radioPage.selectYes();

    await expect(radioPage.yesRadio).toBeChecked();
    await expect(radioPage.resultText).toBeVisible();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');
  });

  // P0 — выбор Impressive
  test('[P0] selecting Impressive checks Impressive and shows confirmation text', async () => {
    await radioPage.selectImpressive();

    await expect(radioPage.impressiveRadio).toBeChecked();
    await expect(radioPage.resultText).toBeVisible();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
  });

  // P1 — взаимоисключаемость: Yes → Impressive
  test('[P1] selecting Impressive after Yes deselects Yes', async () => {
    await radioPage.selectYes();
    await radioPage.selectImpressive();

    await expect(radioPage.impressiveRadio).toBeChecked();
    await expect(radioPage.yesRadio).not.toBeChecked();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
  });

  // P1 — взаимоисключаемость: Impressive → Yes
  test('[P1] selecting Yes after Impressive deselects Impressive', async () => {
    await radioPage.selectImpressive();
    await radioPage.selectYes();

    await expect(radioPage.yesRadio).toBeChecked();
    await expect(radioPage.impressiveRadio).not.toBeChecked();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');
  });

  // P1 — баг: No disabled
  test('[P1] BUG: No radio button is present but permanently disabled', async () => {
    await expect(radioPage.noRadio).toBeVisible();
    await expect(radioPage.noRadio).toBeDisabled();
  });

  // P1 — текст обновляется при смене выбора
  test('[P1] result text updates when switching selection', async () => {
    await radioPage.selectYes();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');

    await radioPage.selectImpressive();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
  });
});
