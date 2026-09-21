const {test, expect}= require('../fixtures/test');

test('authenticate user',async ({loginPage})=>
{
    await loginPage.navigateToUrl('/');
    await loginPage.login('ridhigoel2512@gmail.com','P@ssword1234');
    //await expect(loginPage.page.locator)
    await expect(
    loginPage.page.locator('#logout-btn')
).toBeVisible();
    await loginPage.page.context().storageState({path:'auth/auth.json'})
})