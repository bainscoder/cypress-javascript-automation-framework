import { ApparelAndShoesLocators } from '../locators/apparelAndShoes.locators';
export class ApparelAndShoesPage {

  navigateToApparelAndShoesPage() {
    cy.intercept('GET','**/apparel-shoes*').as('apparelAndShoesApi');
    cy.get(ApparelAndShoesLocators.apparelAndShoesTab).first().click();
    cy.wait('@apparelAndShoesApi').its('response.statusCode').should('eq', 200);
    cy.url().should('include', 'apparel-shoes');
  }

  verifyApparelAndShoesPageElements() {
    cy.contains(ApparelAndShoesLocators.pageHeading).should('be.visible');
  }

}