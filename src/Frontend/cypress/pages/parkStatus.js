import path from "path";

class ParkStatus {
    constructor() {
      this.url = 'admin/park-status'
      this.title = 'ParkStatus'
    }

    visit() {
      cy.visit(this.url);
    };

    inputDate(date) {
        cy.get('[data-cy=DatePicker-Park-Status]').click().type(date);
    }

    verifyPeopleAmount(){
        cy.get('[data-cy=Title-People-Amount]').click();
        cy.get('[data-cy=Title-People-Amount]').should('exist');
        cy.get('[data-cy=Title-People-Amount]').invoke('text').should('equal', '0');
    }

}

export default ParkStatus;