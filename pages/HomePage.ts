import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly elementsCard = this.page.locator('.card').filter({ hasText: 'Elements' });
  readonly textBoxMenuItem = this.page.getByRole('link', { name: 'Text Box' });
  readonly checkBoxMenuItem = this.page.getByRole('link', { name: 'Check Box' });
  readonly radioButtonMenuItem = this.page.getByRole('link', { name: 'Radio Button' });

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async openElements(): Promise<void> {
    await this.elementsCard.click();
  }

  async openTextBox(): Promise<void> {
    await this.open();
    await this.openElements();
    await this.textBoxMenuItem.click();
  }

  async openCheckBox(): Promise<void> {
    await this.open();
    await this.openElements();
    await this.checkBoxMenuItem.click();
  }

  async openRadioButton(): Promise<void> {
    await this.open();
    await this.openElements();
    await this.radioButtonMenuItem.click();
  }
}
