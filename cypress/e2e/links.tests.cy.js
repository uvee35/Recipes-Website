/*
* Cypress tests to handle the following scenarios:
* 1. Links from index
* 2. Header and footer
*/

describe('Links Tests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5504/Eataway-Website/');
    });

    it('Links to subscribe', () => {
        cy.log('In links to subscribe test');
        cy.get('[data-cy=subscribe-link]').click();
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/html/subscriber.html');
        cy.go('back');
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/');
    });

    it('Links to receipe', () => {
        cy.log('In links to receipe test');
        cy.get('[data-cy=recipe-link]').click();
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/html/receipe.html');
        cy.go('back');
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/');
    });

    it('Links to planner', () => {
        cy.log('In links to planner test');
        cy.get('[data-cy=planner-link]').click();
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/html/planner.html');
        cy.go('back');
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/');
    });

    it('Links to forum', () => {
        cy.log('In links to forum test');
        cy.get('[data-cy=forum-link]').click();
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/html/forum.html');
        cy.go('back');
        cy.url().should('eq', 'http://127.0.0.1:5504/Eataway-Website/');
    });
});
