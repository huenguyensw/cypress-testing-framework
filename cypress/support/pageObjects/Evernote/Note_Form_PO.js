class Note_Form_PO {
    NoteForm_Page() {
        const getIframeDocument = () => {
            return cy
                .get('iframe#qa-COMMON_EDITOR_IFRAME')
                // Cypress yields jQuery element, which has the real
                // DOM element under property "0".
                // From the real DOM iframe element we can get
                // the "document" element, it is stored in "contentDocument" property
                // Cypress "its" command can access deep properties using dot notation
                // https://on.cypress.io/its
                .its('0.contentDocument').should('exist')
        }

        const getIframeBody = () => {
            // get the document
            return getIframeDocument()
                // automatically retries until body is loaded
                .its('body').should('not.be.undefined')
                // wraps "body" DOM element to allow
                // chaining more Cypress commands, like ".find(...)"
                .then(cy.wrap);
        }
        getIframeBody();
        cy.wait(2000);
        return getIframeBody();
    }
}

export default Note_Form_PO;