import { test as base } from '@playwright/test';
import { Navbar } from '@components/navbar';
import { Shared } from '@components/shared';

type MyFixtures = {
    navbar: Navbar;
    shared: Shared;
}

export const test = base.extend<MyFixtures>({
    navbar: async ({ page }, use) => {
        const navbar = new Navbar(page);

        await use(navbar);
    },

    shared: async ({ page }, use) => {
        const shared = new Shared(page);

        await use(shared);
    },
});

export { expect } from '@playwright/test';