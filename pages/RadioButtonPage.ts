import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  readonly pageTitle = this.page.getByRole('heading', { name: 'Radio Button' });
  readonly yesRadio = this.page.getByRole('radio', { name: 'Yes' });
  readonly impressiveRadio = this.page.getByRole('radio', { name: 'Impressive' });
  // noRadio is intentionally read-only — it is permanently disabled on demoqa (known bug)
  readonly noRadio = this.page.getByRole('radio', { name: 'No' });
  readonly resultText = this.page.getByText(/You have selected/);

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
