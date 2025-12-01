import { test as base } from '@playwright/test';
import { Login } from '@components/login';
import { CreateAccount } from '@components/create-account';
import { Firewall } from '@components/company-firewall';
import { UserHome } from '@components/user-home-page';

// Declare the types of your fixtures.
type MyFixtures = {
  login: Login;
  createAccount: CreateAccount;
  firewall: Firewall;
  userHome: UserHome;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {
    // Set up the fixture.
    const login = new Login(page);

    // Use the fixture value in the test.
    await use(login);
  },

  createAccount: async ({ page }, use) => {
    // Set up the fixture.
    const createAccount = new CreateAccount(page);

    // Use the fixture value in the test.
    await use(createAccount);
  },

  firewall: async ({ page }, use) => {
    // Set up the fixture.
    const firewall = new Firewall(page);

    // Use the fixture value in the test.
    await use(firewall);
  },

  userHome: async ({ page }, use) => {
    // Set up the fixture.
    const userHome = new UserHome(page);

    // Use the fixture value in the test.
    await use(userHome);
  },
});

export { expect } from '@playwright/test';
