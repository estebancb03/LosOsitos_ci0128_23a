/// <reference types='cypress' />

import Home from '../pages/Home';
import Login from '../pages/Login';
import SideBarMenu from '../pages/SideBarMenu';
import Reports from '../pages/Reports';

const home = new Home();
const login = new Login();
const sideBarMenu = new SideBarMenu();
const reports = new Reports();

describe('<Reports />', () => {
  it('Download income report', () => {
    // Arrange
    home.visit();
    sideBarMenu.open();
    sideBarMenu.navigateToOption('Log in');
    login.insertUsername('israellv');
    login.insertPassword('israellv');
    login.submit();
    sideBarMenu.open();
    sideBarMenu.navigateToOption('Reports');
    // Act
    reports.selectReportType('Income');
    reports.selectStartDate('2023-05-01');
    reports.selectEndDate('2023-05-31');
    reports.download();
    // Assert
  })
});