import path from "path";

class Reports {
  constructor() {
    this.url = 'admin/reports'
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
    cy.get('[data-cy=startdate-datepicker]').click().type(date);
  }

  selectEndDate(date) {
    cy.get('[data-cy=enddate-datepicker]').click().type(date);
  }

  download() {
    cy.get('[data-cy=download-report-button]').click();
  }

  verifyDownload(filename, extension) {
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, `${filename}.${extension}`)).should("exist");
  }
}

export default Reports;
