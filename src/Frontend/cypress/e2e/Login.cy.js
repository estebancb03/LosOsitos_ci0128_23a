/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<Login />', () => {
  it('Default user options', () => {
    // Arrange
    home.visit();
    // Actions
    home.sideBarMenu.clickMenu();
    // Asserts
    home.sideBarMenu.verifyOptionExist('Reservation');
    home.sideBarMenu.verifyOptionExist('Log in');
    home.sideBarMenu.verifyOptionNoExist('Park status');
    home.sideBarMenu.verifyOptionNoExist('User list');
    home.sideBarMenu.verifyOptionNoExist('Reservation list');
    home.sideBarMenu.verifyOptionNoExist('Reports');
    home.sideBarMenu.verifyOptionNoExist('Settings');
    home.sideBarMenu.verifyOptionNoExist('Log out');
  });

  it('Admin user login process', () => {
    // Arrange
    home.visit();
    // Actions
    const { adminHome } = home.login('estebancb', 'estebancb');
    // Asserts
    adminHome.sideBarMenu.verifyUsernameText('estebancb');
    adminHome.sideBarMenu.verifyRoleText('administrator');
    adminHome.sideBarMenu.verifyOptionExist('Park status');
    adminHome.sideBarMenu.verifyOptionExist('User list');
    adminHome.sideBarMenu.verifyOptionExist('Reservation list');
    adminHome.sideBarMenu.verifyOptionExist('Reports');
    adminHome.sideBarMenu.verifyOptionExist('Settings');
    adminHome.sideBarMenu.verifyOptionExist('Log out');
  });

  it('Operator user login process', () => {
    // Arrange
    home.visit();
    // Actions
    const { operatorHome } = home.login('chiqui', 'chiqui');
    // Asserts
    operatorHome.sideBarMenu.verifyUsernameText('chiqui');
    operatorHome.sideBarMenu.verifyRoleText('operator');
    operatorHome.sideBarMenu.verifyOptionExist('Park status');
    operatorHome.sideBarMenu.verifyOptionNoExist('User list');
    operatorHome.sideBarMenu.verifyOptionExist('Reservation list');
    operatorHome.sideBarMenu.verifyOptionNoExist('Reports');
    operatorHome.sideBarMenu.verifyOptionNoExist('Settings');
    operatorHome.sideBarMenu.verifyOptionExist('Log out');
  });
});
