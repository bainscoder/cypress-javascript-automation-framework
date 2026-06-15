import { ElectronicsLocators } from '../locators/electronics.locators';
export class ElectronicsPage {

  navigateToElectronicsPage() {
    cy.intercept('GET','**/electronics*').as('electronicsApi');
    cy.get(ElectronicsLocators.electronicsTab).first().click();
    cy.wait('@electronicsApi').its('response.statusCode').should('eq', 200);
    cy.url().should('include', 'electronics');
  }

  verifyElectronicsPageElements() {
    const elements = [ElectronicsLocators.cameraPhotoCategory,ElectronicsLocators.cellPhonesCategory,ElectronicsLocators.cameraPhotoImage,ElectronicsLocators.cellPhonesImage];
    cy.contains(ElectronicsLocators.pageHeading).should('be.visible');
    elements.forEach(locator => {
    cy.get(locator).should('be.visible');
  });
  }

  verifyTheFunctionalityOfCameraPhotoCategory() {
    cy.get(ElectronicsLocators.cameraPhotoCategory).click();
    cy.url().should('include', 'camera-photo');
  }

  verifyTheFunctionalityOfCellPhonesCategory() {
    cy.get(ElectronicsLocators.cellPhonesCategory).click();
    cy.url().should('include', 'cell-phones');
  }

}