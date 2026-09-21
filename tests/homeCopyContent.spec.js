//const { test, expect} = require('@playwright/test')
const {test, expect} = require('../fixtures/test')


test('API Documentation swagger link should be displayed', async({homePage})=>
{  
    await homePage.navigateToUrl('/')
    await expect(homePage.apiDocumentationLink).toBeVisible();
})

test('home page title validation', async({homePage})=>
{ //const pageFactory= new POManager(page);
    //const homePage = pageFactory.getHomePage();
    await homePage.navigateToUrl('/')
    await expect(homePage.page).toHaveTitle(
        'EventHub — Discover & Book Events'
    );


})
// test('Featured events page copy content validation', async({page})=>
// {
//     page.goto('/')
//     //visibility of home, events, mybookings, apidocs, admin, logout on the top page
//     //clcik on log out and validate the url
//     //validate number of events beings displayed = 3
//     //click admin and verify list - Manage Events, Manage Bookings
//     const homeTab = page.locator("#nav-home")
//     const eventsTab = page.locator("#nav-events")
//     const myBookingsTab = page.locator("#nav-bookings")
//     const apiDocsTab = page.getByRole("link",{name:'API Docs'})
//     const adminTab = page.getByRole("button",{name:'Admin'})
//     const logOutTab = page.locator("#logout-btn")
//     const eventCards = page.locator("#event-card");
//     const count = await eventCards.count();
//     await expect(homeTab).toBeVisible();
//     await expect(eventsTab).toBeVisible();
//     await expect(myBookingsTab).toBeVisible();
//     await expect(apiDocsTab).toBeVisible();
//     await expect(adminTab).toBeVisible();
//     await expect(logOutTab).toBeVisible();
//     await expect(eventCards).toBeVisible();
    

// })