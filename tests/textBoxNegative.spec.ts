import { test, expect } from './fixtures';
import { HomePage } from '../pages/HomePage';
import { TextBoxPage } from '../pages/TextBoxPage';
import { invalidEmailTextBoxUser } from '../test-data/textBoxData';

test.describe('Text Box validation', () => {
  test('does not submit form with invalid email', async ({ page }) => {
    const homePage = new HomePage(page);
    const textBoxPage = new TextBoxPage(page);

    await homePage.openTextBox();
    await expect(page).toHaveURL(/text-box/);
    await expect(textBoxPage.pageTitle).toBeVisible();

    await textBoxPage.fillForm(
      invalidEmailTextBoxUser.name,
      invalidEmailTextBoxUser.email,
      invalidEmailTextBoxUser.currentAddress,
      invalidEmailTextBoxUser.permanentAddress,
    );
    await textBoxPage.submit();

    await expect(textBoxPage.emailInput).toHaveClass(/field-error/);
    await expect(textBoxPage.output).toBeHidden();
  });
});
