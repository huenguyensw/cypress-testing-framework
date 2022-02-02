class Homepage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("Evernote_homepage"));
    }
    clickOn_LogIn_Button() {
        cy.get('.drawer-nav-open-btn > img').click();
        cy.get(".nav-label").contains('Log In').click();
    }
}
export default Homepage_PO;