import { pages } from '../support/pageObjects';
import { env } from '../utils/env';

describe('Apparel and Shoes Page Scripts', () => {
  beforeEach(() => {
  cy.loginSSO();
  cy.visit('/');
  pages.apparelAndShoes.navigateToApparelAndShoesPage();
  });

  it('Verify elements visible on apparel and shoes page',() => {
      pages.apparelAndShoes.verifyApparelAndShoesPageElements();
    });
});