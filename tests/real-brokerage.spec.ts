// import { test, expect } from "@playwright/test";
import { test } from '@fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.describe('Real Brokerage', () => {
  test.beforeEach(async ({ page, login, firewall }) => {
    await page.goto('/');

    await test.step('Company firewall check', async () => {
      await test.step('Firewall 1', async () => {
        if (await firewall.isSiteVisitTextVisible()) {
          await firewall.clickContinueBtn();
        }
      });

      await test.step('Click Join Real link', async () => {
        await login.waitForJoinRealLink();
        await login.clickJoinRealLink();
      });

      await test.step('Firewall 2', async () => {
        if (await firewall.isSiteVisitTextVisible()) {
          await firewall.clickContinueBtn();
        }
      });
    });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Account sign-up', async ({ page, createAccount, userHome }) => {
    await test.step('Validate user is on Create Account page', async () => {
      await createAccount.validatePageNewAccountHeading();
    });

    // await page.waitForEvent('load');

    await test.step('Create new account -> Validate user gets logged in', async () => {
      const password: string = 'JohnDoe0987@';
      const firstName: string = faker.person.firstName();
      const lastName: string = faker.person.lastName().slice(0, 14);
      const username: string = (firstName + lastName).slice(0, 14);
      const email: string = faker.internet.email();

      await createAccount.createNewAccount(
        firstName,
        lastName,
        username,
        email,
        password,
        password,
      );

      await userHome.isLogoutBtnVisible();
    });
  });
});
