/// <reference types='cypress' />

import Home from '../pages/Home';

const home = new Home();

describe('<Testimonials />', () => {
  it('Insert testimonial process', () => {
    // Arrange
    home.visit();
    home.testimonials.visit();
    // Actions
    home.testimonials.writeTestimonial('123456789', 'Test testimonial');
    // Asserts
    home.testimonials.verifyTestimonial();
  });
});