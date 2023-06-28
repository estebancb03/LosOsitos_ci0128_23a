
class Login {
  constructor() {
    this.url = '/login';
    this.title = 'Login';
  }

  visit() {
    cy.visit(this.url);
  };

  insertUsername(username) {
    cy.get('[data-cy=username-input]').type(username);
  };

  insertPassword(password) {
    cy.get('[data-cy=password-input]').type(password);
  };

  submit() {
    cy.get('[data-cy=submit-button]').click();
    cy.wait(1000);
  };
}

export default Login;
