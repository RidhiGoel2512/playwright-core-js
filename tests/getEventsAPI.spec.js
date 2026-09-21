const {test,expect} = require('../fixtures/test')
const {APIClient} = require('../api/APIClient')

test('get Events API', async({request})=>
{
    
    const apiClient = new APIClient(request);
    await apiClient.login("ridhigoel2512@gmail.com","P@ssword1234");
    const response = await apiClient.getEvents(6);
    expect(response.status()).toBe(200);
    const resBody = await response.json();
    console.log(resBody);


})