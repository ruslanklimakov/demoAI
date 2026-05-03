import { test, expect } from './fixtures';
import { HomePage } from '../pages/HomePage';
import { CheckBoxPage } from '../pages/CheckBoxPage';
 
test.describe('Check Box', () => {
  test('selecting Home marks all child items', async ({ page }) => {
    const homePage = new HomePage(page);
    const checkBoxPage = new CheckBoxPage(page);
 
    await homePage.openCheckBox();
    await expect(page).toHaveURL(/checkbox/);
    await expect(checkBoxPage.pageTitle).toBeVisible();
 
    await checkBoxPage.selectHome();
 
    await expect(checkBoxPage.homeCheckbox).toBeChecked();
    await expect(checkBoxPage.result).toContainText('home');
    await expect(checkBoxPage.result).toContainText('desktop');
    await expect(checkBoxPage.result).toContainText('documents');
    await expect(checkBoxPage.result).toContainText('downloads');
    await expect(checkBoxPage.result).toContainText('wordFile');
    await expect(checkBoxPage.result).toContainText('excelFile');
  });
});
 