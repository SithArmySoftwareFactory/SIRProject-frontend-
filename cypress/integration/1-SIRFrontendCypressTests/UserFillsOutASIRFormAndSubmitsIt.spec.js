describe('user filling out form and submitting to the db', () => {
    before(() => {
        cy.visit('/')
    });

    it('should be able to fill out the date box and should not be able to submit', () => {
        cy.findAllByPlaceholderText('mm/dd/yyyy').clear().type('06/01/2022');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });

    it('should be able to fill out the time box', () => {
        cy.findAllByPlaceholderText(/hh:mm/i).clear().type('1200a');
        cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });

    it('should see a location box', () => {
        cy.findByText(/location of event/i).siblings().last().children().last().children().last().should('exist');
    });
});