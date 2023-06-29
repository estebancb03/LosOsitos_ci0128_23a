/// <reference types='cypress' />

import Home from '../pages/Home';
import Login from '../pages/Login';
import SideBarMenu from '../pages/SideBarMenu';

const home = new Home();
const login = new Login();
const sideBarMenu = new SideBarMenu();

describe('<Login />', () => {
  it('Operator user login process', () => {
    // Arrange
    home.visit();
    sideBarMenu.open();
    // Actions
    sideBarMenu.navigateToOption('Log in');
    login.insertUsername('chiqui');
    login.insertPassword('chiqui');
    login.submit();
    sideBarMenu.open();
    // Asserts
    sideBarMenu.verifyUsernameText('chiqui');
    sideBarMenu.verifyRoleText('operator');
    sideBarMenu.verifyOptionExist('Park status');
    sideBarMenu.verifyOptionNotExist('User list');
    sideBarMenu.verifyOptionExist('Reservation list');
    sideBarMenu.verifyOptionNotExist('Reports');
    sideBarMenu.verifyOptionNotExist('Settings');
    sideBarMenu.verifyOptionExist('Log out');
  });
});
