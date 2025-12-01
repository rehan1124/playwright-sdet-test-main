import { Page, Locator } from '@playwright/test';
import { step } from '@utils/utils';

export class Login {
  private readonly page: Page;
  private readonly joinRealLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.joinRealLink = page.getByText('Join Real').first();
  }

  /**
   * Wait for Join Real link
   */
  @step
  async waitForJoinRealLink() {
    await this.joinRealLink.waitFor({ state: 'visible', timeout: 120_000 });
  }

  /**
   * Click Join Real link
   */
  @step
  async clickJoinRealLink() {
    await this.joinRealLink.click({ timeout: 5_000 });
  }
}
