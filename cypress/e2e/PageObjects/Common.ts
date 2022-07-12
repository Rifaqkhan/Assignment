/// <reference types= "Cypress"/>

export default class Common{
    get validateApp() {
        return cy.get('#app')
    }

    get validateMainTab() {
        return cy.get('.jss13') 
    }

    get newCustomerPage() {
        return cy.get('.sc-eCApnc')
    } 
    
    get newCustomerSaveTag() {
        return cy.get('.katana-label')
    } 

    get newCustomerThreedot() {
        return cy.get('span.print-hide .MuiButtonBase-root')
    } 

    get newCustomerCloseCursor() {
        return cy.get('.MuiButtonBase-root.print-hide')
    } 

    waitForCustomer(){
        cy.intercept('GET', 'https://customers.katanamrp.com/api/customers?filter=%7B%22skip%22:0,%22limit%22:100,%22where%22:%7B%7D%7D').as('Customer')
        cy.wait('@Customer')
    }

    get customerList() {
        return cy.get('.container-fluid')
    } 

    get cancelButton() {
        return cy.get('[data-testid="cancelButton"]')
    } 

}