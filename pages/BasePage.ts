import { Page } from '@playwright/test';
 
export class BasePage {
  protected readonly page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
 
  protected async navigate(path: string = '/'): Promise<void> {
    if (!path.startsWith('/') && !path.startsWith('http')) {
      throw new Error(`navigate() path must start with '/'. Got: "${path}"`);
    }
    await this.page.goto(path);
  }
}
