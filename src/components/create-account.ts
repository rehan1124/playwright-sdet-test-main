import { Page, Locator, expect } from '@playwright/test';
import { step } from '@utils/utils';

export class CreateAccount {

    private readonly page: Page;
    private readonly createAccountHeading: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly username: Locator;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly termsConsent: Locator;
    private readonly callMsgConsent: Locator;
    private readonly createAccountBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createAccountHeading = page.getByText('Create Account').first();
        this.firstName = page.getByTestId('text-input-First Name');
        this.lastName = page.getByTestId('text-input-Last Name');
        this.username = page.getByTestId('text-input-Username');
        this.email = page.getByTestId('email-input-Email');
        this.password = page.getByTestId('password-input-Password');
        this.confirmPassword = page.getByTestId('password-input-Password Confirmation');
        this.termsConsent = page.getByTestId('consentedToTerms');
        this.callMsgConsent = page.getByTestId('consentedToCallMessage');
        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
    }

    /**
     * Create Account heading
     */
    @step
    async validatePageNewAccountHeading() {
        await expect.soft(this.createAccountHeading).toBeVisible({ timeout: 120_000 });
    }

    /**
     * Enter required details to create new account
     * @param firstname First name
     * @param lastname Last name
     * @param username Username
     * @param email Email
     * @param password Password
     * @param confirmPasswortd Confirm password
     */
    @step
    async createNewAccount(firstname: string, lastname: string, username: string, email: string, password: string,
        confirmPasswortd: string
    ) {
        const timeout = { timeout: 10_000 };
        await this.firstName.fill(firstname, timeout);
        await this.lastName.fill(lastname, timeout);
        await this.username.fill(username, timeout);
        await this.email.fill(email, timeout);
        await this.password.fill(password, timeout);
        await this.confirmPassword.fill(confirmPasswortd, timeout);

        await this.termsConsent.click(timeout);
        await this.callMsgConsent.click(timeout);
        await this.createAccountBtn.click(timeout);
    }
}