/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<Login />', () => {
  it('Admin user login process', () => {
    // Arrange
    home.visit();
    // Actions
    const { operatorHome } = home.login('chiqui', 'chiqui');
    // Asserts
    operatorHome.sideBarMenu.verifyUsernameText('chiqui');
    operatorHome.sideBarMenu.verifyRoleText('operator');
    operatorHome.sideBarMenu.verifyOptionExist('Park status');
    operatorHome.sideBarMenu.verifyOptionNotExist('User list');
    operatorHome.sideBarMenu.verifyOptionExist('Reservation list');
    operatorHome.sideBarMenu.verifyOptionNotExist('Reports');
    operatorHome.sideBarMenu.verifyOptionNotExist('Settings');
    operatorHome.sideBarMenu.verifyOptionExist('Log out');
  });
});
