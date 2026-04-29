describe.skip('GitHub Sign in', () => {
    it('should navigate to login page after clicking Sign in', async () => {
        await browser.url('https://github.com');

        await browser.execute(() => {
            const links = [...document.querySelectorAll('a[href="/login"]')];
            const visibleLink = links.find(link => link.offsetParent !== null);

            visibleLink.click();
        });

        await expect(browser).toHaveUrl(expect.stringContaining('/login'));
    });
});