describe.skip('GitHub signup', () => {
    it('should navigate to signup page after entering email', async () => {
        await browser.url('https://github.com');

        const emailInput = await $('#hero_user_email');
        await emailInput.setValue('test123@gmail.com');

        const signUpButton = await $('//button[.//span[text()="Sign up for GitHub"]]');
        await signUpButton.waitForClickable();
        await signUpButton.click();

        await expect(browser).toHaveUrl(expect.stringContaining('/signup'));
    });
});