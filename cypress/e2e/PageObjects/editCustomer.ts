/// <reference types= "Cypress"/>

export default class EditCustomer{
    get customer() {
        return cy.get('[row-index="5"]')
    }

    get newCustomerFirstName() {
        return cy.get('[data-testid="inputCustomerFirstName"] .MuiInputBase-root .MuiInputBase-input')
    } 

    get newCustomerLastName() {
        return cy.get('[data-testid="inputCustomerLastName"] .MuiInputBase-root .MuiInputBase-input')
    } 

    waitForList(){
        cy.intercept('GET', 'https://api-iam.intercom.io/messenger/web/ping').as('list')
        cy.wait('@list')
    }
}