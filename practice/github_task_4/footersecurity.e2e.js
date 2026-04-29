describe.skip('GitHub Footer Security link', () => {
    it('should navigate to Security page from footer', async () => {
        await browser.url('https://github.com');

        const securityLink = await $('a[href="/security"]');

        await securityLink.scrollIntoView();
        await securityLink.waitForClickable();
        await securityLink.click();

        await expect(browser).toHaveUrl(expect.stringContaining('/security'));
    });
});