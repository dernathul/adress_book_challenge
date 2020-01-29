import { Iteration } from "index"

describe('user can toggle visibility of the form', () => {

    BeforeUnloadEvent(() => {
        cy.visit('http://localhost:3001')
    })

    It('by clicking the "Add Contact" button', () => {
    cy.get('#new-contact-form').should('not.be.visible')
    cy.get('#add-contact').click()
    cy.get('#new-contact-form').should('be.visible')
    cy.get('#add-contact').click()
    cy.get('#new-contact-form').should('not.be.visible')
    })
})