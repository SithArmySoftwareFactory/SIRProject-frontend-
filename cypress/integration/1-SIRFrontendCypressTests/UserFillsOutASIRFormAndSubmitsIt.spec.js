describe('user filling out form and submitting to the db', () => {
    before(() => {
        cy.visit('/')
    });

    it('should be able to fill out the date box and should not be able to submit', () => {
        cy.findByPlaceholderText('mm/dd/yyyy').clear().type('06/01/2022');
        cy.findByDisplayValue('06/01/2022').should('exist');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });

    it('should be able to fill out the time box and should not be able to submit', () => {
        cy.findByPlaceholderText(/hh:mm/i).clear().type('1200a');
        cy.findByDisplayValue('12:00 am').should('exist');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });

    it('should be able to fill out the location box and not be able to submit', () => {
        cy.findByText(/location of event/i).siblings().last().children().last().children().first().type('1212 Rio Grande St, Austin, TX 78701');
        cy.findByDisplayValue('1212 Rio Grande St, Austin, TX 78701').should('exist');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });

    it('should see a event drop down', () => {
        cy.findByRole('button', {  name: /actual event\/incident/i}).click();
        cy.findByRole('option', {  name: /near miss\/close call/i}).click();
        cy.findByDisplayValue(/near miss\/close call/i).should('exist');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });
});