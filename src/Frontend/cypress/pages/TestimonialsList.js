class TestimonialsList {
    constructor() {
      this.url = 'admin/testimonials-list';
      this.title = 'Testimonials list';
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    verifyPendingTestimonialExist(client) {
      cy.get(`[data-cy=${client}-pending-testimonial]`).should('exist');
    };
  
    verifyApprovedTestimonialExist(client) {
      cy.get(`[data-cy=${client}-approved-testimonial]`).should('exist');
    };
  
    verifyPendingTestimonialNoExist(client) {
      cy.get(`[data-cy=${client}-pending-testimonial]`).should('not.exist');
    };
  
    verifyApprovedTestimonialNoExist(client) {
      cy.get(`[data-cy=${client}-approved-testimonial]`).should('not.exist');
    };
  
    approve(client) {
      cy.get(`[data-cy=${client}-testimonial-approve-button]`).click();
    };
  
    denny(client) {
      cy.get(`[data-cy=${client}-testimonial-deny-button]`).click();
    };
  };
  
  export default TestimonialsList;