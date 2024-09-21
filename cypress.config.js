const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  //video: true,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    //viewportWidth: 1920,
    //viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
        //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
