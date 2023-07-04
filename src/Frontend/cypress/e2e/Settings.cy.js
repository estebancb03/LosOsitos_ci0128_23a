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
  /*
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
    adminHome.settings.editService(modifiedTestService.name, testService);
    adminHome.settings.deleteService(testService);
    // Assert
    adminHome.settings.verifyServiceDeletion(testService);
  });

  it('update a Camping Capacity process', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('dylantr', 'dylantr');
    adminHome.sideBarMenu.navigateToOption('Settings');

    // Act
    adminHome.settings.editCampingCapacityValues('10', '20');

    // Assert
    adminHome.settings.verifyCampingCapacityValues('10', '20');
  });
  */

  

  it('update a Exchange Rate value process', () => {
    // Arrange
    home.visit();
    const { adminHome } = home.login('dylantr', 'dylantr');
    adminHome.sideBarMenu.navigateToOption('Settings');

    // Act
    adminHome.settings.editExchangeRateValues('10');

    // Assert
    adminHome.settings.verifyExchangeRateValues('10');
  });
});
