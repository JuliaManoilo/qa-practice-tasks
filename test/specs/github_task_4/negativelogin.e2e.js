describe.skip('GitHub Login - Negative test', () => {
    it('should show error message with invalid credentials', async () => {
        await browser.url('https://github.com/login');

        // поле email
        const loginInput = await $('#login_field');
        await loginInput.setValue('wronguser@example.com');

        // поле пароль
        const passwordInput = await $('#password');
        await passwordInput.setValue('wrongPassword123');

        // кнопка Sign in
        const signInButton = await $('input[name="commit"]');
        await signInButton.click();

        // повідомлення про помилку
        const errorMessage = await $('.flash-error');

        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText(expect.stringContaining('Incorrect'));
    });  
});