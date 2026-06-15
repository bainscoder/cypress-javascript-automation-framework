// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

const login = new LoginPage();

Cypress.Commands.add('loginSSO', () => {
  cy.session('authenticated-user', () => {
    login.navigateToLoginPage();

    login.loginWithValidCredentials(
      env.email,
      env.password
    );
  }, {
    validate() {
      cy.visit('/');
      cy.contains('Log out')
        .should('be.visible');
    }
  });
});