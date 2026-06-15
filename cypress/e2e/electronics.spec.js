import { pages } from '../support/pageObjects';
import { env } from '../utils/env';

describe('Electronics Page Scripts', () => {
  beforeEach(() => {
  cy.loginSSO();
  cy.visit('/');
  pages.electronics.navigateToElectronicsPage();
  });
  it('Verify elements visible on electronics page',() => {
      pages.electronics.verifyElectronicsPageElements();
    });

  it('Verify the functionality of camera photo category',() => {
      pages.electronics.verifyTheFunctionalityOfCameraPhotoCategory();
    });

  it('Verify the functionality of cell phones category',() => {
      pages.electronics.verifyTheFunctionalityOfCellPhonesCategory();
    });

});