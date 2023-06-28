
class Userlist {
  constructor() {
    this.url = 'admin/user-list';
    this.title = 'User List';
  };

  visit() {
    cy.visit(this.url);
  };

  createUser() {
    cy.get('[data-cy=createuser-button]').click();
  };

  insertID(id) {
    cy.get('[data-cy=addID-input]').type(id);
  };

  insertName(name) {
    cy.get('[data-cy=addname-input]').type(name);
  };

  insertLastName1(lastname) {
    cy.get('[data-cy=addlastname1-input]').type(lastname);
  };

  insertLastName2(lastname) {
    cy.get('[data-cy=addlastname2-input]').type(lastname);
  };

  insertEmail(email) {
    cy.get('[data-cy=addemail-input]').type(email);
  };

  selectGender(gender) {
    cy.get('[data-cy=addgender-select]').click();
    cy.contains('.ant-select-item-option-content', gender).click();
  };

  selectCountry(country) {
    cy.get('[data-cy=addcountry-select]').click();
    cy.contains('.ant-select-item-option-content', country).click();
  };

  selectState(state) {
    cy.get('[data-cy=addstate-select]').click();
    cy.contains('.ant-select-item-option-content', state).click();
  };

  selectRole(role) {
    cy.get('[data-cy=addusertype-select]').click();
    cy.contains('.ant-select-item-option-content', role).click();
  };

  insertUsername(username) {
    cy.get('[data-cy=addusername-input]').type(username);
  };

  insertPassword(password) {
    cy.get('[data-cy=adduserpassword-input]').type(password);
  };

  saveUser() {
    cy.get('[data-cy=saveuser-button]').click();
    cy.get('[data-cy=closepopup-button]').click();
    cy.reload();
    cy.wait(1000);
  };

  deleteUser(user) {
    cy.get(`[data-cy=delete-${user}-button]`).click();
  };

  verifyUserExist(user) {
    cy.get(`[data-cy=${user}-tr]`).should('exist');
  };

  verifyUserNotExist(user) {
    cy.get(`[data-cy=${user}-tr]`).should('not.exist');
  };
};

export default Userlist;
