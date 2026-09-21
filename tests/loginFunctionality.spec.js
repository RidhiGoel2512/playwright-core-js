const {test, expect} = require('../fixtures/test');
const {loginData} = require('../utils/testdata')

test('Succesful login', async({loginPage})=>
{
    await loginPage.navigateToUrl('/');
    await expect(loginPage.page).toHaveTitle('EventHub — Discover & Book Events');
    await loginPage.login(loginData.validUsers.email, loginData.validUsers.password);
})


for (const user of loginData.invalidUsers)
{


test(`non successful login ${user.email}`, async({loginPage})=>
{
    await loginPage.navigateToUrl('/')
    await loginPage.login(user.email, user.password)
})
}



test('email, password and signin button should be visible', async({loginPage})=>
{
    //const pageFactory = new POManager(page);
    //const loginPage = pageFactory.getLoginPage();
    await loginPage.navigateToUrl('/');
    await expect(loginPage.page).toHaveTitle('EventHub — Discover & Book Events');
    await expect(loginPage.email).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.SignIn).toBeVisible();

})

test('email error message and password error message should be visible upon clicking on submit btn without giving any input', async({loginPage})=>
{
    //const pageFactory = new POManager(page)
    //const loginPage=pageFactory.getLoginPage()
    await loginPage.navigateToUrl('/') 
    await expect(loginPage.page).toHaveTitle('EventHub — Discover & Book Events');
    await loginPage.SignIn.click();
    await expect(loginPage.emailErrorMessage).toBeVisible();
    await expect(loginPage.passwordErrorMessage).toBeVisible();
})

