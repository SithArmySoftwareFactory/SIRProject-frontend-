import {screen} from "@testing-library/react";

describe('user navigating to the homepage', () => {
    before(() => {
        cy.visit('/supervisor')
    });
    it('should see a banner and a menu button', () => {
        cy.findByRole("banner").should('exist');
    });

    it('should see an Incident Reports header', () => {
        cy.findByText(/incident reports/i).should('exist');
    });

    it('should see heading reports', () => {
        cy.findByRole('cell',{name:/reports/i}).should('exist');
    });

    it('should see the filter button',()=>{
       cy.findByRole('button',{name:/show filters/i}).should('exist');
    });

    it('should see a searchbox',()=>{
        cy.findByRole('searchbox').should('exist');
    });

    it('should see a checkbox to select all boxes',()=>{
        cy.findByRole('checkbox', {  name: /select all rows/i}).should('exist');
    });

    it('should see a event date',()=>{
        cy.findByText(/event date/i).should('exist');
    });

    it('should see location',()=>{
        // cy.findByText(/location/i).should('exist');
        cy.findByRole('columnheader', {  name: /location/i}).should('exist');
    });

    it('should see incident type',()=>{
        cy.findByText(/incident type/i).should('exist');
    });

    it('should see harm',()=>{
        cy.findByText(/harm/i).should('exist');
    });

    it('should see individuals(s) involved',()=>{
        cy.findByText(/individuals\(s\) involved/i).should('exist');
    });

    it('should see event type',()=>{
        cy.findByText(/event type/i).should('exist');
    });

    it('should see details',()=>{
        cy.findByText(/details/i).should('exist');
    });

    it('should see rows per page',()=>{
        cy.findByText(/rows per page:/i).should('exist');
    });

    it('should see button changes row per page',()=>{
        cy.findByRole('button',{name:/rows per page: 5/i}).should('exist');
    });

    it('should see button changes to the next page',()=>{
        cy.findByRole('button',{name:/go to next page/i}).should('exist');
    });

    it('should see button changes to the next page',()=>{
        cy.findByRole('button',{name:/go to previous page/i}).should('exist');
    });

});