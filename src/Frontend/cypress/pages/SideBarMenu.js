class SideBarMenu {
  constructor() {}

  verifyUsernameText(username) {
    cy.get('[data-cy=username]').invoke('text').should('equal', `Username: ${username}`);
  };

  verifyRoleText(role) {
    cy.get('[data-cy=userrole]').invoke('text').should('equal', `Role: ${role}`);
  };

  clickMenu() {
    cy.get('[data-cy=hamburger-menu-button]').click();
  };

  navigateToOption(option) {
    cy.get('[data-cy=hamburger-menu-button]').click();
    if (option === 'Reservation') {
      cy.get('[data-cy=reservation-submenu]').click();
    } else if (option === 'Testimonials') {
      cy.get('[data-cy=testimonials-submenu]').click();
    } else if (option === 'Park status') {
      cy.get('[data-cy=parkstatus-submenu]').click();
    } else if (option === 'User list') {
      cy.get('[data-cy=userlist-submenu]').click();
    } if (option === 'Reservation list') {
      cy.get('[data-cy=reservationlist-submenu]').click();
    } if (option === 'Reports') {
      cy.get('[data-cy=reports-submenu]').click();
    } if (option === 'Settings') {
      cy.get('[data-cy=settings-submenu]').click();
    } if (option === 'Log out') {
      cy.get('[data-cy=logout-submenu]').click();
    } if (option === 'Log in') {
      cy.get('[data-cy=login-submenu]').click();
    }
  };

  verifyOptionExist(option) {
    if (option === 'Reservation') {
      cy.get('[data-cy=reservation-submenu]').should('exist');
    } else if (option === 'Testimonials list') {
      cy.get('[data-cy=testimonials-submenu]').should('exist');
    } else if (option === 'Park status') {
      cy.get('[data-cy=parkstatus-submenu]').should('exist');
    } else if (option === 'User list') {
      cy.get('[data-cy=userlist-submenu]').should('exist');
    } if (option === 'Reservation list') {
      cy.get('[data-cy=reservationlist-submenu]').should('exist');
    } if (option === 'Reports') {
      cy.get('[data-cy=reports-submenu]').should('exist');
    } if (option === 'Settings') {
      cy.get('[data-cy=settings-submenu]').should('exist');
    } if (option === 'Log out') {
      cy.get('[data-cy=logout-submenu]').should('exist');
    } if (option === 'Log in') {
      cy.get('[data-cy=login-submenu]').should('exist');
    }
  };

  verifyOptionNoExist(option) {
    if (option === 'Reservation') {
      cy.get('[data-cy=reservation-submenu]').should('not.exist');
    } else if (option === 'Testimonials list') {
      cy.get('[data-cy=testimonials-submenu]').should('not.exist');
    } else if (option === 'Park status') {
      cy.get('[data-cy=parkstatus-submenu]').should('not.exist');
    } else if (option === 'User list') {
      cy.get('[data-cy=userlist-submenu]').should('not.exist');
    } if (option === 'Reservation list') {
      cy.get('[data-cy=reservationlist-submenu]').should('not.exist');
    } if (option === 'Reports') {
      cy.get('[data-cy=reports-submenu]').should('not.exist');
    } if (option === 'Settings') {
      cy.get('[data-cy=settings-submenu]').should('not.exist');
    } if (option === 'Log out') {
      cy.get('[data-cy=logout-submenu]').should('not.exist');
    } if (option === 'Log in') {
      cy.get('[data-cy=login-submenu]').should('not.exist');
    }
  };
};

export default SideBarMenu;
