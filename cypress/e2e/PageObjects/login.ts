/// <reference types= "Cypress"/>

export default class Login {
    navigate() {
        cy.visit('https://katanamrp.com/login')
    }

    enterUsername() {
        cy.get('[type="email"]')
            .clear()
            .type('khanrifaq@gmail.com')
        return this
    }

    enterPassword() {
        cy.get('[type="password"]')
            .clear()
            .type('Ultimatum12')
        return this
    }

    submit() {
        cy.get('[type="submit"]').click()
    }
}
