/// <reference types= "Cypress"/>

export default class AddCustomer {
    waitTillPageAppears(){
        cy.intercept('GET', '/api/pdf-templates').as('Page')
        cy.wait('@Page')
    }

    get app() {
        return cy.get('#app')
    }

    get mainTab() {
        return cy.get('.jss13') 
    }

    get addButton() {
        return cy.get('#globalAdd')
    }

    get addRoleList() {
        return cy.get('.MuiList-root [role="menuitem"]')
    } 

    get addNewCustomer() {
        return cy.get('#add-customer')
    }

    waitForCustomerPage(){
        cy.intercept('GET', 'https://currencies.katanamrp.com/api/currencies').as('Currency')
        cy.wait('@Currency')
    }

    get newCustomerFirstName() {
        return cy.get('[data-testid="inputCustomerFirstName"]')
    } 

    get newCustomerLastName() {
        return cy.get('[data-testid="inputCustomerLastName"]')
    } 

    get newCustomerBillingAddress() {
        return cy.get('[data-testid="inputCustomerDefaultBillingAddress"]')
    } 

    get newCustomerCompanyName() {
        return cy.get('[data-testid="inputCustomerCompany"]')
    } 

    get newCustomerShippingAddress() {
        return cy.get('[data-testid="inputCustomerDefaultShippingAddress"]')
    } 

    get newCustomerDisplayName() {
        return cy.get('#displayNamePicker')
    } 

    get newCustomerEmail() {
        return cy.get('[data-testid="inputCustomerEmail"]')
    } 

    get newCustomerPhone() {
        return cy.get('[data-testid="inputCustomerPhone"]')
    } 

    get newCustomerComment() {
        return cy.get('[data-testid="inputCustomerComment"]')
    } 
    get newCustomerName() {
        return cy.get('[data-testid="header-name-customer"]')
    } 
}