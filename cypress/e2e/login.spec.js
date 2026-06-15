import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';
const login = new LoginPage();
describe('Login Page scripts', () => {
beforeEach(() => {
login.navigateToLoginPage();
});

  it('Verify the functionality of sign in button w.r.t blank fields',() => {
     login.loginWithoutCredentials();
  });

  it('Verify the functionality of sign in button w.r.t valid credentials',() => {
  login.loginWithValidCredentials(env.email, env.password);
});

});