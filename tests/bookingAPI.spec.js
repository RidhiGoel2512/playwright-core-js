const { test, expect } = require('../fixtures/test');
const { APIClient } = require('../api/APIClient');

test('create booking API', async ({ request }) => {

    const api = new APIClient(request);

    await api.login(
        'ridhigoel2512@gmail.com',
        'P@ssword1234'
    );

    const response = await api.createBooking({
        customerName: 'Ridhi Goel',
        customerEmail: 'ridhigoel2512@gmail.com',
        customerPhone: '8766259656',
        quantity: 1,
        eventId: 283
    });

    console.log(await response.json());
   expect(response.status()).toBe(201);

   const responseBody = await response.json();

    expect(responseBody.success).toBe(true);
    expect(responseBody.message).toBe('Booking confirmed!');
});