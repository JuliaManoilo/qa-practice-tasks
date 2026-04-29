import MainPage from '../pages/main.page.js'

describe('DOU tests', () => {

    it('Check Salaries page', async () => {
        await MainPage.open()

        await MainPage.goToSalaries()

        await expect(MainPage.quartileText).toHaveText(expect.stringContaining('КВАРТИЛЬ'))
    })

    it('Check Jobs page', async () => {
        await MainPage.open()

        await MainPage.goToJobs()

        await expect(MainPage.findButton).toBeDisplayed()

        await MainPage.clickFind()

        await expect(MainPage.quickTransition).toHaveText(expect.stringContaining('Швидкий перехід'))
    })   

    it('Check GameDev page', async () => {
        await MainPage.open()

        await MainPage.goToGameDev()

        await expect(MainPage.newsLink).toBeDisplayed()
        await expect(MainPage.blogsLink).toBeDisplayed()
        await expect(MainPage.forumLink).toBeDisplayed()
    })
})




  