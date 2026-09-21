const { name } = require('../playwright.config');
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {

        super(page);
        this.apiDocumentationLink = page.getByRole('link', {name: 'API Documentation (Swagger)' });
        this.myBookings = page.locator("#nav-bookings");
        this.titleUI = page.locator("#booking-card h3");
    }
}

module.exports = { HomePage };