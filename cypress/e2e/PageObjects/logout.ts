export default  class Logout {

    get getProfile() {
        return cy.get('[data-testid="userInfoContainer"]') 
    }

    get clickLogout() {
        return cy.get('#logout')
    }

}
