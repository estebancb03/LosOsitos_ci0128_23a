/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();



describe('<ParkStatus />', () => {
        it('shows data of a date', () => {
            // Arrange
            home.visit();
            const { adminHome } = home.login('dylantr', 'dylantr');
            adminHome.sideBarMenu.navigateToOption('Park Status');

            // Act
            adminHome.parkStatus.inputDate('01/05/2023');
            
            //Assert
            adminHome.parkStatus.verifyPeopleAmount();

        })
});