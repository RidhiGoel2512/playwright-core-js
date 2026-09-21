import { request } from '@playwright/test';

const {test, expect} = require('../fixtures/test')
const {APIClient} = require('../api/APIClient');

test('invalid login',async({request})=>
{
    const apiClient = new APIClient(request);
    const res = await apiClient.login("ridhigoel2512@gmail.com","Ridhi@123");
     expect(await res.status()).toBe(400);
     const resBody = await res.json();
     expect(resBody.success).toBe(false);
});

test('missing authorisation in get events API', async({request})=>
{
    const response = await request.get("https://api.eventhub.rahulshettyacademy.com/api/events",
        {
            params:6
        }
    );
    expect(await response.status()).toBe(401);
});

test('invalid test data in create booking API', async({request})=>
{
const apiClient = new APIClient(request);
const res = await apiClient.createBooking(
    {"customerName":"Ridhi Goel","customerEmail":"ridhigoel720@gmail.com","customerPhone":"8766259656","quantity":1,"eventId":2}
);
const resJson = await res.json();
console.log(resJson);

// { success: false, error: 'Invalid or expired token' }

expect(resJson.success).toBe(false);
expect(resJson.error).toBe('Invalid or expired token');
});