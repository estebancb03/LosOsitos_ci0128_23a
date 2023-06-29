class Reports {
  constructor() {
    this.url = '/reports'
    this.title = 'Reports'
  }

  visit() {
    cy.visit(this.url);
  };

  selectReportType(type) {
    cy.get('[data-cy=select-report-type-dropdown]').click();
    cy.contains('.ant-select-item-option-content', type).click();
  }

  selectStartDate(date) {
    cy.get('[data-cy=startdate-datepicker]').click();
    cy.get('.ant-picker-cell-in-view').contains(date).click();
  }

  selectEndDate(date) {
    cy.get('[data-cy=enddate-datepicker]').click();
    cy.get('.ant-picker-cell-in-view').contains(date).click();
  }

  download() {
    cy.get('[data-cy=download-report-button]').click();
  }
}

export default Reports;
