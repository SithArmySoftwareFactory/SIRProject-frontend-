describe('user opens up a report on the Supervisor View', () => {
    before(() => {
        cy.visit('/supervisor')
    });
    it('should be able to click on the view button', ()=> {
        cy.findAllByText(/view/i).first().click();
        cy.findAllByText(/incident report/i).first().should('exist');
    });
    it('should see a date box in the modal', () => {
        cy.findByText(/date of event/i).should('exist');
        cy.findByPlaceholderText('mm/dd/yyyy').should('exist');
        cy.findByRole('button', {name: /choose date/i}).should('exist');
    });
    it('should see a time box in the modal', () => {
        cy.findByText(/time of event/i).should('exist');
        cy.findByPlaceholderText(/hh:mm/i).should('exist');
        cy.findByRole('button', {name: /choose time/i}).should('exist');
    });
    it('should see a location box in the modal', () => {
        cy.findByText(/location of event/i).should('exist');
        cy.findByText(/location of event/i).siblings().last().children().last().children().first().should('exist');
    });
    it('should see a event drop down in the modal', () => {
        cy.findAllByText(/event type/i).last().should('exist');
        cy.findAllByText(/event type/i).last().siblings().first().should('exist');
        // cy.findByRole('button', {  name: /actual event\/incident/i}).should('exist');
    });
    it('should see a harm or potential harm drop down in the modal', () => {
        cy.findByText(/harm or potential harm/i).should('exist');
        cy.findByText(/harm or potential harm/i).siblings().first().should('exist');
        // cy.findByRole('button',{name:/yes/i}).should('exist');
    });
    it('should see a individual involved check box in the modal', () => {
        cy.findAllByText(/patient/i).first().should('exist');
        cy.findByRole('checkbox', ({name: /patient/i})).should('exist');
        cy.findAllByText(/family member/i).last().should('exist');
        cy.findByRole('checkbox', ({ name: /family member/i})).should('exist');
        cy.findByText(/adult/i).should('exist');
        cy.findByRole('checkbox', ({name: /adult/i})).should('exist');
        cy.findByRole('checkbox', ({name: /adult/i})).should('be.disabled');

        cy.findByText(/child <18 years old/i).should('exist');
        cy.findByRole('checkbox', ({name: /child/i})).should('exist');
        cy.findByRole('checkbox', ({name: /child/i})).should("be.disabled");
        cy.findByText(/staff member/i).should('exist');
        cy.findByRole('checkbox', ({name: /staff member/i})).should('exist');
        cy.findByText(/visitor/i).should('exist');
        cy.findByRole('checkbox', ({name: /visitor/i})).should('exist');
        cy.findAllByText(/other/i).last().should('exist');
        cy.findByRole('checkbox', ({name: /other/i})).should('exist');
    });
    it('should see a type of event box in the modal', () => {
        cy.findByText(/type of event/i).should('exist');
        cy.findByText(/type of event/i).siblings().last().children().children().children().children().first().should('exist');
    });

    it('should see a effect of this incident on the individual(s) involved box in the modal', () => {
        cy.findByText(/effect of this incident on the individual\(s\) involved/i).should('exist');
        cy.findByText(/effect of this incident on the individual\(s\) involved/i).siblings().last().children().last().children().first().should('exist');
    });
    it('should see three witness name boxes in the modal', () => {
        cy.findByText(/witness name/i).should('exist');
        cy.findByText(/witness name/i).siblings().first().children().last().children().last().should('exist');
        cy.findByText(/witness name/i).siblings().first().next().children().last().children().last().should('exist');
        cy.findByText(/witness name/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see three witness telephone number boxes in the modal', () => {
        cy.findByText(/witness telephone number/i).should('exist');
        cy.findByText(/witness telephone number/i).siblings().first().children().last().children().last().should('exist');
        cy.findByText(/witness telephone number/i).siblings().first().next().children().last().children().last().should('exist');
        cy.findByText(/witness telephone number/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see department(s) involved in this incident box in the modal', () => {
        cy.findByText(/department\(s\) involved in this incident/i).should('exist');
        cy.findByText(/department\(s\) involved in this incident/i).siblings().last().should('exist');
    });
    it('should see description of incident box in the modal', () => {
        cy.findByText(/description of incident/i).should('exist');
        cy.findByText(/description of incident/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see what actions, if any, could have been taken to prevent this incident from occurring box in the modal', () => {
        cy.findByText(/what actions, if any, could have been taken to prevent this incident from occurring/i).should('exist');
        cy.findByText(/what actions, if any, could have been taken to prevent this incident from occurring/i).siblings().first().next().next().next().next().children().last().children().first().should('exist');
    });
    it('should see patient name or ID plate box in the modal', () => {
        cy.findByText(/patient name or id plate/i).should('exist');
        cy.findByText(/patient name or id plate/i).siblings().last().children().last().children().first().should('exist');
    });

    it('should see patient SSN in the modal', () => {
        cy.findByText(/patient ssn/i).should('exist');
        cy.findByText(/patient ssn/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see patient telephone number in the modal', () => {
        cy.findByText(/patient telephone number/i).should('exist');
        cy.findByText(/patient telephone number/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see patientAddress box in the modal', () => {
        cy.findByText(/patient Address/i).should('exist');
        cy.findByText(/patient Address/i).siblings().last().children().last().children().last().should('exist');
    });


});