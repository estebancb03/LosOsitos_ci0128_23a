/// <reference types='cypress' />

import Home from '../pages/Home';
import Login from '../pages/Login';
import SideBarMenu from '../pages/SideBarMenu';

const home = new Home();
const login = new Login();
const sideBarMenu = new SideBarMenu();

describe('<Login />', () => {
  it('Admin user login process', () => {
    // Arrange
    home.visit();
    sideBarMenu.open();
    // Actions
    sideBarMenu.navigateToOption('Log in');
    login.insertUsername('estebancb');
    login.insertPassword('estebancb');
    login.submit();
    sideBarMenu.open();
    // Asserts
    sideBarMenu.verifyUsernameText('estebancb');
    sideBarMenu.verifyRoleText('administrator');
    sideBarMenu.verifyOptionExist('Park status');
    sideBarMenu.verifyOptionExist('User list');
    sideBarMenu.verifyOptionExist('Reservation list');
    sideBarMenu.verifyOptionExist('Reports');
    sideBarMenu.verifyOptionExist('Settings');
    sideBarMenu.verifyOptionExist('Log out');
  });
});
