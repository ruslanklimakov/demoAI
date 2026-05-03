import { BasePage } from './BasePage';
 
export class CheckBoxPage extends BasePage {
  readonly pageTitle = this.page.getByRole('heading', { name: 'Check Box' });
  readonly homeCheckbox = this.page.getByRole('checkbox', { name: 'Select Home' });
  readonly result = this.page.locator('#result');
 
  async selectHome(): Promise<void> {
    await this.homeCheckbox.click();
  }
}