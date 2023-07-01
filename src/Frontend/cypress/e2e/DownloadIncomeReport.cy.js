/// <reference types='cypress' />

import Home from '../pages/Home';
import Login from '../pages/Login';
import SideBarMenu from '../pages/SideBarMenu';
import Reports from '../pages/Reports';

const home = new Home();
const reports = new Reports();

describe('<Reports />', () => {
  it('Download income report', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('israellv', 'israellv');
    adminHome.sideBarMenu.navigateToOption('Reports');
    // Act
    adminHome.reports.selectReportType('Income');
    adminHome.reports.selectStartDate('2023-05-01');
    adminHome.reports.selectEndDate('2023-05-31');
    adminHome.reports.download();
    // Assert
  })
});