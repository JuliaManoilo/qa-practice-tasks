class MainPage {

    // ===== NAVIGATION =====
    get salariesLink() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get jobsLink() { return $('a[href="https://jobs.dou.ua/"]') }
    get gameDevLink() { return $('.menu-site__gamedev') }

    // ===== SALARIES =====
    get quartileText() { return $('h4.dws-block-header') }

    // ===== JOBS =====
    get findButton() { return $('.btn-search') }
    get quickTransition() { return $('.example') }

    // ===== GAMEDEV =====
    get blogsLink() { return $('a[href*="blogs"]') }
    get newsLink() { return $('a[href*="articles"]') }
    get forumLink() { return $('a[href*="forums"]') }

    // ===== ACTIONS =====
    async open() {
        await browser.url('https://dou.ua/')
    }

    async goToSalaries() {
        await this.salariesLink.click()
    }

    async goToJobs() {
        await this.jobsLink.click()
    }

    async goToGameDev() {
        await this.gameDevLink.click()
    }

    async clickFind() {
        await this.findButton.click()
    }
}

export default new MainPage()