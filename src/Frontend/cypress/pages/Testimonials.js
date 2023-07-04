class Testimonials {
    constructor() {
      this.url = '/testimonials';
      this.title = 'Testimonials';
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    writeTestimonial(id, comment) {
      cy.get('[data-cy=id-input]').type(id);
      cy.get('[data-cy=comment-textarea]').type(comment);
      cy.get('[data-cy=submit-button]').click();
    };
  
    verifyTestimonial() {
      cy.get('[data-cy=success-alert]').should('exist');
    }
  };
  
  export default Testimonials;