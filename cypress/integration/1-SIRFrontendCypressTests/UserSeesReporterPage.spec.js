describe('user navigating to the homepage', () => {
    before(() => {
        cy.visit('/')
    });

    it('should see a banner and a menu button', () => {
        cy.findByRole("banner").should('exist');
        cy.findByRole("img", {name: /army software factory icon/i}).should('exist');
    });

    it('should see an Incident Report Header', () => {
        cy.findByText(/incident report form/i).should('exist');
    });

    it('should see a date box', () => {
        cy.findByText(/date of event/i).should('exist');
        cy.findByPlaceholderText('mm/dd/yyyy').should('exist');
        cy.findByRole('button', {name: /choose date/i}).should('exist');
    });
    it('should see a time box', () => {
        cy.findByText(/time of event/i).should('exist');
        cy.findByPlaceholderText(/hh:mm/i).should('exist');
        cy.findByRole('button', {name: /choose time/i}).should('exist');
    });
    it('should see a location box', () => {
        cy.findByText(/location of event/i).should('exist');
        cy.findByText(/location of event/i).siblings().last().children().last().children().first().should('exist');
    });
    it('should see a event drop down', () => {
        cy.findByText(/event type/i).should('exist');
        cy.findByText(/event type/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see a harm or potential harm drop down', () => {
        cy.findByText(/harm or potential harm/i).should('exist');
        cy.findByText(/harm or potential harm/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see a individual involved check box', () => {
        cy.findAllByText(/patient/i).first().should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /patient/i})).should('exist');
        cy.findByText(/family member/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /family member/i})).should('exist');
        cy.findByText(/adult/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /adult/i})).should('be.disabled').should("exist");
        cy.findByText(/child <18 years old/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /child/i})).should("be.disabled").should('exist');
        cy.findByText(/staff member/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /staff member/i})).should('exist');
        cy.findByText(/visitor/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /visitor/i})).should('exist');
        cy.findByText(/other/i).should('exist');
        cy.findByRole('checkbox', ({checked: false, name: /other/i})).should('exist');
    });
    it('should see a type of event box', () => {
        cy.findByText(/type of event/i).should('exist');
        cy.findByText(/type of event/i).siblings().last().should('exist');
    });

    it('should see a effect of this incident on the individual(s) involved box', () => {
        cy.findByText(/effect of this incident on the individual\(s\) involved/i).should('exist');
        cy.findByText(/effect of this incident on the individual\(s\) involved/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see three witness name boxes', () => {
        cy.findByText(/witness name/i).should('exist');
        cy.findByText(/witness name/i).siblings().first().children().last().children().last().should('exist');
        cy.findByText(/witness name/i).siblings().first().next().children().last().children().last().should('exist');
        cy.findByText(/witness name/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see three witness telephone number boxes', () => {
        cy.findByText(/witness telephone number/i).should('exist');
        cy.findByText(/witness telephone number/i).siblings().first().children().last().children().last().should('exist');
        cy.findByText(/witness telephone number/i).siblings().first().next().children().last().children().last().should('exist');
        cy.findByText(/witness telephone number/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see department(s) involved in this incident box', () => {
        cy.findByText(/department\(s\) involved in this incident/i).should('exist');
        cy.findByText(/department\(s\) involved in this incident/i).siblings().last().should('exist');
    });
    it('should see description of incident box', () => {
        cy.findByText(/description of incident/i).should('exist');
        cy.findByText(/description of incident/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see what actions, if any, could have been taken to prevent this incident from occurring box', () => {
        cy.findByText(/what actions, if any, could have been taken to prevent this incident from occurring/i).should('exist');
        cy.findByText(/what actions, if any, could have been taken to prevent this incident from occurring/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see patient name or ID plate box', () => {
        cy.findByText(/patient name or id plate/i).should('exist');
        cy.findByText(/patient name or id plate/i).siblings().last().children().last().children().last().should('exist');
    });

    it('should see patient SSN', () => {
        cy.findByText(/patient ssn/i).should('exist');
        cy.findByText(/patient ssn/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see patient telephone number', () => {
        cy.findByText(/patient telephone number/i).should('exist');
        cy.findByText(/patient telephone number/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see patientAddress box', () => {
        cy.findByText(/patient Address/i).should('exist');
        cy.findByText(/patient Address/i).siblings().last().children().last().children().last().should('exist');
    });
    it('should see submit button', () => {
        cy.findByRole('button', ({name: /submit/i})).should('exist').should("be.disabled");
    });
})