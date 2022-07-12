/// <reference types= "Cypress"/>

import Login from "./PageObjects/login"
import AddCustomer from "./PageObjects/addCustomer"
import Common from "./PageObjects/Common"
import EditCustomer from "./PageObjects/editCustomer"
import DeleteCustomer from "./PageObjects/deleteCustomer"
import Logout from "./PageObjects/logout"

const LOGIN = new Login()
const ADDCUSTOMER = new AddCustomer()
const COMMON = new Common()
const EDITCUSTOMER = new EditCustomer()
const DELETECUSTOMER = new DeleteCustomer()
const LOGOUT = new Logout()


describe('Login', function() {

    it('Login with a user', function() {
        LOGIN.navigate();
        LOGIN.enterUsername();
        LOGIN.enterPassword();
        LOGIN.submit();
    });
});

describe('Add Customer', function() {
    it('Create a Customer', function() {
        ADDCUSTOMER.waitTillPageAppears();
       
        ADDCUSTOMER.app
        .should('be.visible')

        ADDCUSTOMER.mainTab
        .should('be.visible')

        ADDCUSTOMER.addButton
        .should('be.visible')
        .click()

        ADDCUSTOMER.addRoleList
        .should('be.visible')
        .and('have.length', 8)

        ADDCUSTOMER.addNewCustomer
        .should('be.visible')
        .click()

        ADDCUSTOMER.waitForCustomerPage();
       
        COMMON.newCustomerPage
        .should('be.visible')

        COMMON.newCustomerSaveTag
        .should('be.visible')
        .and('have.text', 'Not saved')

        ADDCUSTOMER.newCustomerFirstName
        .should('be.visible')
        .type('Test')

        ADDCUSTOMER.newCustomerLastName
        .should('be.visible')
        .type('Khan')

        ADDCUSTOMER.newCustomerBillingAddress
        .should('be.visible')
        .click()

        COMMON.cancelButton
        .should('be.visible')
        .click()

        ADDCUSTOMER.newCustomerCompanyName
        .should('be.visible')
        .type('Katana')

        ADDCUSTOMER.newCustomerShippingAddress
        .should('be.visible')
        .click()

        COMMON.cancelButton
        .should('be.visible')
        .click()
        
        ADDCUSTOMER.newCustomerDisplayName
        .should('be.visible')
       
        ADDCUSTOMER.newCustomerEmail
        .should('be.visible')
        .type('khanrifaq@gmail.com')
        
        ADDCUSTOMER.newCustomerPhone
        .should('be.visible')
        .type('55005500')

        ADDCUSTOMER.newCustomerComment
        .should('be.visible')
        .type('Test Assignment')
        
        COMMON.newCustomerThreedot
        .should('be.visible')

        ADDCUSTOMER.newCustomerName
        .should('be.visible')
        .and('contain.text', 'Test Khan')

        COMMON.newCustomerCloseCursor
        .should('be.visible')
        .click({force: true})

        COMMON.waitForCustomer();

        COMMON.customerList
        .should('be.visible')
        .contains('Test Khan')
    });
});

describe('Edit Customer', function() {

    it('Edit Customer', function() {
        COMMON.newCustomerPage
        .should('be.visible')

        EDITCUSTOMER.customer
        .should('be.visible')
        .contains('Test Khan')
        .click()

        EDITCUSTOMER.newCustomerFirstName
        .should('be.visible')
        .clear()
        .type('Tallinn')

        EDITCUSTOMER.newCustomerLastName
        .should('be.visible')
        .clear()
        .type('11')

        ADDCUSTOMER.newCustomerDisplayName
        .should('be.visible')
        .clear()
        .type('Tallinn')

        ADDCUSTOMER.newCustomerBillingAddress
        .should('be.visible')
        .click()

        COMMON.cancelButton
        .should('be.visible')
        .click()

        ADDCUSTOMER.newCustomerShippingAddress
        .should('be.visible')
        .click()

        COMMON.cancelButton
        .should('be.visible')
        .click()

        COMMON.newCustomerThreedot
        .should('be.visible')

        COMMON.newCustomerCloseCursor
        .should('be.visible')
        .click({force: true})

        COMMON.customerList
        .should('be.visible')
        .contains('Tallinn')
    });
});

describe('Delete Customer', function(){
    it('Delete Customer', function(){
        COMMON.customerList
        .should('be.visible')
        .contains('Tallinn')
        .click()

        COMMON.newCustomerPage
        .should('be.visible')

        COMMON.newCustomerThreedot
        .should('be.visible')
        .click()

        DELETECUSTOMER.deleteCustomer
        .should('be.visible')
        .click()

        DELETECUSTOMER.deleteCustomerNo
        .should('be.visible')

        DELETECUSTOMER.deleteCustomerYes
        .should('be.visible')
        .click()

        COMMON.customerList
        .should('be.visible')
    });
});
describe('Logout', function(){
    it('Logout', function(){
        ADDCUSTOMER.app
        .should('be.visible')

        ADDCUSTOMER.mainTab
        .should('be.visible')

        LOGOUT.getProfile
        .should('be.visible')
        .click()

        LOGOUT.clickLogout
        .should('be.visible')
        .click()
    })
})

