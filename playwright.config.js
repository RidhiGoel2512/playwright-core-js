const { defineConfig, devices } = require('@playwright/test');
const env  = require('./env')

module.exports= defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter:[ ['html' ,{ open:'never'}], ['allure-playwright']],
  use: {
    baseURL:env.baseUrl,
    trace: 'on',
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    headless:true
  },

  projects: [
  
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox']  },
  
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]

});

