
class Userlist {
  constructor() {
    this.url = 'admin/user-list';
    this.title = 'User List';
  };

  visit() {
    cy.visit(this.url);
  };

  createUser(user) {
    const {
      id,
      name,
      lastname1,
      lastname2,
      email,
      gender,
      country,
      state,
      role,
      username,
      password
    } = user;
    cy.get('[data-cy=createuser-button]').click();
    cy.get('[data-cy=addID-input]').type(id);
    cy.get('[data-cy=addname-input]').type(name);
    cy.get('[data-cy=addlastname1-input]').type(lastname1);
    cy.get('[data-cy=addlastname2-input]').type(lastname2);
    cy.get('[data-cy=addemail-input]').type(email);
    cy.get('[data-cy=addgender-select]').click();
    cy.contains('.ant-select-item-option-content', gender).click();
    cy.get('[data-cy=addcountry-select]').click();
    cy.contains('.ant-select-item-option-content', country).click();
    cy.get('[data-cy=addstate-select]').click();
    cy.contains('.ant-select-item-option-content', state).click();
    cy.get('[data-cy=addusertype-select]').click();
    cy.contains('.ant-select-item-option-content', role).click();
    cy.get('[data-cy=addusername-input]').type(username);
    cy.get('[data-cy=adduserpassword-input]').type(password);
    cy.get('[data-cy=saveuser-button]').click();
    cy.get('[data-cy=closepopup-button]').click();
    cy.reload();
    cy.wait(1000);
  }

  deleteUser(username) {
    cy.get(`[data-cy=delete-${username}-button]`).click();
  };

  verifyUserExist(username) {
    cy.get(`[data-cy=${username}-tr]`).should('exist');
  };

  verifyUserNotExist(username) {
    cy.get(`[data-cy=${username}-tr]`).should('not.exist');
  };
};

export default Userlist;
