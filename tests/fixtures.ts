import { test as base, expect } from '@playwright/test';

const blockedDomains = [
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
];

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/*', async (route) => {
      const url = route.request().url();
      const shouldBlock = blockedDomains.some((domain) => url.includes(domain));

      if (shouldBlock) {
        await route.abort();
        return;
      }

      await route.continue();
    });

    await use(page);
  },
});

export { expect };
