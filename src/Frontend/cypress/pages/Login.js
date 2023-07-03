import SideBarMenu from "./SideBarMenu";

const sideBarMenu = new SideBarMenu();

class Login {
  constructor() {
    this.url = '/login';
    this.title = 'Login';
  }

  visit() {
    cy.visit(this.url);
  };

  login(username, password) {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3000/api/employee/*/*',
    }).as('getEmployeeData');


    sideBarMenu.navigateToOption('Log in');
    cy.get('[data-cy=username-input]').type(username);
    cy.get('[data-cy=password-input]').type(password);
    cy.get('[data-cy=submit-button]').click();

    cy.wait('@getEmployeeData');
  };

}

export default Login;
