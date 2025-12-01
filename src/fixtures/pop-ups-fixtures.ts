import { test as base } from '@playwright/test';
import { PopUps } from '@components/pop-ups';

type MyFixtures = {
  popups: PopUps;
};

export const test = base.extend<MyFixtures>({
  popups: async ({ page }, use) => {
    const popups = new PopUps(page);

    await use(popups);
  },
});

export { expect } from '@playwright/test';
