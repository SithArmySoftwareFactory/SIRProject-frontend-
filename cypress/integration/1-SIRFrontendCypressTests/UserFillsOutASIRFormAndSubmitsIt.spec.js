import {click} from "@testing-library/user-event/dist/click";

describe('user filling out form and submitting to the db', () => {
    before(() => {
        cy.visit('/');
        cy.findByRole('link',{name:/submit report/i}).click();
    });

    it('should be able to fill out the date box and should not be able to submit', () => {
        cy.findByPlaceholderText('mm/dd/yyyy').clear();
        // cy.findByPlaceholderText('mm/dd/yyyy').clear().type('06/01/2022');
        // cy.findByDisplayValue('06/01/2022').should('exist');
        // cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    });
    //
    // it('should be able to fill out the time box and should not be able to submit', () => {
    //     cy.findByPlaceholderText(/hh:mm/i).clear().type('1200a');
    //     cy.findByDisplayValue('12:00 am').should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to fill out the location box and should not be able to submit', () => {
    //     cy.findByText(/location of event/i).siblings().last().children().last().children().first().type('1212 Rio Grande St, Austin, TX 78701');
    //     cy.findByDisplayValue('1212 Rio Grande St, Austin, TX 78701').should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select near miss from the event type box and should not be able to submit', () => {
    //     cy.findByRole('button', {  name: /actual event\/incident/i}).click();
    //     cy.findByRole('option', {  name: /near miss\/close call/i}).click();
    //     cy.findByDisplayValue(/near miss\/close call/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select actual event from the event type box and should not be able to submit', () => {
    //     cy.findByRole('button', {  name: /near miss\/close call/i}).click();
    //     cy.findByRole('option', {  name: /actual event\/incident/i}).click();
    //     cy.findByDisplayValue(/actual event\/incident/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select no from harm or potential harm box and should not be able to submit', () => {
    //     cy.findByRole('button',{name:/yes/i}).click();
    //     cy.findByRole('option',{name: /no/i}).click();
    //     cy.findAllByDisplayValue(/no/i).first().should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    // it('should be able to select yes from harm or potential harm box and should not be able to submit', () => {
    //     cy.findAllByRole('button',{name:/no/i}).first().click();
    //     cy.findByRole('option',{name: /yes/i}).click();
    //     cy.findByDisplayValue(/yes/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select patient from the individuals involved box and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /patient/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /patient/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select staff member from the individuals involved box and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /staff member/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /staff member/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select visitor from the individuals involved box and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /visitor/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /visitor/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select volunteer from the individuals involved box and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /volunteer/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /volunteer/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select other from the individuals involved box and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /other/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /other/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select family member from the individuals involved box, adult and child should be enabled, and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /family member/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /family member/i})).should('be.checked');
    //     cy.findByRole('checkbox', ({checked: false, name: /adult/i})).should('be.enabled');
    //     cy.findByRole('checkbox', ({checked: false, name: /child/i})).should("be.enabled");
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select adult from the individuals involved box after family member is selected and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /adult/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /adult/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select child from the individuals involved box after family member is selected and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({checked: false, name: /child/i})).check();
    //     cy.findByRole('checkbox', ({checked: true, name: /child/i})).should('be.checked');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to unselect family member from the individuals involved box and adult and child should be unselected and should not be able to submit', () => {
    //     cy.findByRole('checkbox', ({name: /family member/i})).uncheck();
    //     cy.findByRole('checkbox', ({name: /family member/i})).should('not.be.checked');
    //     cy.findByRole('checkbox', ({name: /child/i})).should('not.be.checked');
    //     cy.findByRole('checkbox', ({name: /child/i})).should('be.disabled');
    //     cy.findByRole('checkbox', ({name: /adult/i})).should('not.be.checked');
    //     cy.findByRole('checkbox', ({name: /adult/i})).should('be.disabled');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should be able to select adverse drug reaction in type of event box and not be able to submit', () => {
    //     cy.findByText(/type of event/i).siblings().last().children().children().children().children().first().click();
    //     cy.findByRole('option',{name:/adverse drug reaction/i}).click();
    //     cy.findByText(/adverse drug reaction/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should see harm sustained in effects of incident box and click harm sustained and not be able to submit', () => {
    //     cy.findByText(/effect of this incident on the individual\(s\) involved/i).siblings().last().children().last().children().first().click();
    //     cy.findAllByRole('option',{name:/harm sustained/i}).last().click();
    //     cy.findByDisplayValue(/harm sustained/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    // it('should see harm sustained in effects of incident box and click no harm sustained and not be able to submit', () => {
    //     cy.findByText(/effect of this incident on the individual\(s\) involved/i).siblings().last().children().last().children().first().click();
    //     cy.findAllByRole('option',{name:/harm sustained/i}).first().click();
    //     cy.findByDisplayValue(/no harm sustained/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in name of witnesses and not be able to submit', () => {
    //     cy.findByText(/witness name/i).siblings().first().children().last().children().first().type('Bob');
    //     cy.findByDisplayValue(/bob/i).should('exist');
    //     cy.findByText(/witness name/i).siblings().first().next().children().last().children().first().type('sally');
    //     cy.findByDisplayValue(/sally/i).should('exist');
    //     cy.findByText(/witness name/i).siblings().last().children().last().children().first().type('Tim');
    //     cy.findByDisplayValue(/tim/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in numbers of witnesses and should not be able to submit ', () => {
    //     cy.findByText(/witness telephone number/i).siblings().first().children().last().children().first().type('555-555-5555');
    //     cy.findByDisplayValue(/555-555-5555/i).should('exist');
    //     cy.findByText(/witness telephone number/i).siblings().first().next().children().last().children().first().type('666-666-6666');
    //     cy.findByDisplayValue(/666-666-6666/i).should('exist');
    //     cy.findByText(/witness telephone number/i).siblings().last().children().last().children().first().type('777-777-7777');
    //     cy.findByDisplayValue(/777-777-7777/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should select in departments involved in this incident and should not be able to submit', () => {
    //     cy.findByText(/department\(s\) involved in this incident/i).siblings().last().children().children().children().children().first().click();
    //     cy.findByRole('option',{name:/ambulatory care/i}).click();
    //     cy.findByText(/ambulatory care/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in a description of the serious eventand should not be able to submit', () => {
    //     cy.findByText(/description of incident/i).siblings().last().children().last().children().first().type('This is a test description of the event.');
    //     cy.findByDisplayValue('This is a test description of the event.').should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in a description of actions taken and should not be able to submit', () => {
    //     cy.findByText(/what actions, if any, could have been taken to prevent this incident from occurring/i).siblings().first().next().next().next().next().children().last().children().first().type('No actions could have prevented this test.');
    //     cy.findByDisplayValue('No actions could have prevented this test.').should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in a patient name and not and should not be able to submit', () => {
    //     cy.findByText(/patient name or id plate/i).siblings().last().children().last().children().first().type('TestTest');
    //     cy.findByDisplayValue(/testtest/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in a patient SSN and not and should not be able to submit', () => {
    //     cy.findByText(/patient ssn/i).siblings().last().children().last().children().first().type('123-456-7890');
    //     cy.findByDisplayValue(/123-456-7890/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    //
    // it('should type in a patient telephone number and not and should not be able to submit', () => {
    //     cy.findByText(/patient telephone number/i).siblings().last().children().last().children().first().type('098-765-4321');
    //     cy.findByDisplayValue(/098-765-4321/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    // it('should type in a patient address', () => {
    //     cy.findByText(/patient address/i).siblings().last().children().last().children().first().type('6101 Highland Campus Dr, Austin, TX 78752');
    //     cy.findByDisplayValue(/6101 Highland Campus Dr, Austin, TX 78752/i).should('exist');
    // });
    //
    // it('should be able to click the submit button',()=>{
    //     cy.findByRole('button',{name:/submit/i}).should('be.enabled');
    // });
    //
    // it('should not be able to submit if any of the fields are empty',()=>{
    //     cy.findByText(/patient telephone number/i).siblings().last().children().last().children().first().clear();
    //     cy.findByRole('button',{name:/submit/i}).should('be.disabled');
    // });
    // it('should be able to refill the field and then should be able to submit', () => {
    //     cy.findByText(/patient telephone number/i).siblings().last().children().last().children().first().type('098-765-4321');
    //     cy.findByDisplayValue(/098-765-4321/i).should('exist');
    //     cy.findByRole('button',{name:/submit/i}).should('be.enabled');
    // });






});