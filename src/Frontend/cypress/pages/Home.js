/// <reference types='cypress' />

class Home {
  constructor() {
    this.url = '/';
    this.title = 'Home';
  }

  visit() {
    cy.visit(this.url);
  }
};

export default Home;
