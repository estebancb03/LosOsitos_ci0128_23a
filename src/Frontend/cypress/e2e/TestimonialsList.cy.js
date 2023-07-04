/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<Testimonials />', () => {
  it('Testimonial approval process', () => {
    // Arrange
    home.visit();
    home.testimonials.visit();
    // Actions
    home.testimonials.writeTestimonial('123456789', 'Test testimonial');
    const { adminHome } = home.login('daniellm', 'daniellm');
    adminHome.sideBarMenu.navigateToOption('Testimonials list');
    // Asserts
    adminHome.testimonialsList.verifyPendingTestimonialExist('Test');
    adminHome.testimonialsList.verifyApprovedTestimonialNoExist('Test');
    // Actions
    adminHome.testimonialsList.approve('Test');
    // Asserts
    adminHome.testimonialsList.verifyPendingTestimonialNoExist('Test');
    adminHome.testimonialsList.verifyApprovedTestimonialExist('Test');
  });
});