import { LoginLocators } from '../locators/login.locators';
export class LoginPage {

  navigateToLoginPage() {
   cy.visit('/');
   cy.get(LoginLocators.loginLink).click();
   cy.contains(LoginLocators.headingText).should('be.visible');
  }

  loginWithoutCredentials() {
   cy.get(LoginLocators.loginButton).eq(1).click();
   cy.contains(LoginLocators.errorMessageText).should('be.visible');
  }

  loginWithValidCredentials(email, password){
   cy.get(LoginLocators.emailField).type(email);
   cy.get(LoginLocators.passwordField).type(password);
   cy.get(LoginLocators.loginButton).eq(1).click();
   cy.contains(LoginLocators.logoutText).should('be.visible');
  }
}