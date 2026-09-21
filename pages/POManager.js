const { FeaturedEventsPage } = require("./FeaturedEventsPage");
const { HomePage } = require("./HomePage");
const {LoginPage} = require("./LoginPage");
const { UpcomingEvents } = require("./UpcomingEvents");

class POManager
{
    constructor(page)
    {
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.featuredPage = new FeaturedEventsPage(page);
        this.upcomingEventsPage = new UpcomingEvents(page);
    }

    getLoginPage()

    {
        return this.loginPage;
    }

    getHomePage()
    {
        return this.homePage;
    }

    getFeaturedPage()
    {
        return this.featuredPage;
    }

    getUpcomingPage()
    {
        return this.upcomingEventsPage;
    }
}


module.exports={POManager}