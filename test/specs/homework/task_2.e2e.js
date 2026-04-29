import { expect } from '@wdio/globals'

describe.skip('Webdriverio main page', () => {
    xit("should test API page actions", async () => {
        // 1 переход на сторінку
        await browser.url('https://webdriver.io');
        await browser.pause(2000)

        // 3–4 (селектор з devtools)
        const apiLink = await $('nav a[href="/docs/api"]')
        await apiLink.click()
        await browser.pause(3000)

        // 5 (скрол вниз + перевірка елемента)
        const footerLink = await $('.footer__link-item')
        await footerLink.scrollIntoView()
        await browser.pause(2000)

        // скрол вниз і перевірка елемента Blog
        await footerLink.scrollIntoView()
        await browser.pause(2000)

        let isDisplayed = await footerLink.isDisplayed()
        console.log("Footer link displayed: " + isDisplayed)

        // 6 Protocol Commands
        const protocolLink = await $('=Protocol Commands')

        await protocolLink.scrollIntoView({ block: 'center' })
        await browser.pause(2000)

        let visible = await protocolLink.isDisplayed()
        console.log("Protocol visible: " + visible)

        let clickable = await protocolLink.isClickable()
        console.log("Protocol clickable: " + clickable)

        let html = await protocolLink.getHTML()
        console.log("Protocol HTML: " + html)

        await protocolLink.click()

        // 7 waitUntil + заголовок
       await browser.waitUntil(async () => {
        const header = await $('h2')
        let tagName = await header.getTagName()
        let text = await header.getText()

        console.log("Tag: " + tagName)
        console.log("Text: " + text)

        return tagName === 'h2' && text.includes('WebDriver Protocol')
    }, {
        timeout: 10000,
        timeoutMsg: "Header is not correct"
})
    });
});