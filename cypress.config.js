const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

dotenv.config();

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: process.env.BASE_URL,

    specPattern: "cypress/e2e/**/*.spec.js",

    setupNodeEvents(on, config) {
      allureWriter(on, config);

      config.env.email = process.env.EMAIL;
      config.env.password = process.env.PASSWORD;

      return config;
    }
  },

  env: {
    allure: true,
    allureReuseAfterSpec: true
  }
});