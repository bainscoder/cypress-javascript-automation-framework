export const env = {
  get email() {
    return Cypress.env('email');
  },

  get password() {
    return Cypress.env('password');
  }
};