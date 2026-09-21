const {test, expect} = require('@playwright/test');

test('login API',async({request})=>
{
    const response = await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login',
        {
            data:
            {
                email:"ridhigoel2512@gmail.com",
                password:"P@ssword1234"
            }
        }
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.success).toBe(true)
    expect(responseBody.token).toBeTruthy();
})