/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<Login />', () => {
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
});
