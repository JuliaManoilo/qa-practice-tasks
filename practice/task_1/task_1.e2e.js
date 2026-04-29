import { expect } from '@wdio/globals'

describe.skip('Webdriverio main page', () => {
    xit("should test webdriverio API page", async () => {
        await browser.url('https://webdriver.io')
        await browser.pause(2000)

    // 2. Клік на API
        let apiLink = await $('=API')
        await apiLink.click()
        await browser.pause(2000)

    // 3. Перевірка URL
        let url = await browser.getUrl()
        console.log("URL is: " + url)

    // 4. Перевірка заголовка h1
        let header = await $('h1')
        let headerText = await header.getText()
        console.log("Header is: " + headerText)

    // 5. Bread crumbs
        let breadcrumbs = await $('.breadcrumbs__link')
        console.log("Breadcrumb text: " + await breadcrumbs.getText())

    // 6. Атрибут WebDriver (лінк)
        let webdriverLink = await $('=WebDriver')
        let href = await webdriverLink.getAttribute('href')
        console.log("WebDriver link: " + href)

    // 7. Пошук
        let searchButton = await $('=Search')
        await searchButton.click()
        await browser.pause(2000)

        let searchInput = await $('#docsearch-input')
        await searchInput.addValue("all is done")
        await browser.pause(2000)

        let value = await searchInput.getValue()
        console.log("Search value: " + value)

        let clearButton = await $('.DocSearch-Reset')
        await clearButton.click()
        await browser.pause(2000)
    });
});