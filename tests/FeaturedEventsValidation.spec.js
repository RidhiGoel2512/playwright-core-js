const { test , expect } = require('../fixtures/test')


test.use({
    storageState:'auth/auth.json'
})
test('clicking on logout button takes user to home page',async({featuredPage, loginPage})=>
{  await featuredPage.navigateToUrl('/');
    await expect(featuredPage.logoutBtn).toBeVisible();
    await featuredPage.logoutBtn.click();
    await expect(loginPage.email).toBeVisible();   
});

test('clicking API docs opens in a different tab and title needs to be verified', async({featuredPage})=>
{
    await featuredPage.navigateToUrl('/');
    await expect(featuredPage.apiDocsLink).toBeVisible();
    const apiDocsPage = await featuredPage.newTabOpen(featuredPage.apiDocsLink);
    await expect (apiDocsPage).toHaveTitle("EventHub API Docs")
});




// test('Visibility of browse events and my bookings button', async({featuredPage})=>
// {

// })

// test('visibility of home, events, mybookings, api docs, admin tabs', async({featuredPage})=>
// {

// })

// test('Exactly 3 featured events are displayed', async ({pafeaturedPage})=>
// {

// })