const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://hotsite.crmall.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: 'cypress/support/e2e.js',
    //defaultCommandOptions: {
      //type: { delay: 300 }, // Adiciona um pequeno delay entre cada tecla pressionada
    //},
  },
});
