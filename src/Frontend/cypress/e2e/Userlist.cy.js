/// <reference types='cypress' />

describe('<UserList />', () => {
  it('Operator user registration process', () => {
    cy.visit('/');
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=login-submenu]').click();
    cy.get('[data-cy=username-input]').type('estebancb');
    cy.get('[data-cy=password-input]').type('estebancb');
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=userlist-submenu]').click();
    cy.get('[data-cy=createuser-button]').click();
    cy.get('[data-cy=addID-input]').type('123456789');
    cy.get('[data-cy=addname-input]').type('Test');
    cy.get('[data-cy=addlastname1-input]').type('Test');
    cy.get('[data-cy=addlastname2-input]').type('Test');
    cy.get('[data-cy=addemail-input]').type('test@gmail.com');
    cy.get('[data-cy=addgender-select]').select('Female');
    cy.get('[data-cy=addcountry-select]').select('Costa Rica');
    cy.get('[data-cy=addstate-select]').select('Guanacaste');
    cy.get('[data-cy=addusertype-select]').select('Operator');
    cy.get('[data-cy=addusername-input]').type('test');
    cy.get('[data-cy=adduserpassword-input]').type('test1234');
    cy.get('[data-cy=saveuser-button]').click();
    cy.get('[data-cy=closepopup-button]').click();
    cy.visit('/admin');
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=userlist-submenu]').click();
    cy.contains('123456789').should('exist');
    cy.contains('Test').should('exist');
    cy.contains('Test Test Test').should('exist');
    cy.contains('test@gmail.com').should('exist');
  });
});