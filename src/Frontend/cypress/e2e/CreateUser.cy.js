/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<UserList />', () => {
  it('Operator user registration process', () => {
    // Arrange
    home.visit();
    // Actions
    const { adminHome } = home.login('estebancb', 'estebancb');
    adminHome.sideBarMenu.navigateToOption('User list');
    adminHome.userList.createUser({
      id: '123456789',
      name: 'Test',
      lastname1: 'Test',
      lastname2: 'Test',
      email: 'test@gmail.com',
      gender: 'Female',
      country: 'Costa Rica',
      state: 'Guanacaste',
      role: 'Operator',
      username: 'test',
      password: 'test1234'
    });
    // Asserts
    adminHome.userList.verifyUserExist('test');
  });
});