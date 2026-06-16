// const { defineConfig } = require("cypress");
// const dotenv = require("dotenv");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// dotenv.config();

// module.exports = defineConfig({
//   viewportWidth: 1366,
//   viewportHeight: 768,

//   e2e: {
//     baseUrl: process.env.BASE_URL,

//     specPattern: "cypress/e2e/**/*.spec.js",

//     setupNodeEvents(on, config) {
//       allureWriter(on, config);

//       config.env.email = process.env.EMAIL;
//       config.env.password = process.env.PASSWORD;

//       return config;
//     }
//   },

//   env: {
//     allure: true,
//     allureReuseAfterSpec: true
//     ['./utils/customReporter.ts']
//   }
// });


const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const {
  generateExecutionReport
} = require("./cypress/utils/customReporter");

dotenv.config();

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: process.env.BASE_URL,

    specPattern: "cypress/e2e/**/*.spec.js",

    setupNodeEvents(on, config) {

      allureWriter(on, config);

      on("after:run", (results) => {

        generateExecutionReport(results);

      });

      config.env.email =
        process.env.EMAIL;

      config.env.password =
        process.env.PASSWORD;

      return config;
    }
  },

  env: {
    allure: true,
    allureReuseAfterSpec: true
  }
});