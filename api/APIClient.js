class APIClient
{
    constructor(request)
    {
        this.request=request;
        this.token=null;
    }

    async login(email,password)
    {
        const response = await this.request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
            {
                data:
                {
                    email,
                    password
                }
            }
        );

        const resJSON  = await response.json();
        this.token= resJSON.token;
        return response;
    }

    async getEvents(limit=6)
    {
        return await this.request.get("https://api.eventhub.rahulshettyacademy.com/api/events",
            {
                params:
                {
                    limit
                },
                headers:
                {
                    Authorization: `Bearer ${this.token}`
                }
            }
        )
    }

    async createBooking(bookingData)
    {
     return await this.request.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",
        {
            data:
                bookingData,
            headers:
            {
                Authorization:`Bearer ${this.token}`
            }
        }
     )
    }



}

module.exports={APIClient}