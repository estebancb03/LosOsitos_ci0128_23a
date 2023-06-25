/// <reference types='cypress' />

describe('<Login />', () => {
  it('Admin user login process', () => {
    cy.visit('/');
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=login-submenu]').click();
    cy.get('[data-cy=username-input]').type('estebancb');
    cy.get('[data-cy=password-input]').type('estebancb');
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=hamburger-menu-button]').click();
    cy.get('[data-cy=username]').invoke('text').should('equal', 'Username: estebancb');
    cy.get('[data-cy=userrole]').invoke('text').should('equal', 'Role: administrator');
    cy.get('[data-cy=parkstatus-submenu]').should('exist');
    cy.get('[data-cy=userlist-submenu]').should('exist');
    cy.get('[data-cy=reservationlist-submenu]').should('exist');
    cy.get('[data-cy=reports-submenu]').should('exist');
    cy.get('[data-cy=settings-submenu]').should('exist');
    cy.get('[data-cy=logout-submenu]').should('exist');
  });
});
