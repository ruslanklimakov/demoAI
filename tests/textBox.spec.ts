import { test, expect } from './fixtures';
import { HomePage } from '../pages/HomePage';
import { TextBoxPage } from '../pages/TextBoxPage';
import { validTextBoxUser } from '../test-data/textBoxData';

test.describe('Text Box', () => {
  test('submits filled form and shows entered values', async ({ page }) => {
    const homePage = new HomePage(page);
    const textBoxPage = new TextBoxPage(page);

    await homePage.openTextBox();
    await expect(page).toHaveURL(/text-box/);
    await expect(textBoxPage.pageTitle).toBeVisible();

    await textBoxPage.fillForm(
      validTextBoxUser.name,
      validTextBoxUser.email,
      validTextBoxUser.currentAddress,
      validTextBoxUser.permanentAddress,
    );
    await textBoxPage.submit();

    await expect(textBoxPage.nameOut).toContainText(validTextBoxUser.name);
    await expect(textBoxPage.emailOut).toContainText(validTextBoxUser.email);
    await expect(textBoxPage.currentAddressOut).toContainText(validTextBoxUser.currentAddress);
    await expect(textBoxPage.permanentAddressOut).toContainText(validTextBoxUser.permanentAddress);
  });
});
