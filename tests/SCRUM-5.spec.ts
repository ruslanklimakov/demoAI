import { test, expect } from './fixtures';
import { RadioButtonPage } from '../pages/RadioButtonPage';

test.describe('Radio Button', () => {
  let radioPage: RadioButtonPage;

  test.beforeEach(async ({ page }) => {
    radioPage = new RadioButtonPage(page);
    await radioPage.open();
  });

  test('[P0] should show no selection and no result text when page first loads', async () => {
    await expect(radioPage.yesRadio).not.toBeChecked();
    await expect(radioPage.impressiveRadio).not.toBeChecked();
    await expect(radioPage.resultText).not.toBeVisible();
  });

  test('[P0] should check Yes and show confirmation text when Yes is selected', async () => {
    await radioPage.selectYes();

    await expect(radioPage.yesRadio).toBeChecked();
    await expect(radioPage.resultText).toBeVisible();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');
  });

  test('[P0] should check Impressive and show confirmation text when Impressive is selected', async () => {
    await radioPage.selectImpressive();

    await expect(radioPage.impressiveRadio).toBeChecked();
    await expect(radioPage.resultText).toBeVisible();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
  });

  test('[P1] should deselect Yes when Impressive is selected after Yes', async () => {
    await radioPage.selectYes();
    await radioPage.selectImpressive();

    await expect(radioPage.impressiveRadio).toBeChecked();
    await expect(radioPage.yesRadio).not.toBeChecked();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
  });

  test('[P1] should deselect Impressive when Yes is selected after Impressive', async () => {
    await radioPage.selectImpressive();
    await radioPage.selectYes();

    await expect(radioPage.yesRadio).toBeChecked();
    await expect(radioPage.impressiveRadio).not.toBeChecked();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');
  });

  test('[P1] should be visible but permanently disabled when No radio button is rendered', async () => {
    await expect(radioPage.noRadio).toBeVisible();
    await expect(radioPage.noRadio).toBeDisabled();
  });

  test('[P1] should replace result text with new selection when switching between options', async () => {
    await radioPage.selectYes();
    await expect(radioPage.resultText).toHaveText('You have selected Yes');

    await radioPage.selectImpressive();
    await expect(radioPage.resultText).toHaveText('You have selected Impressive');
    await expect(radioPage.resultText).not.toHaveText('You have selected Yes');
  });
});
