import { BasePage } from './BasePage';

export class TextBoxPage extends BasePage {
  readonly pageTitle = this.page.getByRole('heading', { name: 'Text Box' });
  readonly fullNameInput = this.page.locator('#userName');
  readonly emailInput = this.page.locator('#userEmail');
  readonly currentAddressInput = this.page.locator('#currentAddress');
  readonly permanentAddressInput = this.page.locator('#permanentAddress');
  readonly submitButton = this.page.locator('#submit');
  readonly nameOut = this.page.locator('#name');
  readonly emailOut = this.page.locator('#email');
  readonly currentAddressOut = this.page.locator('#currentAddress.mb-1');
  readonly permanentAddressOut = this.page.locator('#permanentAddress.mb-1');
  readonly output = this.page.locator('#output');

  async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async submit(): Promise<void> {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }
}
