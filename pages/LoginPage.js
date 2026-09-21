const { BasePage } = require("./BasePage");

class LoginPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.email = page.getByPlaceholder("you@email.com");
        this.password = page.locator("#password");
        this.SignIn = page.getByRole("button",{name:'Sign In'});
        this.emailErrorMessage = page.getByText('Enter a valid email');
        this.passwordErrorMessage = page.getByText('Password must be at least 6 characters');

    }

    async login(email, password)
    {
        await this.email.fill(email)
        await this.password.fill(password)
        await this.SignIn.click();

    }
}

module.exports={LoginPage}