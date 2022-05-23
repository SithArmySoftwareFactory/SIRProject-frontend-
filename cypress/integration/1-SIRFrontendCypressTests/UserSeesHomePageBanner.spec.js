

describe('user navigating to the homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should see a banner and a menu button', () => {
        cy.findByRole("banner").should('exist');
        cy.findByRole("img",{name: /army software factory icon/i}).should('exist');
    });

    it('',()=>{
        cy.findByText("Incident Report Form").should('exist');
    });

    it('should see an Incident Report Header', ()=>{
        cy.findByText(/incident report form/i).should('exist');
    });

    it('should see a date box',()=>{
        cy.findByText(/date of event/i).should('exist');
        cy.findAllByPlaceholderText('mm/dd/yyyy').should('exist');
        cy.findByRole('button',{name: /choose date/i}).should('exist');
    });
    it('should see a time box',()=>{
        cy.findByText(/time of event/i).should('exist');
        cy.findAllByPlaceholderText(/hh:mm/i).should('exist');
        cy.findByRole('button',{name: /choose time/i}).should('exist');
    });
    it('should see a location box',()=>{
        cy.findByText(/location of event/i).should('exist');
        cy.findByRole('textbox',({name: /location of event/i})).should('exist');
    });
    it('should see a event drop down',()=>{
        cy.findByText(/event type/i).should('exist');
        cy.findByRole('combobox',({name: /actual event incident/i})).should('exist');
    });
    it('should see a harm or potential harm drop down',()=>{
        cy.findByText(/harm or potential harm/i).should('exist');
        cy.findByRole('combobox',({name: /yes/i})).should('exist');
    });
    it('should see a individual involved check box',()=>{
        cy.findByText(/patient/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/patient/i})).should('exist');
        cy.findByText(/family member/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/family member/i})).should('exist');
        cy.findByText(/adult/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/adult/i})).should('be.disabled').should("exist");
        cy.findByText(/child < 18 years old/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/child/i})).should("be.disabled").should('exist');
        cy.findByText(/staff member/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/staff member/i})).should('exist');
        cy.findByText(/visitor/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/vistor/i})).should('exist');
        cy.findByText(/other/i).should('exist');
        cy.findByRole('checkbox',({checked:false,name:/other/i})).should('exist');
    });
    it('should see a type of event box',()=>{
        cy.findByText(/type of event/i).should('exist');
        cy.findByRole('textbox',({name: /type of event/i})).should('exist');
    });
    it('should see a location box',()=>{
        cy.findByText(/location of event/i).should('exist');
        cy.findByRole('textbox',({name: /location of event/i})).should('exist');
    });
    it('should see a effect of this incident on the individual(s) involved box',()=>{
        cy.findByText(/effect of this incident on the individual(s) involved/i).should('exist');
        cy.findByRole('combobox',({name: /effect of this incident on the individual(s) involved/i})).should('exist');
    });
    it('should see three witness name boxes',()=>{
        cy.findByText(/witness namet/i).should('exist');
        cy.findByRole('textbox',({name: /witness 1/i})).should('exist');
        cy.findByRole('textbox',({name: /witness 2/i})).should('exist');
        cy.findByRole('textbox',({name: /witness 3/i})).should('exist');
    });
    it('should see three witness telephone number boxes',()=>{
        cy.findByText(/witness telephone numbert/i).should('exist');
        cy.findByRole('textbox',({name: /witness 1 telephone/i})).should('exist');
        cy.findByRole('textbox',({name: /witness 2 telephone/i})).should('exist');
        cy.findByRole('textbox',({name: /witness 3 telephone/i})).should('exist');
    });
    it('should see department(s) involved in this incident box',()=>{
        cy.findByText(/department(s) involved in this incident/i).should('exist');
        cy.findByRole('textbox',({name: /departements involved/i})).should('exist');
    });
    it('should see description of incident box',()=>{
        cy.findByText(/description of incident/i).should('exist');
        cy.findByRole('textbox',({name: /departements of incident/i})).should('exist');
    });
    it('should see what actions, if any, could have been taken to prevent this incident from occuring box',()=>{
        cy.findByText(/what actions, if any, could have been taken to prevent this incident from occuring/i).should('exist');
        cy.findByRole('textbox',({name: /actions/i})).should('exist');
    });
    it('should see patient name or ID plate box',()=>{
        cy.findByText(/patient name or id plate/i).should('exist');
        cy.findByRole('textbox',({name: /patient name or id plate/i})).should('exist');
    });

    it('should see patient SNN',()=>{
        cy.findByText(/patient ssn/i).should('exist');
        cy.findByRole('textbox',({name: /patient ssn/i})).should('exist');
    });
    it('should see patient telephone number',()=>{
        cy.findByText(/patient telephone number/i).should('exist');
        cy.findByRole('textbox',({name: /patient telephone number/i})).should('exist');
    });
    it('should see patient address box',()=>{
        cy.findByText(/patient address box/i).should('exist');
        cy.findByRole('textbox',({name: /patient address/i})).should('exist');
    });
    it('should see submit button',()=>{
        cy.findByRole('button',({name:/submit/i})).should('exist').should("be.disabled");
    });
})
