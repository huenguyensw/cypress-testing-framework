import Homepage_PO from "../../support/pageObjects/Evernote/Homepage_PO";
import Note_Form_PO from "../../support/pageObjects/Evernote/Note_Form_PO";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

var title = "New note " + new Date().getTime();
var userCredentials = {};

Given("I access the Evernote portal page", () => {
    const homepage_PO = new Homepage_PO();
    homepage_PO.visitHomepage();
    //cy.get('.modal-close').click();
    homepage_PO.clickOn_LogIn_Button();
    cy.fixture('userCredentials').then(data => {
        userCredentials = data;
    });
});

When("I enter a username", () => {
    cy.get("#username").type(userCredentials.userName);
});

And("I enter an invalid password {word}", (password) => {
    cy.get("#loginButton").click();
    cy.get("#password").type(password);
});

And("I enter a password", () => {
    cy.get("#loginButton").click();
    cy.get("#password").type(userCredentials.password);
});

And("I click on the login button", () => {
    cy.get("#loginButton").click();
});

And("I create a new note", () => {
    cy.get('#qa-CREATE_NOTE').click();
    cy.get(".gFTtUgofaZevRPuVgjwI").contains('Note').then($link => {
        cy.get($link).click();
    });
    const noteForm_PO = new Note_Form_PO();
    noteForm_PO.NoteForm_Page().find(".P0rnC > textarea").should('exist').type(title);
    cy.wait(1500);
})

And("I log out", () => {
    cy.get('.PPxtw0kw4VI37OJ4B3Rm').should('exist').click();
    cy.get("#qa-ACCOUNT_DROPDOWN_LOGOUT").should('exist').click({ force: true });
    cy.get("#qa-LOGOUT_CONFIRM_DIALOG").then($dialog => {
        if (!$dialog) {
            cy.log("No dialog exist!");
        } else {
            cy.log("Has a Dialog!");
            cy.get("#qa-LOGOUT_CONFIRM_DIALOG_CANCEL").contains('Return to app').click();
            cy.wait(1500);
            cy.get('.PPxtw0kw4VI37OJ4B3Rm').click();
            cy.get("#qa-ACCOUNT_DROPDOWN_LOGOUT").should('exist').click({ force: true });
        }
    })
})

And("I open the newest note", () => {
    cy.get("#qa-NAV_ALL_NOTES").contains("Notes").click();
})

Then("I should be logged in successfully", () => {
    cy.get(".mjp8WyYQODySClV2byHt").then(($link) => {
        cy.get($link).should('exist').should('have.text', userCredentials.userName);
    });
})

Then("I should be logged in unsuccessfully", () => {
    cy.get(".FieldState_error-message").should('include.text', "Incorrect password.");
})

Then("I should be logged out successfully", () => {
    cy.get(".logout-content").should('exist').should('include.text', "You have logged out of Evernote.")
})

Then("The newest note should be opened", () => {
    const noteForm_PO = new Note_Form_PO();
    noteForm_PO.NoteForm_Page().find(".P0rnC > textarea").should('exist').should("have.value", title);
})