import { Page, Locator } from '@playwright/test';
import { step } from '@utils/utils';

export class Firewall {
  private readonly page: Page;
  private readonly visitSiteText: Locator;
  private readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.visitSiteText = page.getByText(
      'Are you sure you want to visit this site?',
    );
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
  }

  /**
   * Page confirmation: Are you sure you want to visit this site?
   * @returns true or false
   */
  @step
  async isSiteVisitTextVisible() {
    return this.visitSiteText.isVisible({ timeout: 60_000 });
  }

  /**
   * Click on Continue button
   */
  @step
  async clickContinueBtn() {
    this.continueBtn.click({ timeout: 5_000 });
  }
}
