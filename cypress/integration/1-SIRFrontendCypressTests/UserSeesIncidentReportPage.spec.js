describe('user navigating to the homepage', () => {
    beforeEach(() => {
        cy.visit('/supervisor')
    });
    it('should see a banner and a menu button', () => {
        cy.findByRole("banner").should('exist');
        cy.findByRole("img", {name: /army software factory icon/i}).should('exist');
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
});