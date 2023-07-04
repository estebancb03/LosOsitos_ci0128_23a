class Settings {
  constructor() {
    this.url = 'admin/settings';
    this.title = 'Settings';
  }

  visit() {
    cy.visit(this.url);
  }

  startServiceCreation() {
    cy.get('[data-cy=create-service-button]').click();
  }

  createService({name, inventory, usdPrice, crcPrice}) {
    cy.get('[data-cy=service-name-input]').type(name);
    cy.get('[data-cy=service-inventory-input]').type(inventory);
    cy.get('[data-cy=service-usd-price]').type(usdPrice);
    cy.get('[data-cy=service-crc-price]').type(crcPrice);
    cy.get('[data-cy=service-save-button]').click();
    cy.get('[data-cy=closepopup-button]').click();
  }

  editService(oldName, {name, inventory, usdPrice, crcPrice}) {
    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:3000/api/updateServicesWithQuantityAndPrices',
    }).as('updateService');

    cy.get(`[data-cy=service-modify-button-${oldName}]`).click();
    cy.get(`[data-cy=service-modify-name-input-${oldName}]`).clear().type(name);
    cy.get(`[data-cy=service-modify-quantity-input-${name}]`).clear().type(inventory);
    cy.get(`[data-cy=service-modify-usd-price-input-${name}]`).clear().type(usdPrice);
    cy.get(`[data-cy=service-modify-crc-price-input-${name}]`).clear().type(crcPrice);
    cy.get(`[data-cy=service-modify-button-${name}]`).click();

    cy.wait('@updateService');
    cy.reload();
  }

  deleteService({name}) {
    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:3000/api/disableService',
    }).as('deleteService');

    cy.get(`[data-cy=service-delete-button-${name}]`).click();

    cy.wait('@deleteService');
  }

  verifyServiceCreation({name}) {
    cy.reload();
    cy.get(`[data-cy=${name}-tr]`).should('exist');
  }

  verifyServiceValues({name, inventory, usdPrice, crcPrice}) {
    cy.get(`[data-cy=service-modify-name-input-${name}]`).invoke('val').should('equal', `${name}`);
    cy.get(`[data-cy=service-modify-quantity-input-${name}]`).invoke('val').should('equal', `${inventory == 0 ? 'NA' : inventory}`);
    cy.get(`[data-cy=service-modify-usd-price-input-${name}]`).invoke('val').should('equal', `${usdPrice}`);
    cy.get(`[data-cy=service-modify-crc-price-input-${name}]`).invoke('val').should('equal', `${crcPrice}`);
  }

  verifyServiceDeletion({name}) {
    cy.reload();
    cy.get(`[data-cy=${name}-tr]`).should('not.exist');
  }

  editCampingCapacityValues(Online, OnSite){
    cy.get('[data-cy=CampingCapacity-modify-button]').click();
    cy.get('[data-cy=CampingOnline-input-text]').clear().type(Online);
    cy.get('[data-cy=CampingOnSite-input-text]').clear().type(OnSite);
    cy.get('[data-cy=CampingCapacity-modify-button]').click();
  }

  verifyCampingCapacityValues(Online, OnSite){
    cy.get('[data-cy=CampingOnline-input-text]').invoke('val').should('equal', Online);
    cy.get('[data-cy=CampingOnSite-input-text]').invoke('val').should('equal', OnSite);
  }

  editExchangeRateValues(value){
    cy.get('[data-cy=ExchangeRate-button]').click();
    cy.get('[data-cy=ExchangeRate-input]').clear().type(value);
    cy.get('[data-cy=ExchangeRate-button]').click();
  }

  verifyExchangeRateValues(value){
    cy.get('[data-cy=ExchangeRate-input]').invoke('val').should('equal', value);
  }
};

export default Settings;
