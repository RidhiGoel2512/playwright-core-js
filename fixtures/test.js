const base = require('@playwright/test')
const { POManager } = require('../pages/POManager')

exports.test = base.test.extend({
    pageFactory: async ({page}, use) =>
    {
        const pageFactory = new POManager(page)
        await use(pageFactory)
    },
    loginPage: async ({pageFactory}, use)=>
    {
        await use(pageFactory.getLoginPage())
    },
    homePage: async ({pageFactory}, use)=>
    {
        await use(pageFactory.getHomePage())
    },
    featuredPage: async ({pageFactory}, use)=>
    {
        await use(pageFactory.getFeaturedPage())
    },
    upcomingEventsPage: async({pageFactory},use)=>
    {
        await use(pageFactory.getUpcomingPage())
    }
    })

    exports.expect = base.expect;