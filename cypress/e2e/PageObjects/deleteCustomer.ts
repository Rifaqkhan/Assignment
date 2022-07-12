/// <reference types= "Cypress"/>

export default class DeleteCustomer{
    get deleteCustomer() {
        return cy.get('[data-testid="cardHeaderMenuButtonDELETE"]')
    }

    get deleteCustomerNo() {
        return cy.get('[data-testid="cancelDeleteButton"]')
    }

    get deleteCustomerYes() {
        return cy.get('[data-testid="confirmDeleteButton"]')
    }
}