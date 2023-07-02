/// <reference types='cypress' />

import Home from "../pages/Home";

const home = new Home();

const testService = {
  name: 'Test',
  inventory: '0',
  usdPrice: 10,
  crcPrice: 10
}

const modifiedTestService = {
  name: 'Modified',
  inventory: 1,
  usdPrice: 100,
  crcPrice: 100
}

describe('<Settings />', () => {
  it('Create service process', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('carlosqe', 'carlosqe');
    adminHome.sideBarMenu.navigateToOption('Settings');
    // Act
    adminHome.settings.startServiceCreation();
    adminHome.settings.createService(testService);
    // Assert
    adminHome.settings.verifyServiceCreation(testService);
    adminHome.settings.verifyServiceValues(testService);
  });

  it('Edit service process', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('carlosqe', 'carlosqe');
    adminHome.sideBarMenu.navigateToOption('Settings');
    // Act
    adminHome.settings.editService(testService.name, modifiedTestService);
    // Assert
    adminHome.settings.verifyServiceValues(modifiedTestService);
  });

  it('Delete service process', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('carlosqe', 'carlosqe');
    adminHome.sideBarMenu.navigateToOption('Settings');
    // Act
    adminHome.settings.deleteService(modifiedTestService);
    // Assert
    adminHome.settings.verifyServiceDeletion(modifiedTestService);
  });
});
