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
    sideBarMenu.navigateToOption('Log in');
    cy.get('[data-cy=username-input]').type(username);
    cy.get('[data-cy=password-input]').type(password);
    cy.get('[data-cy=submit-button]').click();
    cy.wait(1000);
  };

}

export default Login;
