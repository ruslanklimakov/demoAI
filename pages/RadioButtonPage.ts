import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  readonly pageTitle = this.page.getByRole('heading', { name: 'Radio Button' });
  readonly yesRadio = this.page.getByRole('radio', { name: 'Yes' });
  readonly impressiveRadio = this.page.getByRole('radio', { name: 'Impressive' });
  readonly noRadio = this.page.getByRole('radio', { name: 'No' });
  readonly resultText = this.page.locator('.mt-3');

  async open(): Promise<void> {
    await this.navigate('/radio-button');
  }

  async selectYes(): Promise<void> {
    await this.yesRadio.click();
  }

  async selectImpressive(): Promise<void> {
    await this.impressiveRadio.click();
  }
}
