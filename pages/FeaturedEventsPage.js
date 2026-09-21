const { BasePage } = require("./BasePage");

class FeaturedEventsPage extends BasePage
{
    constructor(page)
    {
        super(page);
        this.logoutBtn = this.page.getByRole("button",{name:'Logout'});
        this.homeLink = this.page.locator("#nav-home");
        this.eventsink = this.page.locator("#nav-events");
        this.myBookingsLink = this.page.locator("#nav-bookings");
        this.apiDocsLink = this.page.getByRole("link",{name:'API Docs'});
        this.browseEventsLink = this.page.getByRole("link",{name:'Browse Events →'});
        this.MyBookingsBtn= this.page.getByRole("button",{name:'My Bookings'}); 
        this.eventCards = this.page.locator("#event-card");
    }


}

module.exports={FeaturedEventsPage}