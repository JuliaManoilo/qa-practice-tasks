describe.skip('GitHub Search', () => {
    it('should open search and allow typing', async () => {
        await browser.url('https://github.com');

        // клік по лупі
        const searchButton = await $('button[data-target="qbsearch-input.inputButton"]');
        await searchButton.click();

        // поле пошуку
        const searchInput = await $('#query-builder-test');
        await searchInput.setValue('webdriverio');

        // перевірка що текст ввівся
        await expect(searchInput).toHaveValue('webdriverio');
    });
});