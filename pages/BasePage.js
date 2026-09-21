class BasePage
{
    constructor(page) 
    {
        this.page = page
    }

    async navigateToUrl(url)
    {
        await this.page.goto(url)
    }

    async countMethod(locator)
   {
        const count = await locator.count();
        return count;
   }

   async newTabOpen(locator)
   {
        const promiseTab = this.page.context().waitForEvent('page');
        await locator.click();
        return await promiseTab;
   }

   async validatingDD(locator, predefinedvalues)
   {
        return await locator.allTextContents();
   }
}

module.exports={BasePage}