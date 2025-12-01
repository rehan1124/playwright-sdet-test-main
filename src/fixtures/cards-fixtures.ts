import { test as base } from '@playwright/test';
import { Cards } from '@components/cards';

type MyFixtures = {
  cards: Cards;
};

export const test = base.extend<MyFixtures>({
  cards: async ({ page }, use) => {
    const cards = new Cards(page);

    await use(cards);
  },
});

export { expect } from '@playwright/test';
