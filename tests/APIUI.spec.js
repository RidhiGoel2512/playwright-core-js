const { test, expect } = require('../fixtures/test');
const { APIClient } = require('../api/APIClient');

test.use({
    storageState: 'auth/auth.json'
});

test('Do booking via API and verify on the UI', async ({ request, loginPage, homePage }) => {

    // API - Login
    const api = new APIClient(request);

    await api.login(
        'ridhigoel2512@gmail.com',
        'P@ssword1234'
    );

    // API - Create Booking
    const res = await api.createBooking({
        customerName: 'test',
        customerEmail: 'test@gmail.com',
        customerPhone: '8766259656',
        quantity: 1,
        eventId: 285
    });

    expect(res.status()).toBe(201);
    const resJSON = await res.json();
    expect(resJSON.success).toBe(true);
    expect(resJSON.data.eventId).toBe(285);
    const title = resJSON.data.event.title;
    console.log('Event title from API:', title);

    // UI - Verify Booking
    await loginPage.navigateToUrl('/');
    await homePage.myBookings.click();
    const titleUI1 = await homePage.titleUI.first().textContent();
    console.log('Event title from UI:', titleUI1);
    expect(titleUI1).toBe(title);
});