/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

const incomeReportFileName = 'income_report';
const visitationReportFileName = 'visitation_report';
const reportsExtension = 'xlsx';

describe('<Reports />', () => {
  it('Download income report', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('israellv', 'israellv');
    adminHome.sideBarMenu.navigateToOption('Reports');
    // Act
    adminHome.reports.selectReportType('Income');
    adminHome.reports.selectStartDate('01/05/2023');
    adminHome.reports.selectEndDate('31/05/2023');
    adminHome.reports.download();
    // Assert
    adminHome.reports.verifyDownload(incomeReportFileName, reportsExtension);
  })

  it('Download visitation report', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('israellv', 'israellv');
    adminHome.sideBarMenu.navigateToOption('Reports');
    // Act
    adminHome.reports.selectReportType('Visitors');
    adminHome.reports.selectStartDate('01/05/2023');
    adminHome.reports.selectEndDate('31/05/2023');
    adminHome.reports.download();
    // Assert
    adminHome.reports.verifyDownload(visitationReportFileName, reportsExtension);
  })
});