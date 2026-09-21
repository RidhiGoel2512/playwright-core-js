const { BasePage } = require("./BasePage");

class UpcomingEvents extends BasePage
{
    constructor(page)
    {
        super(page);
        this.allCategories = this.page.getByRole("combobox").filter({has:this.page.locator('option[value="Conference"]')})
    }
}
module.exports={UpcomingEvents}