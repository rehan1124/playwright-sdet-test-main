import { Page, Locator, expect } from "@playwright/test";
import { step } from "@utils/utils";

export class UserHome {

    private readonly page: Page;
    private readonly logoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutBtn = page.getByTestId('button-Logout');
    }

    /**
     * Wait for Logout button visibility
     * @param timeout Timeout in milliseconds
     */
    @step
    async isLogoutBtnVisible(timeout: number = 30_000) {
        // await this.logoutBtn.waitFor({ state: "visible", timeout });
        await expect.soft(this.logoutBtn).toBeVisible({ timeout });
    }
}