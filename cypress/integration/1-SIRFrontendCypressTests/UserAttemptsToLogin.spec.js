describe('user attempts to login to the site', () => {
    before(() => {
        cy.visit('/login')
    });
    describe('user types in incorrect username and password',()=>{
        it('user inputs a user name',()=>{
            cy.findByRole('textbox',{name:/email/i}).type('testusername');
            cy.findByDisplayValue(/testusername/i).should('exist');
        });
        it('user inputs a password',()=>{
            cy.findByLabelText(/password/i).type('testpassword');
            cy.findByDisplayValue(/testpassword/i).should('exist');
        });
    });




});